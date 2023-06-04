// Replace YOUR_API_KEY with your actual API key
var apiKey = "YOUR_API_KEY";

// Replace ITEM_IDENTIFIER with the identifier for the item you want to fetch the price of
var itemIdentifier = "ITEM_IDENTIFIER";

// Fetch the price from Prisjakt.no API
fetch(`https://api.prisjakt.no/v1/item?identifier=${itemIdentifier}&apikey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Display the price in a HTML element
    document.getElementById("price").innerHTML = data.price;
  });

// Make sure to replace YOUR_API_KEY with your actual API key and ITEM_IDENTIFIER with the identifier for the item you want to fetch the price of.
// You can then add an HTML element with the ID "price" where you want to display the price, like this:
// <p id="price"></p>