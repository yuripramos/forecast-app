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

export async function getForwardGeoCode(city) {
  try {
    const response = await axios.get(`
    https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPEN_CAGE_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}
