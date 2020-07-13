const mockData = require("./mockData.json");
const stripe = require("stripe")("YOUR_STRIPE_SK_HERE");
const fs = require("fs");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const addToStripe = (data) => {
  return data.map(async (item, i) => {
    await sleep((1000 / 10) * i);
    const stripeProduct = await stripe.products.create({
      name: item.name,
      images: [item.image_link],
      type: "good",
    });
    const stripePrice = await stripe.prices.create({
      product: stripeProduct.id,
      unit_amount: (item.price * 100).toFixed(0),
      currency: "cad",
    });
    return {
      ...item,
      stripe_product_id: stripeProduct.id,
      stripe_price_id: stripePrice.id,
    };
  });
};

Promise.all(addToStripe(mockData))
  .then((data) => {
    fs.writeFile("./mockDataWithStripe.json", JSON.stringify(data), function (
      err
    ) {
      if (err) {
        throw err;
      }
      console.log("The file was saved!");
    });
  })
  .catch((error) => console.log(error));
