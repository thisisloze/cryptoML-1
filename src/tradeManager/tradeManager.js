const Logger = require("../logger/logger");

const TradeManager = {
  init: function(
    genome,
    data,
    networkInput,
    {
      longThresh,
      shortThresh,
      positionChangeThesh,
      fees,
      slippage,
      allowShorts
    }
  ) {
    this.genome = genome;
    this.data = data;
    this.networkInput = networkInput;
    this.longThresh = longThresh;
    this.shortThresh = shortThresh;
    this.positionChangeThesh = positionChangeThesh;
    this.fees = fees;
    this.slippage = slippage;
    this.allowShorts = allowShorts;

    this.asset = 0;
    this.startCurrency = 1;
    this.currency = this.startCurrency;

    this.buys = 0;
    this.sells = 0;

    //More notes for future me. It may be worth experimenting with inputting current position
    //information for the model.
    this.position = {
      type: "none",
      size: 0,
      startCurrency: 0
    };
  },

  doLong: function(positionSize, candle) {
    try {
      if (
        (this.position.type === "none" &&
          positionSize > this.positionChangeThesh) ||
        (this.position.type === "long" &&
          Math.abs(positionSize - this.position.size) >
            this.positionChangeThesh)
      ) {
        const changeAmt = positionSize - this.position.size;
        if (this.position.type === "none") {
          this.position.startCurrency = this.currency;
        }
        const change = changeAmt * this.position.startCurrency;
        const cost = change < this.currency ? change : this.currency;
        this.currency -= cost;

        if (changeAmt > 0) {
          this.asset += (cost * (1 - (this.fees + this.slippage))) / candle[1];
          this.buys++;
          if (this.currency < 0) {
            //this should not be possible
            throw "Currency dropped below 0.";
          }
        } else {
          this.asset += (cost * (1 + (this.fees + this.slippage))) / candle[1];
          this.sells++;
          if (this.asset < 0) {
            //this should also not be possible
            throw "Asset dropped below 0.";
          }
        }
        this.position.size = positionSize;
      }
    } catch (e) {
      Logger.error(e);
      process.exit();
    }
  },

  // doShort: function(positionSize, candle) {
  //   if (this.allowShorts) {
  //   }
  // },

  handleCandle: function(candle, [signal, positionSize]) {
    positionSize = positionSize === undefined ? 1 : positionSize;

    if (signal > this.longThresh) {
      this.doLong(positionSize, candle);
    } else if (signal < this.shortThresh) {
      //this.doShort(positionSize, candle);
    } else {
      //do something? Exit all positions maybe?
    }
  },

  //leaving thoughts here for future me. probably don't need the raw candle data to be
  //in the form of an array of arrays. can leave it as an object of arrays so we can reference
  //something like this.data.close instead of this.data[1] which is a little awkward
  runTrades: function() {
    this.data[0].forEach((x, index) => {
      const candleInput = this.networkInput.reduce(
        (array, item) => [...array, item[index]],
        []
      );
      const candle = this.data.reduce(
        (array, item) => [...array, item[index]],
        []
      );
      const output = this.genome.activate(candleInput);

      this.handleCandle(candle, output);
    });

    return {
      currency: this.currency,
      startCurrency: this.startCurrency,
      asset: this.asset,
      value: this.currency + this.asset * this.data[this.data.length - 1][1],
      buys: this.buys,
      sells: this.sells
    };
  }
};

module.exports = TradeManager;
