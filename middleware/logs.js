import fs from "fs";

const generateLogs = (req, res, next) => {
  if(req.path == '/favicon.ico') {
    next();
  }
  let data = `${Date.now()}: ${req.method}  ${req.path}\n`;
  fs.appendFile("./logs/url.log", data, (err) => {
    if(err) return new Error(err)
    next();
  })
}

export default generateLogs;