# Bright Data SERP API Nodejs project
Bright Data SERP API Nodejs boilerplate code

[![Bright Data Promo](https://github.com/luminati-io/LinkedIn-Scraper/raw/main/Proxies%20and%20scrapers%20GitHub%20bonus%20banner.png)](https://brightdata.com/)


[Edit in StackBlitz editor ⚡️](https://stackblitz.com/~/github.com/luminati-io/bright-data-serp-api-nodejs-project?file=index.js)

## Bright Data SERP API example

This project demonstrates how to use [Bright Data's SERP API](https://brightdata.com/products/serp-api) to access search engine query results without being blocked through [Bright Data SERP API](https://brightdata.com/products/serp-api).


### Using environment variables in StackBlitz

1. Select the `.env` file
2. Add the following variables:
   - `BRIGHT_DATA_API_TOKEN`: Your Bright Data [API Token](https://docs.brightdata.com/general/account/api-token)
   - `BRIGHT_DATA_ZONE`: Your Bright Data SERP API [Zone](https://brightdata.com/cp/zones) name (e.g., `serp_api1`)

### Direct configuration

Alternatively, edit the CONFIG object directly in the script:

```javascript
const CONFIG = {
  apiToken: process.env.BRIGHT_DATA_API_TOKEN || 'YOUR_API_TOKEN', // Replace with your actual token
  zone: process.env.BRIGHT_DATA_ZONE || 'serp_api1',           // Replace with your SERP APIzone
  searchEngineQueryUrl: 'https://geo.brdtest.com/welcome.txt'                 // Replace with your search engine query URL
};
```

## Running the example

1. Make sure you've configured your `API token` and `zone`
2. Run `node index.js` in the terminal
3. Check the console output for the results

## How it works?

1. The script makes a POST request to Bright Data's SERP API API endpoint
2. It includes your authentication token and search engine query URL
3. Bright Data's SERP API accesses the search engine query URL
4. The response is returned to your script and displayed in the console

## Troubleshooting

If you encounter errors:

- Verify your API token is correct
- Check that your zone name is valid
- Ensure your search engine query URL is properly formatted

## Modifying the example

To request a different URL:
1. Update the `searchEngineQueryUrl` in the CONFIG object
2. Run the script again

## Additional resources

- [Bright Data SERP API API](https://docs.brightdata.com/scraping-automation/serp-api/introduction)
- [Get an API Token](https://docs.brightdata.com/general/account/api-token)
- [Manage Zones](https://brightdata.com/cp/zones)

**Note:** This is an example implementation for educational purposes. For production use, consider adding additional error handling, logging, and security measures.
