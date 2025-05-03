# Newspaper Scan Reader

An interactive web-based viewer that allows users to view and compare a sequence of related images or PDF pages with smooth transitions. Perfect for viewing image sequences that show gradual changes, such as different exposure levels or temporal changes, or for comparing pages across multiple PDF documents.

## Features

- **Dynamic File Loading**: 
  - Drag and drop multiple numbered images (e.g., "image 1.jpg", "image 2.jpg")
  - Drag and drop multiple PDF files to view their pages in order
  - Mix both images and PDFs in a single drop
- **Smooth Transitions**: Use a slider to smoothly transition between sequential images or PDF pages
- **Advanced Zoom Controls**:
  - Zoom in/out buttons
  - Pinch-to-zoom on touch devices
  - Trackpad/touchpad pinch gestures
  - Ctrl/Cmd + scroll wheel zoom
- **Pan Controls**:
  - Click and drag with mouse
  - Touch and drag on mobile devices
  - Two-finger scroll on trackpad
- **Responsive Design**: Works on both desktop and mobile devices

## Usage

1. Open `index.html` in a modern web browser
2. Drag and drop either:
   - A sequence of numbered images (e.g., "scan 1.jpg", "scan 2.jpg")
   - Multiple PDF files to view their pages in order
   - A mix of images and PDFs
3. Use the slider at the top to transition between images or pages
4. Use any of the zoom controls to examine details:
   - Click the +/- buttons
   - Use pinch gestures on your trackpad
   - Hold Ctrl/Cmd while scrolling
5. Pan around the zoomed image:
   - Click and drag with your mouse
   - Use two fingers on your trackpad
   - Drag with one finger on touch devices

## Requirements

- Modern web browser with JavaScript enabled
- Support for HTML5 File API
- Support for CSS transforms
- Internet connection (for loading PDF.js library)

## Dependencies

- Bootstrap 5.3.0
- PDF.js 3.11.174

## Browser Compatibility

Tested and working in:
- Chrome/Edge (latest versions)
- Firefox (latest version)
- Safari (latest version)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.