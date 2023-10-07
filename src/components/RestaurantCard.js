import { CDN_URL } from "../utils/constants"
const ResturantCard = (props) =>{
    const {resData} = props
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.card?.card?.info
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img
             className="res-logo"
             alt="res-logo"
             src=
                {CDN_URL+resData.card.card.info.cloudinaryImageId} 
                
              />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}


export default ResturantCard