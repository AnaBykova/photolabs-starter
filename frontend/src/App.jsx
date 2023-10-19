import React, {useState} from 'react';

//import PhotoList from './components/PhotoList';
//import TopicList from 'components/TopicList';
//import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';

import './App.scss';



const App = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // Replace with your actual selected photo data

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute openModal={openModal}/>
      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal isOpen={isModalOpen} onClose={closeModal} photo={selectedPhoto} photos={photos}/>
      )}
    </div>
  )
};

export default App;
