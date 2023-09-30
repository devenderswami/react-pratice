import ResturantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import {useState} from "react";

const Body = () =>{
    // State variable = super power variable
    const [listOfResturants,setListOfRestaurants] = useState(resList)

    return (
       <div className="body">
         {/* <div className="search">Search</div> */}
          <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredData = listOfResturants.filter(
                    (res)=> res.data.avgRating>4
                )
            setListOfRestaurants(filteredData)
            }}
            >
                Top Rated Resturants
            </button>
          </div>
         <div className="res-container">
            {
              listOfResturants.map(resturant=> <ResturantCard key={resturant.data.id} resData={resturant}/> )
            } 
        
        </div>
       </div>



    )
}

export default Body