import React from 'react'

import { Box, Typography, Button } from '@mui/material';
import errorImage from "../../assits/no-result.b574bcc9.svg";

const ErrorPage = () => {
  return (
  
        <Box
          className="d-flex flex-column align-items-center justify-content-center text-center vh-100 bg-light"
        >
          <Typography
            variant="h1"
            className="fw-bold text-secondary mb-2"
          >
            404
          </Typography>
    
          <Typography
            variant="h4"
            className="mb-4 text-muted"
          >
            Oops! Looks like this isn't a page.
          </Typography>
    
          <Box
            className="d-flex justify-content-center mb-4"
          >
            <img
              src={errorImage}
              alt="Error"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
    
          <Button
            variant="contained"
            href="/"
            sx={{
              backgroundColor: "#00A676",
              color: '#FFFF',
              px: 4,
              py: 1.5
            }}
          >
            Back to Home
          </Button>
        </Box>
  )
}

export default ErrorPage