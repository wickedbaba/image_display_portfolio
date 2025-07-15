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

  // Media data with local images - Updated paths with underscores
  const mediaItems: MediaItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/image_display_portfolio/Abhimanyu_in_Battle_Fury.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '2',
      type: 'image',
      src: '/image_display_portfolio/lord_maruti.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '3',
      type: 'image',
      src: '/image_display_portfolio/Warrior_of_Fury_Abhimanyus_Power.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '4',
      type: 'image',
      src: '/image_display_portfolio/Handshake_at_Twilight.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '5',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_13_2025_10_44_27_PM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '6',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_13_2025_11_10_52_PM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '7',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_14_2025_10_57_45_AM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '8',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_14_2025_11_23_06_PM.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '9',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_14_2025_11_46_21_PM.png',
      aspectRatio: 1,
      prompt: 'will add later',
    },
    {
      id: '10',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_15_2025_12_29_19_AM.png',
      aspectRatio: 1.25,
      prompt: 'will add later',
    },
    {
      id: '11',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_16_2025_12_01_11_AM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '12',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_16_2025_12_11_00_AM.png',
      aspectRatio: 1.5,
      prompt: 'will add later',
    },
    {
      id: '13',
      type: 'image',
      src: '/image_display_portfolio/ChatGPT_Image_Jul_16_2025_12_15_50_AM.png',
      aspectRatio: 1.5,
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