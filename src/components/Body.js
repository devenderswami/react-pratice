import ResturantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  // State variable = super power variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant]= useState([])

  const [searchText,setSearchText] = useState("")

  useEffect(() => {
    console.log("useeffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    let resList = [];
    for (let i = 4; i < json.data.cards.length; i++) {
      resList.push(json?.data?.cards[i]);
    }

    setListOfRestaurants(resList);
    setfilteredRestaurant(resList);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus==false){
     return (
      <h1>Looks like you are offline !! Please check your internet connection; </h1>
     )
  }


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText}  onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={()=>{
             const filteredResturant = listOfRestaurants.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
             setfilteredRestaurant(filteredResturant)
          }}>search</button>
        </div>
        <div className="search m-4 p-4">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredData = listOfResturants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurants(filteredData);
          }}
        >
          Top Rated Resturants
        </button>
        </div>
       
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((resturant) => (
         <Link  key={resturant.card.card.info.id} to={"/restaurants/"+resturant.card.card.info.id}>
         <ResturantCard
             resData={resturant}
          />
         </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
