import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { TrendingCoins } from '../../Config/api'
import { CryptoState } from '../../Context/CryptoContext'
import AliceCarousel from 'react-alice-carousel'
const Carousel = () => {
    const [trending,setTrending] = useState([]);
    const {currency} = CryptoState();    

    const fetchTrendingCoins = async()=>{
        const {data} =  await axios.get(TrendingCoins(currency));
        setTrending(data);
    }
    useEffect(() => {
    fetchTrendingCoins();
    }, [currency]);

    console.log(trending);

  return (
    <div style={{color: "white",
    display: "flex",
    alignItmes: "center",
    }}>
    <AliceCarousel/>
    </div>
  )
}

export default Carousel