import mockData from './mockDataWithStripe.json'; // Import mock data.
// const BASE_URL = process.env.REACT_APP_API_URL;

function getData() {
  // return fetchRequest('/');
  console.log(mockData);
  return Promise.resolve(mockData); // Use this lines to access mock data for the client.
}

// function fetchRequest(path, options) {
//   return fetch(BASE_URL + path, options)
//     .then((res) => (res.ok ? res : Promise.reject(res)))
//     .then((res) => (res.status !== 204 ? res.json() : res))
//     .catch(
//       (err) =>
//         console.log(`Error fetching [${options ? options.method : `GET`}]`, err) // eslint-disable-line
//     );
// }

export default {
  getData,
};
