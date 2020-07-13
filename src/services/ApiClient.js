import mockData from "./mockDataWithStripe.json"; // Import mock data.

function getData() {
  return Promise.resolve(mockData); // Use this lines to access mock data for the client.
}

export default {
  getData,
};
