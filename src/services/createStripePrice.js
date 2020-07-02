// import mockData from './mockData.json';
const mockData = require('./mockData.json');
// const mockDataObject = JSON.parse(mockData);
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_CHECKOUT_SK);
const fs = require('fs');

const addToStripe = (data) => {
  return data.map(async (item) => {
    const stripeProduct = await stripe.products.create({
      name: item.name,
      description: item.description,
      images: [item.image_link],
      type: 'good',
    });
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: item.price * 100,
      currency: 'cad',
    });
    return { ...item, stripe_price: stripePrice.id };
  });
};

Promise.all(addToStripe(mockData)).then((dataWithStripe) => {
  fs.writeFile('./mockDataWithStripe.json', dataWithStripe, function (err) {
    if (err) {
      throw err;
    }
    console.log('The file was saved!');
  });
});
