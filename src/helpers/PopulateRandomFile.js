/**
 * This function populate a random file from the given directory
 * @param {Array} directoryName
 */
module.exports = directoryName => {
  return Math.floor(Math.random() * directoryName.length);
};
