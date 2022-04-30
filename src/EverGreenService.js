import axios from "axios";

const url = "https://fathomless-oasis-66080.herokuapp.com/plots";

/* eslint-disable no-async-promise-executor */

class EverGreenService {

  static plot() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data
        );
        console.log(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static createPlot(values) {
    const test = axios.post( 
      url, 
      {
        area : values.area, 
        longitude: values.longitude, 
        latitude: values.latitude,
      }
    );
    test.then( function confirmation(){
      console.log('successful');
    }).catch( function (err) {
      console.log(err);
    });
  }

  static deletePlot(id) {
    return axios.delete(`${url}/${id}`);
  }
}

export default EverGreenService;
