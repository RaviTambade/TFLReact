import config from './config';

const API_KEY = config.REACT_APP_API_KEY;
const API_URL = config.API_URL;

export const fetchData = async () => {
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
