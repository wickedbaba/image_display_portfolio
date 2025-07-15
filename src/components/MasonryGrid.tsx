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

  // will add supabase integration later
  const mediaItems: MediaItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/Abhimanyu in Battle Fury.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '2',
      type: 'image',
      src: '/lord maruti.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '3',
      type: 'image',
      src: '/Warrior of Fury_ Abhimanyu\'s Power.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '4',
      type: 'image',
      src: '/Handshake at Twilight.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '5',
      type: 'image',
      src: '/ChatGPT Image Jul 13, 2025, 10_44_27 PM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '6',
      type: 'image',
      src: '/ChatGPT Image Jul 13, 2025, 11_10_52 PM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '8',
      type: 'image',
      src: '/ChatGPT Image Jul 14, 2025, 11_23_06 PM.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '9',
      type: 'image',
      src: '/ChatGPT Image Jul 14, 2025, 11_46_21 PM.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '10',
      type: 'image',
      src: '/ChatGPT Image Jul 15, 2025, 12_29_19 AM.png',
      aspectRatio: 1.25,
      prompt: 'will add later',
    },
    {
      id: '7',
      type: 'image',
      src: '/ChatGPT Image Jul 14, 2025, 10_57_45 AM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '11',
      type: 'image',
      src: '/ChatGPT Image Jul 16, 2025, 12_01_11 AM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '12',
      type: 'image',
      src: '/ChatGPT Image Jul 16, 2025, 12_11_00 AM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },


    

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