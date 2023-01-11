import { LinearProgress, Typography } from '@mui/material';
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
  // console.log(coin, "visible ");

  useEffect(() => {
    fetchCoin(coin);
  }, [])

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 600,
  //       md: 900,
  //       lg: 1200,
  //       xl: 1536,
  //     },
  //   },
  // });


  if (!coin)
    return (
      <LinearProgress style={{ backgroundColor: "goldenrod" }} />
    )


  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center'
      }}>
      <div
        style={{
          borderRight: "2px solid darkgrey",
          width : "30%",
          display : "flex",
          flexDirection: "column",
          alignItems : "center",
          marginTop: "25px",
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
          {coin?.description.en.split(". ")[0]}
        </Typography>
        {/* <CoinInfo /> */}

        <div style={
          {
            alignSelf: "start",
            padding : 25,
            paddingTop: 20,
            width: "100%",
            // [theme.breakpoints.down("md")]:{
            //   display: "flex",
            //   justifyContent : "space-around"
            // },
            // [theme.breakpoints.down("md")]:{
            //   flexDirection: "column",
            //   alignIntems: "center"
            // },
            // [theme.breakpoints.down("xs")]:{
            //   alignItems : "start"
            // }
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