import { Container } from '@mui/system'
import React from 'react'
import { Typography } from "@mui/material"
import Carousel from './Carousel'


const BannerStyle = {
  backgroundImage: "url(https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148420940.jpg?t=st=1672541037~exp=1672541637~hmac=1f889bf148aee562b6f277070c90d8af15d268fdc38bb4db1830a951412b9f28)",

  height: "100vh",
  width: "100%",
}

const BannerContent = {
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
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
              fontFamily: "Montserrat",
              color: "white"
            }}>
            Crypto Bhaskar
          </Typography>
          <Typography variant='subtitle2'
            style={{
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              display: "flex",
              height: "40%",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center"
            }}>
            Get All The Information regarding your favorite Crypto
          </Typography>
        </div>
        <Carousel/>
      </Container>
    </div>
  )
}
