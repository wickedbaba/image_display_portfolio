import React, { useEffect, useRef, useState } from 'react';
import MediaCard from './MediaCard';
import ImageModal from './ImageModal';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  aspectRatio: number;
  prompt: string;
}

const MasonryGrid: React.FC = () => {
  const [columns, setColumns] = useState(3);
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Media data with local images - Updated paths with exact filenames
  const mediaItems: MediaItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/Abhimanyu%20in%20Battle%20Fury.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '2',
      type: 'image',
      src: '/lord%20maruti.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '3',
      type: 'image',
      src: '/Warrior%20of%20Fury_%20Abhimanyu%27s%20Power.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '4',
      type: 'image',
      src: '/Handshake%20at%20Twilight.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '5',
      type: 'image',
      src: '/ChatGPT%20Image%20Jul%2013%2C%202025%2C%2010_44_27%20PM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '6',
      type: 'image',
      src: '/ChatGPT%20Image%20Jul%2013%2C%202025%2C%2011_10_52%20PM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '7',
      type: 'image',
      src: '/ChatGPT%20Image%20Jul%2014%2C%202025%2C%2010_57_45%20AM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '8',
      type: 'image',
      src: '/ChatGPT%20Image%20Jul%2014%2C%202025%2C%2011_23_06%20PM.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '9',
      type: 'image',
      src: '/ChatGPT%20Image%20Jul%2014%2C%202025%2C%2011_46_21%20PM.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '10',
      type: 'image',
      src: '/ChatGPT%20Image%20Jul%2015%2C%202025%2C%2012_29_19%20AM.png',
      aspectRatio: 1.25,
      prompt: 'will add later',
    }
  ];

  // Handle responsive columns - max 3 columns
  useEffect(() => {
    const updateColumns = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width < 768) setColumns(1);
        else if (width < 1200) setColumns(2);
        else setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Distribute items across columns
  const distributeItems = () => {
    const columnArrays: MediaItem[][] = Array.from({ length: columns }, () => []);
    const columnHeights = Array(columns).fill(0);
    
    mediaItems.forEach((item) => {
      // Find the column with the smallest height
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
      columnArrays[shortestColumnIndex].push(item);
      // Estimate height based on aspect ratio for better distribution
      columnHeights[shortestColumnIndex] += (1 / item.aspectRatio) * 300; // Base height estimation
    });
    
    return columnArrays;
  };

  const columnArrays = distributeItems();

  const handleImageClick = (item: MediaItem) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div 
        ref={containerRef}
        className="grid auto-rows-min max-w-7xl mx-auto p-4"
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '16px'
        }}
      >
        {columnArrays.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col" style={{ gap: '16px' }}>
            {column.map((item) => (
              <MediaCard
                key={item.id}
                id={item.id}
                type={item.type}
                src={item.src}
                aspectRatio={item.aspectRatio}
                prompt={item.prompt}
                onImageClick={() => handleImageClick(item)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          src={selectedImage.src}
          prompt={selectedImage.prompt}
        />
      )}
    </>
  );
};

export default MasonryGrid;