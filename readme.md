### Installtion
After cloning, run `npm install`

### CLI Commands
* `npm run import <pair>` ex: `npm run import BTC/USDT`
  * will import all trade data for a given pair from an exchange
  * pair must be a valid exchange pair
* `npm process <pair> <type> <lengths>` ex: `npm process BTC/USDT tick 10,50,100`
  * processes downloaded trades into different candle types
  * type must be: `tick`|`time`|`volume`|`currency` (currently only tick works)
  * lengths are comma separated with no spaces