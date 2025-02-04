// import { useState } from 'react'
import './App.css'
import { fetchImagesFromAPI } from '../services/api'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import Loader from './Loader/Loader'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import LoadMoreBTN from './LoadMoreBTN/LoadMoreBTN'
import ImageModal from './ImageModal/ImageModal'
function App() {
  const [collection, setCollection] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMess, setErrorMess] = useState('');
  useEffect(() => {
  if (!collection) return;
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoad(true);
        const {hits} = await fetchImagesFromAPI(query, page);
         setCollection(prev => [...prev, ...hits])
}catch (error) {
        setIsError(true);
        setErrorMess(error)
        setCollection([]);
}finally {
    setIsLoad(false);
  }

    }
    getData();
    }
    , [query, page, collection])
 
  const getQuery = (newTopic) => {
    setQuery(newTopic);
    setCollection([]);
    setPage(1);
  }
  const changePage = () =>  {
// if (page >= maxPage) {
//            return toast.error('Out of articles!');
//           }
        return setPage(prev => prev + 1)
  }
  // Modal region
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal =() => {
        setModalIsOpen(true);
  }
  const closeModal =() => {
    setModalIsOpen(false);
  }
  const handleBackdrop = (e) => {
//додаємо перевірку щоб вікно закривалось якщо клікнули на обгортку але буде бабл ефект (всплиття) і вікно закриється навіть якщо клікнути по самому полю вікна, для цього використовуємо карренттаргет(те на що навіщали слухача) і таргет(те по чому клікнули)
        if (e.target === e.currentTarget) {
          closeModal();
      }   
    }
// // крайній випадок оли викор addEventListener  
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             console.log(e.key);
//             if (e.key === 'Escape') {
//                 closeModal();
//             }
//         }
//         document.addEventListener('keydown', handleKeyDown);
//         // обов*язково видаляємо обробник після закриття модалки щоб він не працював на сторінці і не вичерпував пам*ять
//         return () => {
//             console.log('Мене закрили');
//             document.removeEventListener('keydown', handleKeyDown)
//         }
// }, [closeModal])
    
  return (
    <>
      <SearchBar getQuery={getQuery} />
      {collection.length > 0 && <ImageGallery array={collection} openModal={openModal} />}
     {isLoad && <Loader />}
      {isError && <ErrorMessage errorMess={errorMess} />}
      {collection.length > 0 && <LoadMoreBTN changePage={changePage} />}
      {modalIsOpen && <ImageModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleBackdrop={handleBackdrop} />}
    </>
  )
}

export default App
