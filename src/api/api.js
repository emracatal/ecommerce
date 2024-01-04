import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export default axiosInstance;

// [
//   {
//       "id": 1,
//       "name": "Yönetici",
//       "code": "admin"
//   },
//   {
//       "id": 2,
//       "name": "Mağaza",
//       "code": "store"
//   },
//   {
//       "id": 3,
//       "name": "Müşteri",
//       "code": "customer"
//   }
// ]
