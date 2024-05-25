"use client";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();

function ApiContext({ children }) {
  const [selected, setSelected] = useState(() => {
    if (typeof window !== "undefined") {
      const storedMovie = localStorage.getItem("movie");
      return storedMovie ? JSON.parse(storedMovie) : [];
    } else {
      return [];
    }
  });
  // console.log(selected);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("movie", JSON.stringify(selected));
    }
  }, [selected]);
  return (
    <productContext.Provider value={[selected, setSelected]}>
      {children}
    </productContext.Provider>
  );
}

export default ApiContext;
