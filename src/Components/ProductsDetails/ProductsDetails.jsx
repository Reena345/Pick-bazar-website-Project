import { Box, Grid, Modal, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';















const ProductsDetails = () => {
    const param = useParams();
    useEffect(() => {
    const fetchData = async () => {
        try {
          
          const products = await axios.get(
            `copyProduct/${param?.product_id}`
          );
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  return (
    <div>




































    
  </div>
  )
}

export default ProductsDetails

