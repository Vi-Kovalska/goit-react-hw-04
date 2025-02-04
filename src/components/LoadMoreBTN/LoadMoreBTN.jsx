import React from 'react'
import toast from 'react-hot-toast';
const LoadMoreBTN = ({changePage}) => {
  return (
    <button onClick={() => changePage()}>Load more</button>
  )
}

export default LoadMoreBTN