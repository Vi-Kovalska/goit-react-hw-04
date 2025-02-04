import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import s from './SearchBar.module.css'
import clsx from "clsx";
import { themeContext } from '../Provider/ThemeProvider/ThemeProvider';
const SearchBar = ({ getQuery }) => {
  const [value, setValue] = useState('');
 const { theme, toggleTheme } = useContext(themeContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return toast.error('The search field cannot be empty!')
    }
   return getQuery(value.trim());
    }
  return (
    <header className={s[clsx(theme === 'light' ? 'light' : 'dark')]}>
      <button onClick={toggleTheme}>{theme}</button>
      <form onSubmit={onSubmit} className={s.formSearch}>       
        <input className={s.inputQuery} onChange={(e) => setValue(e.target.value)} value={value} type="text" autoComplete="off" autoFocus placeholder="Search images and photos" />
         <button type="submit">Search</button>
      </form>
      </header>
  )
}

export default SearchBar