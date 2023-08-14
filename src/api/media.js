import sycamoreServiceClient from ".";

export const verifyReferral = async referralId => {
  const response = await sycamoreServiceClient({
    url: `/misc/referalstatus/${referralId}`,
    method: "get"
  });

  return {
    status: response.status,
    data: response.data
  };
};
