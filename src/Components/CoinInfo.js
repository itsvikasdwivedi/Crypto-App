import { CircularProgress, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HistoricalChart } from '../Config/api';
import { CryptoState } from '../Context/CryptoContext';
import {Line} from 'react-chartjs-2';
const CoinInfo = (coin) => {
  const [historicData,sethistoricData] = useState();
  const [days,setdays] = useState(1);

  const {currency}=CryptoState();

  const fetchHistoricalData = async()=> {
    const {data} =await axios.get(HistoricalChart(coin.id,days,currency));
    sethistoricData(data.prices);
  }

  useEffect(() => {
    fetchHistoricalData();

  }, [currency,days]);
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline/>
    <div>
      {
        !historicData ? (
          <CircularProgress
          style={{
            color: 'gold'
          }}
          size={250}
          thickness= {1}/>
        ):(
          <>
          <Line
          data={{
            labels: historicData.map((coins))
          }}/>
          </>
        )}
    </div>
    </ThemeProvider>
  )
}

export default CoinInfo