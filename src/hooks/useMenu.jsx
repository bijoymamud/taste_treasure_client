import { useEffect, useState } from "react";

const useMenu = () => {

  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch("../../public/menu.json")
      .then(res => res.json())
      .then(data => {

        setTimeout(() => {
          setMenu(data);
          setLoading(false)
        }, 1000)

      })

  }, [])

  return [menu, loading]

};

export default useMenu;