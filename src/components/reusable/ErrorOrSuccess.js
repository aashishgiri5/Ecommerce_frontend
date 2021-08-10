import React from 'react'
import { Alert } from 'react-bootstrap'

function ErrorOrSuccess({color,message}) {
    return (
     <Alert variant={color}>
    {message}
  </Alert>
    )
}

export default ErrorOrSuccess
