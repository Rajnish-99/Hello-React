import RestaurnantCards from "./RestaurantCards";
import resList from "../utils/mockData"

//data from the api
// data come from the backend in form of json




// function component of the body
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* <RestaurnantCards resname="SJ Foods" cuisine="Pizza Noodles" />
          <RestaurnantCards resname=" KFC" cuisine="chicken" />
          <RestaurnantCards resname="Egg Mistry" cuisine="Kebabs and chichen" /> */}
          {/* // passing the live data in from of object // resdata is the prop name */}
          {/* <RestaurnantCards resData={resList[0]} />
          <RestaurnantCards resData={resList[1]} />
          <RestaurnantCards resData={resList[3]} />
          <RestaurnantCards resData={resList[2]} />
          <RestaurnantCards resData={resList[3]} /> */}
          {/* array map method is used to do the made the code run */}
          {/* whenever there is .map we have to give the key over there */}
          {resList.map((info, index) => (
            <RestaurnantCards key={index} resData={info} />
          ))}
          {/* <RestaurnantCards />
          <RestaurnantCards /> */}
        </div>
      </div>
    );
  };

  export default Body;