import Chart, { elements } from 'chart.js/auto';
import {
  CircularProgress,
  CssBaseline,
  useMediaQuery
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
import { chartDays } from '../Config/data';
import SelectButton from './SelectButton';
// import { Line } from 'chart.js';

const CoinInfo = ({coin}) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const matches = useMediaQuery('(min-width:600px)')

  const fetchHistoricData = async () => {

    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    console.log("Fetching", coin.id, days, currency);
    setHistoricData(data.prices);
  }

  // console.log("Fetching youuu", historicData)
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
    <ThemeProvider theme={darkTheme}>
     <CssBaseline />  
        <>
      <div 
      style={ {
        ...matches ?{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: "20px"
        }:{
          width: "100%",
        }
      }
    }
      >
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
                    // console.log(date,"date bata rhi haii");
                    let time =
                      date.getHours() > 12 ?
                        `${date.getHours() - 12}: ${date.getMinutes()} PM`
                        : `${date.getHours()}: ${date.getMinutes()} AM`;
                    // console.log(time, "baar nhi BTA RHAA");
                    return days === 1 ? time : date.toLocaleDateString();   
                  }),

                  datasets: [
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: `Price Iin Past ${days} Days In ${currency}`,
                      borderColor : "#EEBC1D"
                    },
                  ]
                }}
                options= {{
                     elements: {
                        point:{
                          radius: 1,
                        },
                      }
                }}
              />

              <div
              style={{
                display: 'flex',
                marginTop: 20,
                justifyContent: 'space-around',
                width: '100%'
              }}
              >
                {chartDays.map((day) =>{
                  return(
                  <SelectButton
                  key={day.value}
                  onClick={()=>{setDays(day.value)}}
                  selected={day.value === days}
                  >
                    {day.label}
                  </SelectButton>
                  )
                })}
              </div>
            </>
          )}
      </div>
      </>
    </ThemeProvider>
  )
}

export default CoinInfo;