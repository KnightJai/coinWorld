// import React, { useContext, useEffect, useState } from 'react'
// import './Home.css'
// import { CoinContext } from '../../context/CoinContext'
// const Home = () => {

//   const {allCoin, currency} = useContext(CoinContext);
//   const [distplayCoin, setDisplayCoin] = useState([]);
//   const [input, p]= useState('');

//   const inputHandler= (event) =>{
//     setInput(event.target.value);

//   }

//   const searchHandler= async (event)=>{
//     event.preventDefault();
//    const coins=  await allCoin.filter((item)=> {
//      return item.name.toLowerCase().includes(input.toLowerCase())
//     })
//    setDisplayCoin(coins)

//   }

//   useEffect(()=>{
//     setDisplayCoin(allCoin);

//   }, [allCoin])



//   return (
//     <div className='home'>
//       <div className="hero">
//         <h1>Largest <br/> Crypto Marketplace</h1>
//         <p>welcome to worlds largest cryptocurrency markertplace.
//           Sign up to explore more about cryptos </p>
         
//          <form onSubmit={searchHandler}>
        
//           <input onChange={inputHandler} value= {input} type="text" placeholder='Search crypto..' required />
//           <button type='submit'>Search</button>
//          </form>
//       </div>
    
//     <div className="crypto-table">
//       <div className="table-layout">
//         <p>#</p>
//         <p>Coins</p>
//         <p>Price </p>
//         <p style={{textAlign: "center"}}>24H change</p>
//         <p className='market-cap'>Market cap</p>
//       </div>
//       {
//         distplayCoin.slice(0,10).map((item,index)=>(
//           <div className="table-layout" key={index}>
//              <p> {item.market_cap_rank }</p>
//              <div>
//               <img src={item.image} alt="" />
//               <p>{item.name + " - " + item.symbol}</p>
//              </div>
//               {/* <p>{currency.symbol} {item.current_price.toLocalString()}</p> */}
//               <p>{currency.symbol} {item.current_price}</p>
//              <p className={item.price_change_percentage_24h>0 ? "green": "red"}>
//               {Math.floor(item.price_change_percentage_24h *100)/100}</p>
//              {/* <p className='market_cap'> {currency.symbol}{item.market_cap.toLocalString()}</p>  */}
//              <p className='market_cap'> {currency.symbol}{item.market_cap}</p>
//           </div>
//         ))
//       }
//     </div>
      
//     </div>
//   )
// }

// export default Home

import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allCoin = [], currency = { symbol: "$" } } = useContext(CoinContext); // Default fallback
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState(''); // Fixed naming

  const inputHandler = (event) => {
    setInput(event.target.value); // Update input value
    if(event.target.value==""){
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = (event) => {
    event.preventDefault();

    // Filter coins based on input
    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  };

  // Initialize displayCoin when allCoin changes
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler} list = 'coinlist'
            value={input}
            type="text"
            placeholder="Search crypto.."
            required
          />


           <datalist id="coinlist">
            {allCoin.map((item) => (
              <option key={item.id} value={item.name} />
            ))}
          </datalist>



          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to ={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt={`${item.name} logo`} /> {/* Added alt text */}
              <p>
                {item.name} - {item.symbol.toUpperCase()}
              </p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()} {/* Fixed toLocaleString */}
            </p>
            <p className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>
              {Math.floor(item.price_change_percentage_24h * 100) / 100}%
            </p>
            <p className="market-cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()} {/* Fixed toLocaleString */}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
