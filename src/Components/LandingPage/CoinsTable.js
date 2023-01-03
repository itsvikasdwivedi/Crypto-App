import { Container, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CoinList } from '../../Config/api';
import { CryptoState } from '../../Context/CryptoContext';

const CoinsTable = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState();
    const navigate = useNavigate()
    const { currency } = CryptoState()

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);
    }

    console.log(coins);
    // useEffect(() => {
    //     fetchCoins()
    // }, [currency]);

    const handleSearch = () => {
        return coins.filter((coin) => (
            coin.name.setLowerCase().includes(search) || coin.symbol.setLowerCase().includes(search)
        ))
    }

    return (
        // <ThemeProvider >
        <Container style={{ textAlign: "center" }}>
            <Typography
                variant='h4'
                style={{ margin: 18, fontFamily: "Montserrat" }}>
                Cryptocurrency Prices by Market Cap
            </Typography>

            <TextField label="Search Your Crypto Currency" variant='outlined'
                style={{ marginBottom: 20, width: "100%" }}
                onChange={(e) => setSearch(e.target.value)} />
            <TableContainer>
                {
                    loading ? (<LinearProgress style={{ backgroundColor: "gold" }} />
                    ) : (
                        <Table>
                            <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                                <TableRow>
                                    {["Coin", "Price", "24h Changes", "Market Cap"].map((head) => (

                                        <TableCell
                                            style={{
                                                color: "black",
                                                fontWeight: "700",
                                                fontFamily: "Montserrat"
                                            }}
                                            key={head}
                                            align={head === "Coin" ? "" : "right"}>
                                            {head}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>{handleSearch().map((row) => {
                                const profit = row.price_change_percentage_24h > 0;
                                return (
                                    <TableRow
                                        onClick={() => navigate(`/coins/${row.id}`)}
                                        key={row.name}
                                        style={{}}>
                                        <TableCell component="th" scope="row"
                                            style={{
                                                display: "flex",
                                                gap: 15
                                            }}>
                                            <img
                                                src={row?.image}
                                                alt={row.name}
                                                height="50"
                                                style={{ marginBottom: 10 }} />
                                            <div
                                                style={{ display: "flex", flexDirection: "column" }}>
                                                <span
                                                    style={{ textTransform: "uppercase", fontSize: 22 }}>
                                                    {row.symbol}
                                                </span>
                                                <span></span>
                                            </div>
                                        </TableCell>

                                    </TableRow>
                                )
                            })}
                                return (
                                <TableRow >

                                </TableRow>

                                )
                            </TableBody>
                        </Table>
                    )
                }
            </TableContainer>
        </Container>
        // </ThemeProvider>
    )
}

export default CoinsTable;