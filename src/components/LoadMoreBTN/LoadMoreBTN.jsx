import React from 'react'
import s from './LoadMoreBTN.module.css'
const LoadMoreBTN = ({changePage}) => {
  return (
    <button className={s.btnLoadMore} onClick={changePage}>Load more</button>
  )
}

export default LoadMoreBTN