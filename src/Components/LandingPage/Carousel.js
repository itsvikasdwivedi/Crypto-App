import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TrendingCoins } from '../../Config/api'
import { CryptoState } from '../../Context/CryptoContext'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency,symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  }
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  // console.log(trending);
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    }
  }
  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coins/${coin.id}`}
        style={{
          // height: "50%",
          // display: 'flex',
          // alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          textTransform: 'uppercase',
          color: 'white',
        }}
      >
        <img
          src={coin?.image}
          alt={coin.name}
          height="80px"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
          style={{color: profit > 0 ? "rgb(14,203,129)": "red",
        fontWeight: 500
      }}
          >
            {profit && "+"}{coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </span>

        <span style={{ fontSize: 22, fontWeight: 500 }}>
         {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>

      </Link>
    )
  })
  return (
    <div style={{
      color: "white",
      display: "flex",
      alignItmes: "center",
    }}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items} />
    </div>
  )
}

export default Carousel;