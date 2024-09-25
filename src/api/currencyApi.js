import axios from "axios";

export async function getCurr() {
  const apiKey = import.meta.env.VITE_CURR_API_KEY;
  try {
    const response = await axios.get(
      `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`
    );
    return response;
  } catch (err) {
    console.error("Error get data:", err);
  }
}
