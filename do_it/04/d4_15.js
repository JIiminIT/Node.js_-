// 로그 파일 남기기

var winston = require('winston'); // 로그 처리 모듈
var winstonDaily = require('winston-daily-rotate-file'); // 로그 일별 처리 모듈
var moment = require('moment'); // 시간 처리 모듈

function tiemStampFormat(){
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    // ex) '2020-04-27 20:14:28.500 +0900'
};

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
                name: 'debug-console',
                colorize: true,
                level: 'debug',
                showLevel: true,
                json: false,
                timestamp: false,
                filename: 'logging.log'
        }),
        new (winston.transports.File)({
                name: 'debug-console',
                colorize: true,
                level: 'debug',
                showLevel: true,
                json: false,
                timestamp: false,
                filename: 'logging.log'
        }),
    ],
});