import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // acá seteas tu state loading a true si necesitas
        const response = await axios(
          `https://newsapi.org/v2/everything?q=warzone&language=es&pageSize=10&page=1&sortBy=publishedAt&apiKey=e18accae9c5e474e88857f65ef518f9`
        );
        setArticles(response.data.articles);
      } catch (error) {
        // acá seteas tu variable error si necesitas
      } finally {
        // acá seteas tu state loading a false si necesitas
      }
    })();
  }, []);

  return (
    //En el props value solo proveo el state data, pero también podes proveer funciones que crees en este context y usarlas en cualquier componente.
    <DataContext.Provider value={{ articles }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
