

const getData = async () => {
  const connect = await fetch(baseURL);
  const scoreList = await connect.json();
  return scoreList;
};

const setData = async (userName, userScore) => {
  const connect = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({ user: userName, score: userScore }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const receivedData = await connect.json();
  return receivedData;
};

export { getData, setData };