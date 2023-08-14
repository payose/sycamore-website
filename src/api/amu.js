import axios from "axios";

export const registerAMU = async param => {
  const response = await axios.post(
    "https://sycamore-api.herokuapp.com/api/v1//misc/assest-management/prospectives",
    {
      param
    }
  );

  return {
    status: response.status,
    data: response.data
  };
};
