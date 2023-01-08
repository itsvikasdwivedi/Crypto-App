import {
  CircularProgress,
  CssBaseline
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import React, {
  useEffect,
  useState
} from 'react'
import { HistoricalChart } from '../Config/api';
import { CryptoState } from '../Context/CryptoContext';
import { Line } from 'react-chartjs-2'
// import { Line } from 'chart.js';

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setdays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoricData = async () => {

    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    console.log("Fetching", coin.id, days, currency);
    setHistoricData(data.prices);
  }

  console.log("Fetching youuu", historicData)
  // console.log("ye jinda hainn",historicData);

  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    // <ThemeProvider theme={darkTheme}>
    //  <CssBaseline />
<>
      <div>
        {
          !historicData ? (
              <CircularProgress
              style={{
                color: 'gold'
              }}
              size={250}
              thickness= {1}/>
            ):
          (
            <>
              <Line

                data =
                {{
                  labels: historicData.map((coin) => {
                    let date = new Date(coin[0]);
                    console.log(date,"date bata rhi haii");
                    let time =
                      date.getHours() > 12 ?
                        `${date.getHours() - 12}: ${date.getMinutes()} PM`
                        : `${date.getHours()}: ${date.getMinutes()} AM`;
                    console.log(time, "baar nhi BTA RHAA");
                    return days === 1 ? time : date.toLocalDateString();   
                  }),

                  datasets: [
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: `Price (Past ${days}Days) in ${currency}`
                    },
                  ]
                }}
                
              />
            </>
          )}
      </div>
      </>
    // </ThemeProvider>
  )
}

export default CoinInfo;