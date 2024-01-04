import  { createLogger, format, transports } from "winston";


// All logs, regardless of severity, are captured in the 'user.log' file, while the 'user-error.log' file is dedicated specifically to errors to make them easier to locate and analyze.

const customFormat = format.printf(({ level, message, req }) => {
    const userEmail = req && req.body && req.body.email ? ` - Email: ${req.body.email}` : '';
    return `[${level}]: ${message}${userEmail}`;
  });
  

export const userLogger = createLogger({
    transports:[
        new transports.File({
            filename: 'user.log',
            level:'info',
            format:format.combine(format.timestamp(), customFormat, format.json())
        }),
        new transports.File({
            filename: 'user-error.log',
            level:'error',
            format:format.combine(format.timestamp(), customFormat, format.json())
        })
    ]
});


