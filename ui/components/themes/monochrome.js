/**
 * AnyChart is lightweight robust charting library with great API and Docs, that works with your stack and has tons of chart types and features.
 *
 * Theme: monochrome
 * Version: 1.0.0 (2019-01-14)
 * License: https://www.anychart.com/buy/
 * Contact: sales@anychart.com
 * Copyright: AnyChart.com 2019. All rights reserved.
 */
(function() {
  "use strict";

  function a() {
    return window.anychart.color.setOpacity(this.sourceColor, 0.6, !0);
  }
  function b() {
    return window.anychart.color.darken(this.sourceColor);
  }
  function c() {
    return window.anychart.color.lighten(this.sourceColor);
  }
  var e = {
    palette: {
      type: "distinct",
      items: ["#252525", "#636363", "#898989", "#acacac", "#e1e1e1"]
    },
    defaultOrdinalColorScale: {
      autoColors: function(d) {
        return window.anychart.color.blendedHueProgression(
          "#e1e1e1",
          "#707070",
          d
        );
      }
    },
    defaultLinearColorScale: { colors: ["#e1e1e1", "#707070"] },
    defaultFontSettings: {
      fontFamily: "Verdana, Geneva, sans-serif",
      fontColor: "#959595"
    },
    defaultBackground: {
      fill: "#ffffff",
      stroke: "#ffffff",
      cornerType: "round",
      corners: 0
    },
    defaultAxis: {
      stroke: "#d7d7d7",
      ticks: { stroke: "#d7d7d7" },
      minorTicks: { stroke: "#ebebeb" }
    },
    defaultGridSettings: { stroke: "#d7d7d7" },
    defaultMinorGridSettings: { stroke: "#ebebeb" },
    defaultTooltip: {
      title: { fontColor: "#212121", padding: { bottom: 10 }, fontSize: 14 },
      separator: { enabled: !1 },
      fontColor: "#464646",
      fontSize: 13,
      background: { fill: "#e1e1e1 0.9", stroke: "#ffffff", corners: 5 },
      padding: { top: 8, right: 15, bottom: 10, left: 15 }
    },
    chart: {
      defaultSeriesSettings: {
        base: {
          selected: {
            fill: "#bdbdbd",
            hatchFill: { type: "percent20", color: "#212121" },
            stroke: "1.5 #212121"
          }
        },
        lineLike: {
          selected: {
            stroke: "3 #212121",
            markers: { enabled: !0, fill: "#bdbdbd", stroke: "1.5 #212121" }
          }
        },
        areaLike: {
          selected: {
            stroke: "3 #212121",
            markers: { enabled: !0, fill: "#bdbdbd", stroke: "1.5 #212121" }
          }
        },
        candlestick: {
          normal: {
            risingFill: "#252525",
            risingStroke: "#252525",
            fallingFill: "#acacac",
            fallingStroke: "#acacac"
          },
          hovered: {
            risingFill: c,
            risingStroke: b,
            fallingFill: c,
            fallingStroke: b
          },
          selected: {
            risingStroke: "3 #252525",
            fallingStroke: "3 #acacac",
            risingFill: "#333333 0.85",
            fallingFill: "#333333 0.85"
          }
        },
        ohlc: {
          normal: {
            risingStroke: "#252525",
            fallingStroke: "#acacac",
            markers: { enabled: !1 }
          },
          hovered: { risingStroke: b, fallingStroke: b },
          selected: { risingStroke: "3 #252525", fallingStroke: "3 #acacac" }
        }
      }
    },
    pieFunnelPyramidBase: {
      normal: { labels: { fontColor: null } },
      selected: {
        fill: "#bdbdbd",
        stroke: "1.5 #212121",
        hatchFill: { type: "percent20", color: "#212121" }
      },
      connectorStroke: "#d7d7d7",
      outsideLabels: { autoColor: "#959595" },
      insideLabels: { autoColor: "#fff" }
    },
    map: {
      unboundRegions: { enabled: !0, fill: "#F7F7F7", stroke: "#B9B9B9" },
      defaultSeriesSettings: {
        base: { normal: { labels: { fontColor: "#fafafa" } } },
        connector: {
          normal: {
            stroke: "1.5 #252525",
            markers: { fill: "#252525", stroke: "1.5 #F7F7F7" }
          },
          hovered: { markers: { fill: "#252525", stroke: "1.5 #F7F7F7" } },
          selected: {
            stroke: "1.5 #000",
            markers: { fill: "#000", stroke: "1.5 #F7F7F7" }
          }
        },
        marker: { normal: { labels: { fontColor: "#000" } } }
      }
    },
    sparkline: {
      padding: 0,
      background: { stroke: "#ffffff" },
      defaultSeriesSettings: {
        area: { stroke: "1.5 #252525", fill: "#252525 0.5" },
        column: { fill: "#252525", negativeFill: "#acacac" },
        line: { stroke: "1.5 #252525" },
        winLoss: { fill: "#252525", negativeFill: "#acacac" }
      }
    },
    bullet: {
      background: { stroke: "#ffffff" },
      defaultMarkerSettings: { fill: "#252525", stroke: "2 #252525" }
    },
    heatMap: {
      normal: { stroke: "1 #ffffff", labels: { fontColor: "#212121" } },
      hovered: { stroke: "1.5 #ffffff" },
      selected: {
        stroke: "2 #212121",
        fill: "#bdbdbd",
        hatchFill: { type: "percent20", color: "#212121" }
      }
    },
    treeMap: {
      normal: {
        headers: {
          background: { enabled: !0, fill: "#F7F7F7", stroke: "#B9B9B9" }
        },
        labels: { fontColor: "#212121" },
        stroke: "#B9B9B9"
      },
      hovered: {
        headers: {
          fontColor: "#959595",
          background: { fill: "#B9B9B9", stroke: "#B9B9B9" }
        }
      },
      selected: { labels: { fontColor: "#fafafa" }, stroke: "2 #eceff1" }
    },
    stock: {
      padding: [20, 30, 20, 60],
      defaultPlotSettings: {
        xAxis: { background: { fill: "#B9B9B9 0.5", stroke: "#B9B9B9" } }
      },
      scroller: {
        fill: "none",
        selectedFill: "#B9B9B9 0.5",
        outlineStroke: "#B9B9B9",
        defaultSeriesSettings: {
          base: {
            normal: { fill: "#999 0.6", stroke: "#999 0.6" },
            selected: { fill: a, hatchFill: null, stroke: a }
          },
          lineLike: {
            normal: { fill: "#999 0.6", stroke: "#999 0.6" },
            selected: { stroke: a }
          },
          areaLike: {
            normal: { fill: "#999 0.6", stroke: "#999 0.6" },
            selected: { stroke: a }
          },
          candlestick: {
            normal: {
              risingFill: "#999 0.6",
              risingStroke: "#999 0.6",
              fallingFill: "#999 0.6",
              fallingStroke: "#999 0.6"
            },
            selected: {
              risingStroke: a,
              fallingStroke: a,
              risingFill: a,
              fallingFill: a
            }
          },
          ohlc: {
            normal: { risingStroke: "#999 0.6", fallingStroke: "#999 0.6" },
            selected: { risingStroke: a, fallingStroke: a }
          }
        }
      }
    }
  };
  window.anychart = window.anychart || {};
  window.anychart.themes = window.anychart.themes || {};
  window.anychart.themes.monochrome = e;
})();