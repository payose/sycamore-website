import axios from "axios";

const API_KEY = "AIzaSyD8ynPnJ7ur8TPIhXht4tfV5K7ViB0_LH0";
const API_URL = "https://www.googleapis.com/youtube/v3/";

export const fetchVideos = async () => {
  const response = await axios.get(`${API_URL}search?key=${API_KEY}`, {
    params: {
      channelId: "UCzsMXDElPmWUht3mfQOJBkg",
      type: "video",
      order: "date",
      maxResults: 6
    }
  });
  return {
    data: response.data,
    status: response.status
  };
};
