import { LinearProgress, Typography, useMediaQuery} from '@mui/material';
import { fontSize } from '@mui/system';
import axios from 'axios';
import parse from 'html-react-parser';
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
  const matches = useMediaQuery('(min-width:600px)')
 
    const maxScreen = {
      display: 'flex'
    }
 
    const minScreen = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    
    const maxSidebar={
      borderRight: "2px solid darkgrey",
          width : "30%",
          display : "flex",
          flexDirection: "column",
          alignItems : "center",
          marginTop: "25px",
    }
    const minSideBar= {
      borderRight: "2px solid darkgrey",
          display : "flex",
          flexDirection: "column",
          alignItems : "center",
          marginTop: 25 ,
      width: "100%"
    }
    const marketDatamax={
      alignSelf: "start",
      padding : 25,
      paddingTop: 20,
      width: "100%"
    }
    const marketDatamin={
      alignItems : "start",
      fontSize: 1
    }

  useEffect(() => {
    fetchCoin(coin);
  }, [])

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  if (!coin)
    return (
      <LinearProgress style={{ backgroundColor: "goldenrod" }} />
    )

  return (
    <div
      style={{
         ...matches ? maxScreen : minScreen
      }}>

      <div
        style={{
          ...matches ? maxSidebar: minSideBar
        }}
      >
        <img src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{
            marginBottom: 20,
          }} />

        <Typography variant='h3' style={{
          fontWeight: "bold",
          fontFamily: "Montserrat",
          textAlign: "center"
        }}>
          {coin?.name}
        </Typography>

        <Typography variant='subtitle1'
          style={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 20,
            paddingTop: 0,
            textAlign: "justify",
            // justifyContent: "space-around"
          }}>
          {parse(coin?.description.en.split(". ")[0])}
        </Typography>
        {/* <CoinInfo /> */}

        <div style={
          {
           ...matches ? marketDatamax : marketDatamin
          }
        }>
          <span
            style={{
              display: "flex"
            }}>
            <Typography variant='h5'
             style={{
              fontFamily: "Montserrat"
            }}
            >
              Rank:
            </Typography>

            &nbsp; &nbsp;
            <Typography variant='h5'
              style={{
                fontFamily: "Montserrat"
              }}
              >
              {coin?.market_cap_rank}
            </Typography>
          </span>

          <span
            style={{
              display: "flex"
            }}>
            <Typography variant='h5'
             style={{
              fontFamily: "Montserrat"
            }}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h5'
              style={{
                fontFamily: "Montserrat"
              }}>
              {symbol} {" "}
              {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          <span
            style={{
              display: "flex"
            }}>
            <Typography variant='h5'
             style={{
              fontFamily: "Montserrat"
            }}>
              Market Cap:{" "}
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h5'
              style={{
                fontFamily: "Montserrat"
              }}>
              {symbol} {" "}
              {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6))}M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage