import React, { useState, createContext, useEffect } from "react";

export const GlobalContext = createContext();

function Context({ children }) {
  const [datas, setDatas] = useState([]);
  const [menu, setMenu] = useState([{}]);

  const fetchData = () => {
    fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
        setMenu(datas[0]["table_menu_list"]);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <GlobalContext.Provider value={{ datas, menu }}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
}

export default Context;
