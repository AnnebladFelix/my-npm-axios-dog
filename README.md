# my-npm-axios-dog
An npm package fetching a random dog image from https://dog.ceo/dog-api/ using axios from axios-http.com

# How to use
Install with your terminal:
```
npm i my-npm-axios-dog
```

Example how to use in your code.
```
const { getRandomDogImage } = require('my-npm-axios-dog');

async function main() {
  try {
    const imageUrl = await getRandomDogImage();
    console.log(imageUrl);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
```