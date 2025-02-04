import './App.css'
import clsx from "clsx";
import toast from 'react-hot-toast'
import { themeContext } from './Provider/ThemeProvider/ThemeProvider'

import { fetchImagesFromAPI } from '../services/api'

import { useContext, useEffect, useState } from 'react'

import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import LoadMoreBTN from './LoadMoreBTN/LoadMoreBTN'

function App() {
 const { theme } = useContext(themeContext);

  const [collection, setCollection] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMess, setErrorMess] = useState('');
  useEffect(() => {
  if (!newQuery) return;
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoad(true);
        const { hits } = await fetchImagesFromAPI(newQuery, page);
        if (hits.length === 0) {
          toast.error('There are no images for your request. Please try again!');
          
        }
         setCollection(prev => [...prev, ...hits])
}catch (error) {
        setIsError(true);
        setErrorMess(error.message)
        setCollection([]);
}finally {
    setIsLoad(false);
  }

    }
    getData();
    }
    , [newQuery, page])
 
  const getQuery = (newTopic) => {
    setNewQuery(newTopic);
    setCollection([]);
    setPage(1);
  }
  const changePage = () =>  {
// if (page >= maxPage) {
//            return toast.error('Out of articles!');
//           }
        return setPage(prev => prev + 1)
  }

  return (
    <>
       <div className={clsx(theme === 'light' ? 'light' : 'dark')}>
      <SearchBar getQuery={getQuery} />
      {collection.length > 0 && <ImageGallery array={collection}  />}
     {isLoad && <Loader />}
      {isError && <ErrorMessage errorMess={errorMess} />}
        {collection.length > 0 && <LoadMoreBTN changePage={changePage} />}
      </div>
    </>
  )
}

export default App
