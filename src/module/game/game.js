const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ Zl4d7IVkemOTTVg2fUdz added/scores/';

const getData = async () => {
  const connect = await fetch(baseURL);
  const scoreList = await connect.json();
  return scoreList;
};



export { getData, setData };