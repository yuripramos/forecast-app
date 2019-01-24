import axios from "axios";
import moment from "moment";

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
    const responseAction = await axios.get(`
    https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${OPEN_CAGE_KEY}`).then(resp => {
      const updatedCity =
        resp.data.results.length > 1
          ? resp.data.results[0]
          : resp.data.results;
      return axios.get(
        `${REVERSE_PROXY}/${API_URL}/${SECRET_KEY}/${
          updatedCity.geometry.lat
        },${updatedCity.geometry.lng}`
      );
    }).then(res => {
      return res;
    }).catch((error) => {
    console.log(error); //eslint-disable-line
    });
  return responseAction;
}


//TO-DO
// export async function timeMachineForecast(lat, lng) {
//   let axiosArray = [];

//   for(i=0; i<30; i++) {
//     moment().subtract(i+1, 'days').format('X');

//   }

//   axios
//     .all(axiosArray)
//     .then(axios.spread((...responses)) => {
//       responses.forEach(res => console.log('Success'))
//     console.log('submitted all axios calls');
//     })
//     .catch(error => { })
// }
