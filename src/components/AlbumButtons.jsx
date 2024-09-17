import React from 'react';
import { Button } from 'react-bootstrap';

function AlbumButtons({ albumId, onAlbumClick }) {
    return (
        <div>
            <h1 class="animate__animated animate__bounce  animate__infinite">An animated element</h1>
        <Button
            variant="primary"
            className="me-2"
            onClick={onAlbumClick}
        >
            Album {albumId}
        </Button>
        </div>
    );
}

export default AlbumButtons;
