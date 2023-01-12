import React, { createContext, useContext, useEffect, useState } from 'react'

const CryptoContext = createContext();
const ContextProvider = ({children}) => {
  const [currency,setCurrency]= useState("INR");
  const [symbol,setSymbol]= useState("₹");

  useEffect(() => {
    if (currency === 'INR') setSymbol("₹")
    else if (currency === 'USD') setSymbol("$");
  }, [currency])
  
  return (
    <CryptoContext.Provider value={{currency,symbol,setCurrency}}>
      {children}
    </CryptoContext.Provider>

  )
}

export default ContextProvider;

export const CryptoState = ()=>{
  return useContext(CryptoContext);
}