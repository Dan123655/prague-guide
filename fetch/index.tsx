import axios from "axios";
import { mykey } from "../key";
const getPlacesData = async (
  bl_lat: string|null|undefined|number,
  tr_lat: string|null|undefined|number,
  bl_lng: string|null|undefined|number,
    tr_lng: string|null|undefined|number,
  type:string
) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type!==''?type:'attractions'}/list-in-boundary`,
      {
        params: {
          // bl_latitude: '11.847676',
          // tr_latitude: '12.838442',
          // bl_longitude: '109.095887',
          // tr_longitude: '109.149359',
          bl_latitude: bl_lat ? bl_lat : "50.073658",
          bl_longitude: bl_lng ? bl_lng : "14.418540",
          tr_latitude: tr_lat ? tr_lat : "50.425168",
          tr_longitude: tr_lng ? tr_lng : "14.256744",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "20",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },

        headers: {
          "X-RapidAPI-Key": mykey.rapidKey,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (err) {
    return null;
  }
};

export default getPlacesData;
