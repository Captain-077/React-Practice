import seriesData from '../api/SeriesData.json'
import Cards from './Cards'

function Netflix() {

  // const data = {
  //   name: "nakul",
  //   sportsTeam: "India",
  //   address: "Faridabad",
  // }

  return (

    <ul className='container grid grid-three--cols'>

      {seriesData.map((item) => {

        return <Cards key={item.id} item={item} />

      })}


    </ul>


  )
}

export default Netflix