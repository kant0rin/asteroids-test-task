import {getAllAsteroids} from "@/actions/get-all-asteroids";
import AsteroidsPage from "@/components/sections/home/AsteroidsPage/AsteroidsPage";

const getAsteroids = async () => {
  const todayDate = new Date().toJSON().slice(0, 10)
  return await getAllAsteroids(todayDate)
}

export default async function Home() {

  const asteroids = await getAsteroids()

  return (
    <main>
      <AsteroidsPage asteroids={asteroids}/>
    </main>
  )
}
