import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [sevenDayData, setSevenDayData] = useState(null); // New state for 7-day data
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error('Error fetching coin data:', err);
    }
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-6ERUJBWs2w3ebTCxfRpjFmRg' }
    };

    try {
      const response10 = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        options
      );
      const data10 = await response10.json();
      setHistoricalData(data10);

      const response7 = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=7&interval=daily`,
        options
      );
      const data7 = await response7.json();
      setSevenDayData(data7);
    } catch (err) {
      console.error('Error fetching historical data:', err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]); // Refetch when currency changes

  if (coinData && historicalData && sevenDayData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt={`${coinData.name} logo`} />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <h3>10-Day Price Trend</h3>
          <LineChart historicalData={historicalData} />
        </div>
        <div className="coin-chart">
          <h3>7-Day Price Trend</h3>
          <LineChart historicalData={sevenDayData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>{currency.symbol}{coinData.market_data.current_price[currency.name]}</li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>{currency.symbol}{coinData.market_data.market_cap[currency.name]}</li>
          </ul>
          <ul>
            <li>24Hour High</li>
            <li>{currency.symbol}{coinData.market_data.high_24h[currency.name]}</li>
          </ul>
          <ul>
            <li>24Hour Low</li>
            <li>{currency.symbol}{coinData.market_data.low_24h[currency.name]}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
