import axios from "axios"

const rpc = axios.create({
  baseURL: 'http://192.168.0.30:7000/api/menu/items', //terminal: ipconfig
  proxy: false  
});

export const getAllMenuItems = async () => {
  try {
    const response = await rpc.get('/');

    console.log('==> response:', response)
  
    return response.data;
  } catch (err) {
    console.log('==> err:', err);

    throw err;
  }
};