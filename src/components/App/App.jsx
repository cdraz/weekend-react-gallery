import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {
  
  // Declare galleryList state variable
  const [ galleryList, setGalleryList ] = useState([]);

  // Declare getGallery
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then( res => {
        console.log('Gallery received: ', res.data);

        // Set retrieved data to state variable
        setGalleryList(res.data);
      })
      .catch( err => {
        console.error('Error retrieving gallery: ', err);
      });
  } 

  // On component load, run getGallery
  useEffect( () => {
    getGallery();
  }, [] );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList list={galleryList} />
    </div>
  );
}

export default App;
