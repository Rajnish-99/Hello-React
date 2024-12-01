import { CDN_URL } from "../utils/constants";

// fucntional component of the restaurnant card
const RestaurnantCards = (props) => {
    // resdata is passed form the the body component
    const { resData } = props;
    // console.log(props);
    // code looks ugly we will clear the mess
    // destructure this
  
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo,sla } =
      resData?.info;
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" >
        <img
          className="rounded-lg"
          // src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/fa/13/d3/paneer-biryani.jpg?w=1200&h=-1&s=1"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        {/* <h4>{cuisines.join(",")}</h4> */}
        <h4>{cuisines.slice(0, 3).join(",")}{cuisines.length > 3 ? "" : ""}</h4>

        <h4>{sla?.slaString}</h4>
      </div>
    );
  };


  // higher order component 

  // input -restuarnant ==> restaurnant open or not 

  // higher order component
export const withOpenLabel = (RestaurnantCards)=>{
    // return a new component  
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-green-400 text-white m-1 p-1 rounded-lg">Pure Veg</label>
          <RestaurnantCards {...props}/>
        </div>
      );
    };
  };

  export default RestaurnantCards;