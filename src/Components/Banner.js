import { Container } from '@mui/system'
import React from 'react'
import { Typography } from "@mui/material"
import Carousel from './Carousel'


const BannerStyle = {
  backgroundImage: "url(https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?w=900&t=st=1673445311~exp=1673445911~hmac=8ce8cbec0a4735ea5df32d9a7e9615f20c3a7be59324b86ee7c1c7697d29b505)",
  height: "85vh",
  // width: "200%",
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
