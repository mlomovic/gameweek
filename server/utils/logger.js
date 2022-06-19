const winston = require('winston');
const expressWinston = require('express-winston');

exports.logger = expressWinston.logger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.colorize(),
    winston.format.json(),
    winston.format.timestamp()
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/request.log',
      level: 'info'
    }),
  ],

  meta: true,
  // metaField: `timestamp: ${ts.timeStamp}`,
  colorize: true,
  timestamp: true,
  msg: "userId={{req.userId}}",
});


exports.errorLogger = expressWinston.errorLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.colorize(),
    winston.format.json(),
    winston.format.timestamp()
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error'
    }),
  ],
  
  meta: true,
  // metaField: `timestamp: ${new Date()}`,
  colorize: true,
  // timestamp: true,
  msg: "userId={{req.userId}}",
});