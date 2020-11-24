import axios from "axios";

const apiKey = process.env.REACT_APP_COVID_API_KEY;

export const getPosts = async () => {
  const response = await axios.get(
    `http://cors-anywhere.herokuapp.com/https://api.corona-19.kr/korea/?serviceKey=${apiKey}`
  );

  return response.data;
};

export const getRegion = async () => {
  const response = await axios.get(
    `http://cors-anywhere.herokuapp.com/https://api.corona-19.kr/korea/country/new/?serviceKey=${apiKey}`
  );

  return response.data;
};
