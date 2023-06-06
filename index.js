const axios = require('axios');

async function getRandomDogImage() {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const imageUrl = response.data.message;
    return imageUrl;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

module.exports = {
  getRandomDogImage
};
