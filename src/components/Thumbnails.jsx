import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';

function Thumbnail({ photo, onThumbnailClick }) {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);
    useEffect(() => {
        const currentImgRef = imgRef.current; // Copy the current ref to a local variable
    
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(`Image ${photo.id} is now visible`);
                        setIsVisible(true);
                        observer.unobserve(currentImgRef); // Use the local variable
                    }
                });
            },
            { threshold: 0.1 }
        );
    
        if (currentImgRef) {
            observer.observe(currentImgRef);
        }
    
        return () => {
            if (currentImgRef) {
                observer.unobserve(currentImgRef); // Use the local variable for cleanup
            }
        };
    }, [photo.id]);
    

    return (
        <Card
            key={photo.id}
            className="m-2"
            style={{ width: '180px', cursor: 'pointer' }}
            onClick={() => onThumbnailClick(photo.url)}
        >
            {isVisible ? (
                <Card.Img variant="top" src={photo.thumbnailUrl} alt={photo.title} ref={imgRef} />
            ) : (
                <div style={{ width: '100%', height: '100px', backgroundColor: '#f0f0f0' }} ref={imgRef}>
                    Loading...
                </div>
            )}
            <Card.Body>
                <Card.Text>{photo.title}</Card.Text>
            </Card.Body>
        </Card>
    );
}

function Thumbnails({ photos, onThumbnailClick }) {
    return (
        <div className="d-flex flex-wrap">
            {photos.map(photo => (
                <Thumbnail key={photo.id} photo={photo} onThumbnailClick={onThumbnailClick} />
            ))}
        </div>
    );
}

export default Thumbnails;
