import { Container, createTheme, TextField, ThemeProvider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CoinList } from '../../Config/api';
import { CryptoState } from '../../Context/CryptoContext';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);

    const { currency } = CryptoState()
    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);
    }

    console.log(coins);
    useEffect(() => {
        fetchCoins()
    }, [currency]);

    const darkTheme = createTheme({

    })
    
    return (
        <ThemeProvider theme={theme}>
            <Container style={{textAlign: "center"}}>
                <Typography
                variant='h4'
                style={{margin: 18, fontFamily: "Montserrat"}}>
                    Cryptocurrency Prices by Market Cap
                </Typography>

                <TextField label="Search Your Crypto Currency" variant='outlined'/>
            </Container>
        </ThemeProvider>
    )
}

export default CoinsTable;