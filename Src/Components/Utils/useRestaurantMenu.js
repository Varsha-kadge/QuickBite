import { useEffect, useState } from 'react';
import { MENU_URL } from './Constants';

const useRestuarantMenu = (resId) => {
  console.log(resId);
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchRes();
  }, []);
  const fetchRes = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setresInfo(json.data);
  };
  return resInfo;
};

export default useRestuarantMenu;
