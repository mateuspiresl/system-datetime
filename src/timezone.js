const { exec } = require('child_process');

/**
 * Get the timezone of the system.
 * The timezone returned will be one of the listed by the command
 * "timedatectl list-timezones".
 * @returns {String} The timezone of the system.
 */
exports.get = function (timezone)
{
  return new Promise((resolve, reject) =>{
    const process = exec('timedatectl status | grep -oE "Time zone: .*" | awk \'{print $3}\'', (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      
      resolve(stdout.trim());
    });
  });
};

/**
 * Set the timezone of the system.
 * The timezone must be one of the listed by the command
 * "timedatectl list-timezones".
 */
exports.set = function (timezone)
{
  return new Promise((resolve, reject) =>{
    const process = exec('sudo timedatectl set-timezone ' + timezone);
    
    process.on('close', resolve);
    process.on('error', reject);
  });
};