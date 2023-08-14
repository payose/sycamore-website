import axios from "axios";

const API_KEY = "aQwnkIt6LwcZ1z63gqge88I3I";
const API_URL = "https://api.twitter.com/2/";

export const fetchVideos = async () => {
  const response = await axios.get(`${API_URL}search?key=${API_KEY}`, {});
  return {
    data: response.data,
    status: response.status
  };
};
