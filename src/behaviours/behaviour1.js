module.exports = async page => {
  // Define target URL
  const targetUrl = 'https://example.com';

  // Navigate to the target URL
  await page.goto(targetUrl, { waitUntil: 'networkidle2' });

  // Wait for some time

  await page.waitForTimeout(5000);

  // Scroll down the page

  await page.evaluate(() => window.scrollBy(0, window.innerHeight));

  // Wait for some time

  await page.waitForTimeout(5000);

  // Click on a random link

  const links = await page.$$('a');

  const randomLink = links[Math.floor(Math.random() * links.length)];

  await randomLink.click();

  // Wait for some time

  await page.waitForTimeout(5000);

  // Fill out a form

  await page.type('#name-input', 'John Doe');

  await page.type('#email-input', 'johndoe@example.com');

  await page.type('#message-input', 'Hello, world!');

  await page.click('#submit-button');

  // Wait for some time
  await page.waitForTimeout(5000);

  //randomly run the main task
};
