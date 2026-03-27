import React, {useState, useEffect} from 'react';
import M from "materialize-css"
import SearchBar from './components/SearchBar'
import GifList from './components/GifList'
import Modal from './components/Modal'
import Error from './components/Error'
import Header from './components/Header'
import Paginator from './components/Paginator'
import Preloader from './components/Preloader'
import 'materialize-css/dist/css/materialize.min.css';
import ModalProvider from './context/ModalContext'

function App() {
  
  const gifsPerPage = 30
  
  const [gifList, setGifList] = useState([])
  
  const [name, setName] = useState('')

  const [error, setError] = useState(false)
  
  const [message, setMessage] = useState('')
  
  const [totalPages, setTotalPages] = useState(0)
  
  const [currentPage, setCurrentPage] = useState(0)
  
  const [showPreloader, setPreloader] = useState(false)

  useEffect(() => {

    M.Modal.init(document.getElementById('modal'))

    const reset = () => {
      
      setGifList([])
      
      setError(false)
      
      setMessage('')
      
      setCurrentPage(0)
  
    }

    if(!name){
      reset()
      return
    }

    const getGifs = async () => {

      setPreloader(true)

      const api_key = 'mkQkcuGKSxsbg1UVv9EQDREPs5MKsPvM'

      const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${name}&limit=${gifsPerPage}&offset=${currentPage}`

      try {
          
        const response = await fetch(url)

        const {data, pagination} = await response.json()
        
        const calcTotalPages = Math.ceil(pagination.total_count / gifsPerPage) 
        
        setGifList(data)

        setTotalPages(calcTotalPages)

      } catch (error) {

        setError(true)

        setMessage('Somethings was wron, please search again...')
          
      }

      setPreloader(false)

    }

    const top = document.querySelector('.container')

    top.scrollIntoView({behavior:'smooth'})

    if(name !== '')
      getGifs()

}, [name, currentPage])

  const showBackButton = currentPage === 0 || name === ''

  const showNextButton = currentPage === totalPages || name === ''

  const backPage = () => {
    
    const newCurrentPage = currentPage === 0 ? currentPage : currentPage - gifsPerPage
    
    setCurrentPage(newCurrentPage)
  
  }
  
  const nextPage = () => {
    
    const newCurrentPage = currentPage === totalPages ? currentPage : currentPage + gifsPerPage
    
    setCurrentPage(newCurrentPage)
  
  }

  return (

    <ModalProvider>

      <Header title="Search Gifs"/>

      <main className="container white">

        <Modal/>

        <SearchBar setName={setName}/>
        
        { 
          showPreloader ? <Preloader/> : error ? <Error message={message}/> : <GifList gifList={gifList}/> 
        }

        <Paginator
          nextPage={nextPage} 
          backPage={backPage} 
          showBackButton={showBackButton} 
          showNextButton={showNextButton}
        />

      </main>

    </ModalProvider>

  )

}

export default App;
