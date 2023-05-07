//dependencies
const path = require('path');
const PopulateRandomFile = require('../helpers/PopulateRandomFile');
const fs = require('fs').promises;

//Personalities directory path
const PERSONALITIES_DIRECTORY = path.join(__dirname, '../personalities/');

/**
 * This function randomly selects a personality from personalities directory.
 */
const choosePersonality = async () => {
  const personalitiesFiles = await fs.readdir(PERSONALITIES_DIRECTORY);
  const randomPersonality = PopulateRandomFile(personalitiesFiles);
  const personalityFile = personalitiesFiles[randomPersonality];
  const personality = await fs.readFile(path.join(PERSONALITIES_DIRECTORY, personalityFile));
  return JSON.parse(personality);
};

module.exports = choosePersonality;
