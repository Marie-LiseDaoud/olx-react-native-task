import instance from "./ApiAxios";

export const getproductById = async (externalID) => {
  const response = await instance.get(`listing/?external_id=${externalID}`);
  return response.data;
};
