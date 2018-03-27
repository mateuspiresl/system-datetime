const { exec } = require('child_process');

exports.set = function (datetime)
{
  return new Promise((resolve, reject) =>{
    const process = exec(`sudo date -s "${datetime}"`);
    
    process.on('close', resolve);
    process.on('error', reject);
  });
};