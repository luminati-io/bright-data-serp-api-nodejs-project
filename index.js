/**
 * Example of using Bright Data's SERP API
 * This simple script demonstrates how to make a search engine request through Bright Data SERP API
 */

// Configuration - Update these values
const CONFIG = {
    // Step 1: Get your API token here: https://brightdata.com/cp/setting/users
    apiToken: process.env.BRIGHT_DATA_API_TOKEN || 'YOUR_API_TOKEN',
    // Step 2: Get your SERP zone here: https://brightdata.com/cp/zones 
    zone: 'serp_api1', 
    // Step 3: Set your search engine query with URL
    searchEngineQueryUrl: 'https://www.google.com/search?q=pizza'
    // Step 4: Run `node index.js` commend on terminal
  };
  
  /**
   * Makes a request to the Bright Data API
   * @returns {Promise} Promise that resolves with the API response
   */
  async function fetchWithBrightData() {
    try {
      // Input validation
      if (CONFIG.apiToken === 'YOUR_API_TOKEN') {
        console.warn('⚠️ Please set your actual API token before making requests');
      }
  
      console.log(`🔄 Fetching ${CONFIG.searchEngineQueryUrl} through Bright Data SERP API...`);
      
      const response = await fetch('https://api.brightdata.com/request', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CONFIG.apiToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          zone: CONFIG.zone,
          url: CONFIG.searchEngineQueryUrl,
          format: 'json'
        })
      });
  
      // Handle HTTP errors
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('✅ Request successful!');
      return data;
    } catch (error) {
      console.error('❌ Error:', error.message);
      throw error; // Re-throw to allow further handling if needed
    }
  }
  
  // Execute the function and handle the response
  fetchWithBrightData()
    .then(data => {
      console.log('📊 Response data:', data);
    })
    .catch(error => {
      // Error already logged in the function
      process.exit(1); // Exit with error code for scripts/automation
    });
  
  /**
   * How to use this script:
   * 1. Get your API token from https://brightdata.com/cp/setting/users, more details https://docs.brightdata.com/general/account/api-token
   * 2. Choose your zone from https://brightdata.com/cp/zones
   * 3. Set your target URL
   * 4. For better security, set environment variables:
   *    - export BRIGHT_DATA_API_TOKEN=your_token_here
   * 5. Run the script with: node index.js
   */