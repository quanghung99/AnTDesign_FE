import axiosClient from '../utils/http_services';


export const login = async (request) => {
  const result = await axiosClient.post('/login/', request);
  return result.data;
};
