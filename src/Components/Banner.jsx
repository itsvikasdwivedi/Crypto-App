import { Container } from '@mui/system'
import React from 'react'
import { Typography } from "@mui/material"
import Carousel from './Carousel'


const BannerStyle = {
  backgroundImage: "url(https://mcdn.wallpapersafari.com/medium/91/61/Rb7TmX.jpg)",
  height: "50%",
}

const BannerContent = {
  height: 400,
  display: "flex",
  flexDirection: "column",
  // paddingTop: 25,
  justifyContent: "space-around",
}

export const Banner = () => {
  return (
    <div style={BannerStyle}>
      <Container sx={BannerContent} >
        <div>
          <Typography variant='h3'
            style={{
              fontWeight: "bold",
              // marginBottom: 15,
              fontFamily: "Montserrat",
              color: "white",
              textAlign: "center"
            }}>
            Crypto Bhaskar
          </Typography>
          <Typography variant='subtitle2'
            style={{
              color: "gold",
              fontSize: "18px",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              textAlign: "center"
            }}>
            Get All The Information regarding your favourite Crypto
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}
