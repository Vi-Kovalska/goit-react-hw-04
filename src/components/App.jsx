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
import ImageModal from './ImageModal/ImageModal';

function App() {
 const { theme } = useContext(themeContext);

  const [collection, setCollection] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMess, setErrorMess] = useState('');
  useEffect(() => {
  if (!newQuery) return;
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoad(true);
        const { results, total} = await fetchImagesFromAPI(newQuery, page);
        if (results.length === 0) {
          toast.error('There are no images for your request. Please try again!');
          
        }
        setCollection(prev => [...prev, ...results]);
        setTotalElements(total);
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
 
  const onSubmit = (e) => {
      e.preventDefault();
        const newTopic = e.target.elements.query.value.trim().toLowerCase();
        if (newTopic === '') {
          return toast.error('The search field cannot be empty!')
        }

    setNewQuery(newTopic);
    setCollection([]);
    setPage(1);
  }
  
  let perPage = 10;
  const totalPages = Math.ceil(totalElements / perPage);
  const changePage = () =>  {
if (page >= totalPages) {
           return toast.error('Out of articles!');
          }
        return setPage(prev => prev + 1)
  }
  // Modal region
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataForModalImg, setDataForModalImg] = useState({});

  const openModal =(id,  regular , alt_description) => {
    setModalIsOpen(true);
    setDataForModalImg({ id, regular, alt_description });
  }
 
  const closeModal =() => {
    setModalIsOpen(false);
  }
  const handleBackdrop = (e) => {
        if (e.target === e.currentTarget) {
          closeModal();
      }   
    }
    
  return (
    <>
       <div className={clsx(theme === 'light' ? 'light' : 'dark')}>
      <SearchBar onSubmit={onSubmit} />
        {collection.length > 0 && <ImageGallery images={collection} openModal={openModal} />}
        {modalIsOpen && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleBackdrop={handleBackdrop} image={dataForModalImg} openModal={openModal}  />}
     {isLoad && <Loader />}
      {isError && <ErrorMessage errorMess={errorMess} />}
        {collection.length > 0 && <LoadMoreBTN changePage={changePage} />}
      </div>
    </>
  )
}

export default App
