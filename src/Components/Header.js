import React from 'react';
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
// import { createBrowserHistory } from '@remix-run/router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../Context/CryptoContext';
import { useNavigate } from 'react-router-dom';

const logoStyle = {
    flex: 1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer'
}

const Header = () => {
    const { currency, setCurrency } = CryptoState()
    console.log(currency);
    const navigate = useNavigate();

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={() => navigate("/")} style={logoStyle}>
                            Crypto Bhaskar
                        </Typography>
                        <Select
                            variant="outlined"
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15
                            }}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}>
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"USD"}>USD</MenuItem>

                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>

        </ThemeProvider>
    )
}

export default Header;