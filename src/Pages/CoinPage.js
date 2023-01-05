import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
// import CoinInfo from '../Components/CoinInfo';
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems : 'center'
    }} >
      <div 
      // style={{
      //   width : "30%",
      //   display : "flex",
      //   alignItems : "center",
      //   marginTop: "25px",
      //   borderRight : "2px solid darkgrey"
      // }}
      >
        <img src={coin?.image.large}
        alt={coin?.name}
        height = "200"
        style={{
          marginBottom: 20
        }}/>

        <Typography variant='h3' style={{
          fontWeight: "bold",
          marginBottom: 20,
          fontFamily: "Monserrat"
        }}>
        {coin?.name}
        </Typography>
        <Typography variant='subtitle1'
        style={{
          width: "100%",
          fontFamily: "Monserrat",
          padding: 25,
          paddingBottom: 20,
          paddingTop: 0,
          textAlign: "center",
        }}>
          {coin?.description.en.split(". ")[0]}
        </Typography>
      {/* <CoinInfo /> */}
      <div>
        <span
        style={{
          display: "flex"
        }}>
          <Typography variant='h5'>
            Rank:
          </Typography>
          &nbsp; &nbsp;
          <Typography variant='h5'
          style={{
            fontFamily: "Monserrat"
          }}>
          </Typography>

        </span>
      <div/>

      </div>
      
    </div>

  )
}

export default CoinPage