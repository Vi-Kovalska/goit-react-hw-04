import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import s from './SearchBar.module.css'
import clsx from "clsx";
import { themeContext } from '../Provider/ThemeProvider/ThemeProvider';
const SearchBar = ({ onSubmit }) => {
 const { theme, toggleTheme } = useContext(themeContext);

  return (
    <header className={s[clsx(theme === 'light' ? 'light' : 'dark')]}>
      <button onClick={toggleTheme}>{theme}</button>
      <form onSubmit={onSubmit} className={s.formSearch}>       
        <input className={s.inputQuery} name='query'  type="text" autoComplete="off" autoFocus placeholder="Search images and photos" />
         <button type="submit">Search</button>
      </form>
      </header>
  )
}

export default SearchBar