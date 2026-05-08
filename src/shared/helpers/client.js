import api from "../services/api";

const client = {
  get: async (url, config = {}) => {
    try {
      const response = await api.get(url, config);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.Error || error.message || "Bilinməyən xəta";
      throw new Error(errorMessage, { cause: error });
    }
  },
};

export default client;
