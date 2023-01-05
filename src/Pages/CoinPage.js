import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinInfo from '../Components/CoinInfo';
import { SingleCoin } from '../Config/api';
import { CryptoState } from '../Context/CryptoContext';

const CoinPage = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }
  console.log(coin, "visible ");

  useEffect(() => {
    fetchCoin(coin);
  }, [])


  return (
    <div>
      <div>
        <img src={coin?.image.large}
        alt={coin?.name}
        height = "200"
        style={{
          marginBottom: 20
        }}/>
        
      </div>
      <CoinInfo />
    </div>

  )
}

export default CoinPage