const { exec } = require('child_process');

/**
 * Get the date and time of the system.
 * @returns {Date} The current date and time of the system.
 */
exports.get = function (datetime)
{
  return new Promise((resolve, reject) =>{
    const process = exec('date "+%F %T"', (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);

      resolve(new Date(stdout));
    });
  });
};

/**
 * Set the date and time of the system.
 * Requires super use permission.
 * @param {String|Date} datetime The date and time to override.
 * @returns {Date} The updated date and time of the system.
 */
exports.set = function (datetime)
{
  return new Promise((resolve, reject) =>{
    const process = exec(`sudo date "+%F %T" -s "${datetime}"`, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      
      resolve(new Date(stdout));
    });
  });
};

/**
 * Persist the system time in hardware using 'hwclock'.
 * Requires super use permission.
 * @returns {String} The 'hwclock' output.
 */
exports.persistInHardware = function ()
{
  return new Promise((resolve, reject) =>{
    const process = exec('sudo hwclock -w', (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      
      resolve(stdout);
    });
  });
};