const puppeteer = require('puppeteer');
const choosePersonality = require('./utils/choosePersonality');
const changeSystemTimezone = require('./utils/changeSystemTimezone');

async function main() {
  // choose personalities randomly from the personalities folder (util)
  //const personality = await choosePersonality();
  // change the system timezone according to the chosen personality (util)
  // await changeSystemTimezone(personality.timezone);
  // launch puppeteer browser with the randomly chosen personality args
  // use stealth and proxy plugin for the fingerprint
  // goto a validator site and check if the browser is validated as human using puppeteer
  // load all the cookies/caches/history files related to the corresponding personality and set the cookie to browser using page.setCookie
  // choose a behavior randomly from the behaviors folder (util)
  // if there is multiple task running at the same time then it must be unique behavior
  // load the behavior script and execute it
  // save/overwrite all the cookies to the file before close the browser (each task).
  // close the browser
}

main();
