# Image Display Portfolio
 random experiment - pwease ignore

## Adding Images

To add new images to the portfolio, modify the `mediaItems` array in `src/components/MasonryGrid.tsx`. Each image requires the following properties:

```typescript
interface MediaItem {
  id: string;          // Unique identifier
  type: 'image';       // Currently only supports 'image'
  src: string;         // URL to the image
  username: string;    // Creator/photographer name
  likes: number;       // Number of likes
  aspectRatio: number; // Width divided by height (e.g., 1.5 for 3:2)
  prompt: string;      // Description or AI prompt used
  timestamp: string;   // Upload date/time
}
```

### Example Image Entry:

```javascript
{
  id: '19',  // Make sure this is unique
  type: 'image',
  src: 'https://your-image-url.jpg',
  username: 'your_username',
  likes: 0,
  aspectRatio: 1.5,  // Calculate this based on your image dimensions
  prompt: 'Detailed description or AI prompt used to generate the image',
  timestamp: 'Aug 1, 2:30PM'
}
```

### Image Guidelines:

1. **Image Format**:
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 800px-2000px width
   - Optimize images for web delivery

2. **Aspect Ratio**:
   - Calculate using: width ÷ height
   - Common ratios:
     - 1.0 (Square): 1000x1000
     - 1.5 (3:2): 1500x1000
     - 0.67 (2:3): 1000x1500
     - 1.33 (4:3): 1333x1000

3. **Prompts**:
   - Be descriptive and specific
   - Include key visual elements
   - Mention style, lighting, and mood
   - Keep under 200 characters

4. **Best Practices**:
   - Use CDN-hosted images for better performance
   - Maintain consistent image quality
   - Provide meaningful usernames
   - Use accurate timestamps

## Project Structure

```
image_display_portfolio/
├── src/
│   ├── components/
│   │   ├── ImageModal.tsx    # Full-screen image view
│   │   ├── MasonryGrid.tsx   # Main grid layout
│   │   ├── MediaCard.tsx     # Individual image card
│   │   └── ThemeToggle.tsx   # Dark/light mode switch
│   ├── hooks/
│   │   └── useDarkMode.ts    # Dark mode management
│   ├── App.tsx
│   └── main.tsx
└── [configuration files]
```

## Customization

### Styling

The project uses Tailwind CSS for styling. Customize the look by modifying:
- `tailwind.config.js` for theme configuration
- Individual component styles in their respective files
- Global styles in `src/index.css`

### Grid Layout

Adjust the grid behavior in `MasonryGrid.tsx`:
- Change maximum columns (default: 3)
- Modify breakpoints for responsive layout
- Adjust gap between images (default: 16px)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 