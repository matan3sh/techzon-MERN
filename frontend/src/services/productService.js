import axios from 'axios';

const PATH = '/api/products';

const query = async () => {
  try {
    const res = await axios.get(PATH);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getById = async (id) => {
  try {
    const res = await axios.get(`${PATH}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  query,
  getById,
};
