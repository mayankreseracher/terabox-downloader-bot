// Import the Apify SDK to connect with the platform
import { Actor } from 'apify';

// Import your Terabox bot functionality
// Replace 'terabox-bot' with the actual path to your bot's main file
import * as teraboxBot from './terabox-bot';

// Main function that runs the Actor
async function main() {
  // Initialize the Actor - this connects your code to the Apify platform
  await Actor.init();
  
  console.log('Starting Terabox bot on Apify platform...');
  
  try {
    // Get input from the Actor (if any)
    const input = await Actor.getInput() || {};
    
    // Run your Terabox bot with the input
    const result = await teraboxBot.run(input);
    
    // Save the output to the Actor's default dataset
    await Actor.pushData(result);
    
    console.log('Terabox bot finished successfully!');
  } catch (error) {
    console.error('Error while running the Terabox bot:', error);
    throw error;
  } finally {
    // Always close the Actor properly
    await Actor.exit();
  }
}

// Run the Actor
main();
