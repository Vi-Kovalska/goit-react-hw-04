import React from 'react'

const ErrorMessage = ({errorMess}) => {
  return (
    <p>Sorry, there is an error - {errorMess}! Please try again later.</p>
  )
}

export default ErrorMessage