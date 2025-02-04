import React from 'react'
import toast from 'react-hot-toast';

const SearchBar = ({getQuery}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === '') {
      return toast.error('The search field cannot be empty!')
    }
    getQuery(e.target.elements.query.value.trim());
    }
  return (
    <header>
      <form onSubmit={onSubmit}>
          <input type="text" name='query' autoComplete="off" autoFocus placeholder="Search images and photos" />
         <button type="submit">Search</button>
      </form>
      </header>
  )
}

export default SearchBar