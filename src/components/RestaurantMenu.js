import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurnantMenu from "../utils/useRestaurnantMenu";
const RestaurnantMenu = () => {
  // const [resInfo, setresInfo] = useState(null);
  //   const params = useParams();
  //   console.log(params)
  const { resId } = useParams();

  /* custom hook implementation  */
  const resInfo = useRestaurnantMenu(resId);

  // using destructing on the fly

  // // make a api call to get the data
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // // since above the dependency array is empty this will make single api call
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setresInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // menu of the restaurnant extraction
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return (
    <div className="menu">
      {/* destructuring is not working hence writing it like this  */}
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
        {/* <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};

export default RestaurnantMenu;
