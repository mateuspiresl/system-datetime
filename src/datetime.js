const { exec } = require('child_process');

/**
 * Get the date and time of the system.
 * @returns {Date} The current date and time of the system.
 */
exports.get = function (datetime)
{
  return new Promise((resolve, reject) =>{
    const process = exec('date "+%d/%m/%Y %H:%M:%S"', (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);

      resolve(new Date(stdout));
    });
  });
};

/**
 * Set the date and time of the system.
 * Requires super use permission.
 * @returns {Date} The updated date and time of the system.
 */
exports.set = function (datetime)
{
  return new Promise((resolve, reject) =>{
    const process = exec(`sudo date -s "${datetime}"`, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      
      resolve(new Date(stdout));
    });
  });
};