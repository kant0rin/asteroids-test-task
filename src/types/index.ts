export interface IOneAsteroidResponse {
  links: any
  id: string,
  neo_reference_id: string,
  name: string,
  designation: string,
  nasa_jpl_url: string,
  absolute_magnitude_h: number,
  estimated_diameter: EstimatedDiameter,
  is_potentially_hazardous_asteroid: boolean,
  close_approach_data: CloseApproachData[]
}

export interface CloseApproachData {
  close_approach_date: string,
  close_approach_date_full: string,
  epoch_date_close_approach: number,
  relative_velocity: {
    kilometers_per_second: string,
    kilometers_per_hour: string,
    miles_per_hour: string
  },
  miss_distance: MissDistance
  orbiting_body: string
}

export interface AsteroidForList {
  date: string
  diameter: number
  name: string
  kilometreDistance: number
  lunarDistance: number
  isDangerous: boolean
  id: number
}

interface MissDistance {
  astronomical: string,
  lunar: string,
  kilometers: string,
  miles: string
}

interface ICloseAproachData {
  close_approach_date: string,
  close_approach_date_full: string,
  epoch_date_close_approach: number,
  relative_velocity: any,
  miss_distance: MissDistance
  orbiting_body: string
}

interface EstimatedDiameter {
  kilometers: any,
  meters: {
    estimated_diameter_min: number;
    estimated_diameter_max: number
  },
  miles: any,
  feet: any
}

interface IAsteroid {
  links: {
    self: string
  };
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: ICloseAproachData[]
  is_sentry_object: boolean
}

type IAsteroidDate = IAsteroid[]

export interface IAllAsteroidsResponse {
  links: any
  element_count: number,
  near_earth_objects: IAsteroidDate[]
}

export interface AsteroidForOrder {
  date: string
  diameter: number
  name: string
  kilometreDistance: number
  lunarDistance: number
  isDangerous: boolean
  id: number
}
