import axios from "axios";

const fetchApi = () => {
  axios({
    method: "GET",
    url: "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=76230a61463f4bc2975aa531780986ed",
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
// console.log(fetchApi());
