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
      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          className="meghna-img"
          // src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/fa/13/d3/paneer-biryani.jpg?w=1200&h=-1&s=1"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    );
  };

  export default RestaurnantCards;