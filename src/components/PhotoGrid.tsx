import React, { useEffect, useState } from 'react';

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const generateRandomIds = (count: number, maxId: number): number[] => {
    const ids = new Set<number>();
    while (ids.size < count) {
      const randomId = Math.floor(Math.random() * maxId) + 1;
      ids.add(randomId);
    }
    return Array.from(ids);
  };

  const fetchPhotos = async () => {
    try {
      const randomIds = generateRandomIds(9, 1000);
      const photoUrls = randomIds.map(id => `https://picsum.photos/id/${id}/200/200`);
      setPhotos(photoUrls);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  useEffect(() => {
    fetchPhotos(); 

    const intervalId = setInterval(() => {
      fetchPhotos(); 
    }, 10000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="photo-grid">
      {photos.map((url, index) => (
        <img key={index} src={url} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGrid;
