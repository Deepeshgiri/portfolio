import React, { useState, useEffect } from 'react';
import AlbumButtons from './AlbumButtons';
import Thumbnails from './Thumbnails';
import Modal from './Modal';

function Images() {
    const [photos, setPhotos] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null); // Keep track of the selected album
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAlbumClick = (albumId) => {
        // Toggle album visibility when clicking
        if (selectedAlbum === albumId) {
            setSelectedAlbum(null);  // Hide the album if it's already selected
        } else {
            setSelectedAlbum(albumId);  // Show the clicked album
        }
    };

    const handleThumbnailClick = (imageUrl) => {
        setModalImage(imageUrl);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const albumIds = [...new Set(photos.map(photo => photo.albumId))];

    return (
        <div className="container">
            {albumIds.map(id => (
                <div key={id} className="row-1">
                    {/* Render Album Buttons */}
                    <AlbumButtons albumId={id} onAlbumClick={() => handleAlbumClick(id)} />
                    
                    {/* Conditionally render Thumbnails if the album is selected */}
                    {selectedAlbum === id && (
                        <Thumbnails
                            photos={photos.filter(photo => photo.albumId === id)}
                            onThumbnailClick={handleThumbnailClick}
                        />
                    )}
                    <hr />
                </div>
            ))}
            
            {/* Modal for viewing selected image */}
            {showModal && (
                <Modal
                    imageUrl={modalImage}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}

export default Images;
