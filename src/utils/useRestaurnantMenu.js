//  helper function and hook are in util folder
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurnantMenu = (resId) => {
  // fetch data
  // data is fetched how it is fetched in useeffect
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => fetchData(), []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json.data);
  };
  return resInfo;
};

export default useRestaurnantMenu;
