import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoinPage from '../Pages/CoinPage'
import HomePage from '../Pages/HomePage'

function AllRoutes() {
    return (<Routes>
        <Route
          path="/"
          element={
              <HomePage />
          }
        ></Route>
       
        <Route
          path="/coin"
          element={
              <CoinPage />
          }
        ></Route>
      </Routes>
    );
  }

export default AllRoutes;