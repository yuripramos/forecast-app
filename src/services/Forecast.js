import axios from "axios";

export async function getForecast(latitude, longitute) {
  try {
    const response = await axios.get(
      `${REVERSE_PROXY}/${API_URL}/${SECRET_KEY}/${latitude},${longitute}`
    );
    return response.data;
  } catch (error) {
    console.error(error); //eslint-disable-line
  }
}
