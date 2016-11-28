import * as fs from 'fs'
import * as path from 'path'
export const resourceLoader = { get: (url) => {
  console.log(process.cwd())
  console.log(url)
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(`./src/${url}`), (err, result) => {
      if(!err){
        resolve(result.toString());
        return;
      }
      reject(err);
    });
  });
} }
