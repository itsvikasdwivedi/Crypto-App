import { Container } from '@mui/system'
import React from 'react'
import { Typography} from "@mui/material"

const BannerStyle = {
    backgroundImage : "url(https://cdn.pixabay.com/photo/2018/03/28/23/23/bitcoin-3270890_1280.jpg)",
    // backgroundColor : "black",
    height: "100vh",
    width: "100%",
}

const BannerContent = {
  height: "400",
  display: "flex",
  flexDirection: "column",
  paddingTop: "25",
  justifyContent: "space-around",
}
export const Banner = () => {
  return (
    <div style={BannerStyle}>
        <Container sx={BannerContent} >
          <div>
            <Typography variant='h2'
            style={{
              fontWeight: "bold",
              marginBottom: 15,
            
              fontColor: "white"
            }}>
              Crypto Bhaskar
            </Typography>
          </div>
        </Container>
    </div>
  )
}
