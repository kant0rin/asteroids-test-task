import {IOneAsteroidResponse} from "@/types";
import axios from "axios";


export const getOneAsteroid = async (id: number) => {


  try {
    const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=9VSeqG3oMG5gzezlrdhqSjmgnhfF85hBSYf0nP0a`)
    const asteroidInfo: IOneAsteroidResponse = await response.data

    return asteroidInfo

  } catch (e) {
    console.log('Error geting asteroid', e)
    return null
  }

}
