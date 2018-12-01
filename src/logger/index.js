const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

/* istanbul ignore next */
const outputFormat = printf(
  info => `${info.timestamp} ${info.level}: ${info.message}`
);

/* istanbul ignore next */
const Logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  silent: process.env.ENV === "test",
  transports: [
    new transports.Console({
      format: combine(
        timestamp({ format: "YY-MM-DD HH:mm:ss" }),
        colorize(),
        outputFormat
      )
    })
  ]
});

module.exports = Logger;