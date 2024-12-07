import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext()

const CoinContextProvider = (props)=>{
   
const [allCoin, setAllCoin] = useState([]);

// whenever below data gets changed it will be updated in fetch url of api call
const [currency, setCurrency] = useState({ 
    name: "usd",
    symbol: "$"
})

const fetchAllCoin= async () =>{
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-6ERUJBWs2w3ebTCxfRpjFmRg'}
      };
      
      fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
        .then(res => res.json())
        .then(res => setAllCoin(res))
        .catch(err => console.error(err));
}


// below func will call fetchAllCoin func and fetch api data and data will be stored in allCoin state variable, we  have to provide currency into currency 
useEffect(()=>{
    fetchAllCoin();

    // below calling currency because new input (currency ) aaya h for that we have to make new request from api
}, [currency])

   const contextValue= {
    allCoin, currency, setCurrency

   }


    return (
        <CoinContext.Provider value ={contextValue}>
           {props.children}
        </CoinContext.Provider>
    )
}


export default CoinContextProvider;