import React from 'react';
import { AppBar, Container,MenuItem, Select, Toolbar, Typography } from "@mui/material"
import { createBrowserHistory } from '@remix-run/router';
import { CryptoState } from '../Context/CryptoContext';

const logoStyle = {
    flex:1,
    color: 'gold',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    cursor: 'pointer'
}

const Header = () => {
    const history =createBrowserHistory();
    const {currency,setCurrency} = CryptoState()
    console.log(currency);
    return (
        <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography onClick={()=>history.push("/")} style={logoStyle}>
                        Crypto Bhaskar
                    </Typography>
                    <Select
                    variant="outlined"
                    style={{
                        width: 100,
                        height: 40,
                        marginRight: 15
                    }}
                    value= {currency}
                    onChange={(e)=> setCurrency(e.target.value)}>
                        <MenuItem value={"INR"}>INR</MenuItem>
                        <MenuItem value={"USD"}>USD</MenuItem>

                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;