const { exec } = require('child_process');

exports.set = function (timezone)
{
  return new Promise((resolve, reject) =>{
    const process = exec('sudo timedatectl set-timezone ' + timezone);
    
    process.on('close', resolve);
    process.on('error', reject);
  });
};