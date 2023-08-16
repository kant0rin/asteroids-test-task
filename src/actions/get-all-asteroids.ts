import {AsteroidForList, IAllAsteroidsResponse} from "@/types/index";
import axios, {AxiosResponse} from "axios";

export const getAllAsteroids = async (date: string) => {

  const asteroidsList: AsteroidForList[] = []

  try {
    const request = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=9VSeqG3oMG5gzezlrdhqSjmgnhfF85hBSYf0nP0a`,
      {
        'cache': 'no-cache'
      }
    )
    const response:IAllAsteroidsResponse = await request.json()
    const data = response.near_earth_objects

    Object.values(data).forEach(asteroidDate => {
      asteroidDate.forEach(asteroid => {

        const date = new Date(asteroid.close_approach_data[0].epoch_date_close_approach).toLocaleString('ru', {day: 'numeric' , month:'short' , year: 'numeric'})
        const item = {
          id: parseInt(asteroid.id),
          date: date,
          diameter: Math.ceil(asteroid.estimated_diameter.meters.estimated_diameter_min),
          isDangerous: asteroid.is_potentially_hazardous_asteroid,
          kilometreDistance: Math.ceil(parseInt(asteroid.close_approach_data[0].miss_distance.kilometers)),
          lunarDistance: Math.ceil(parseInt(asteroid.close_approach_data[0].miss_distance.lunar)),
          name: asteroid.name
        }
        asteroidsList.push(item)
      })
    })

    return asteroidsList
  } catch (e) {
    console.log('Error geting asteroids', e)
    return null
  }

}
