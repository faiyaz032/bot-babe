//dependencies
const util = require('util');
const { exec } = require('child_process');

//promisify the exec method
const terminal = util.promisify(exec);

/**
 * This function will change the system's timezone to given timezone.
 * @param {String} timezone
 */
const changeSystemTimezone = async timezone => {
  if (!timezone) return;

  //check if the system is linux
  if (process.platform === 'linux') {
    try {
      //execute the command to change system's timezone
      await terminal(`echo riddler14361436 | sudo -S timedatectl set-timezone ${timezone}`);
      console.log(`Changed the timezone successfully to ${timezone}`);
      return;
    } catch (error) {
      console.log('Error while changing the system timezone on linux');
    }
  }

  //check if the system is windows
  if (process.platform === 'win32') {
    try {
      //execute the command to change system's timezone
      await terminal(`tzutil /s "${timezone}"`);
      console.log(`Changed the timezone successfully to ${timezone}`);
      return;
    } catch (error) {
      console.log('Error while changing the system timezone on windows');
    }
  }
};

module.exports = changeSystemTimezone;
