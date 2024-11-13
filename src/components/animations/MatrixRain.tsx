'use client';

import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  className?: string;
}

/**
 * A canvas element that displays a matrix rain effect.
 *
 * Props:
 * - `className`: Optional class name to add to the canvas element.
 */
export const MatrixRain = ({ className = '' }: MatrixRainProps) => {
  // Create a reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Set up the matrix rain effect using useEffect
  useEffect(() => {
    // Get the canvas element from the ref
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('MatrixRain: Canvas element is null');
      return;
    }

    // Get the 2D drawing context from the canvas
    const context = canvas.getContext('2d');
    if (!context) {
      console.log('MatrixRain: Canvas context is null');
      return;
    }

    // Set the canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(
      `MatrixRain: Set canvas dimensions to ${canvas.width}x${canvas.height}`,
    );

    // Define the characters to use in the matrix rain
    const katakana =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    console.log(`MatrixRain: Set alphabet to ${alphabet}`);

    // Set the font size and calculate the number of columns
    const fontSize = 16;
    const columns = Math.floor(canvas.width / 10); // Each character occupies 10 pixels
    console.log(
      `MatrixRain: Set font size to ${fontSize}px and columns to ${columns}`,
    );

    // Initialize the drop positions for each column
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.floor(Math.random() * canvas.height);
    }
    console.log(`MatrixRain: Set drop positions to ${drops}`);

    // Define the draw function to render the matrix rain
    const draw = () => {
      // Clear the canvas with a translucent black rectangle to create a trail effect
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Set the text color and font
      context.fillStyle = '#0F0';
      context.font = `${fontSize}px monospace`;

      // Draw each character in its column
      for (let i = 0; i < drops.length; i++) {
        // Randomly select a character from the alphabet
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const x = i * 10; // Calculate the x position based on column index
        context.fillText(text, x, drops[i]); // Draw the character

        // Move the drop position down the canvas
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = 0; // Reset the drop if it goes off the canvas
        }

        drops[i] += fontSize; // Move the drop down by the font size
      }

      console.log(`MatrixRain: Drew ${drops.length} characters`);
    };

    // Set up the animation using setInterval to call draw function
    const animationFrame = setInterval(draw, 100);
    console.log(`MatrixRain: Set up animation with interval of 100ms`);

    // Handle window resizing to adjust canvas dimensions and drop positions
    const handleResize = () => {
      // Update the canvas dimensions
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recalculate drop positions for new dimensions
      drops.length = 0;
      for (let x = 0; x < Math.floor(canvas.width / 10); x++) {
        drops[x] = Math.floor(Math.random() * canvas.height);
      }
      console.log(
        `MatrixRain: Resized canvas to ${canvas.width}x${canvas.height}`,
      );
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);
    console.log(`MatrixRain: Added resize event listener`);

    // Clean up the animation and event listener on component unmount
    return () => {
      clearInterval(animationFrame); // Stop the animation
      window.removeEventListener('resize', handleResize); // Remove the resize listener
      console.log(`MatrixRain: Cleaned up animation and event listener`);
    };
  }, []);

  // Return the canvas element with the provided class name
  return (
    <canvas
      ref={canvasRef} // Attach the ref to the canvas
      className={`fixed inset-0 -z-10 ${className}`} // Apply styles and className
      style={{ mixBlendMode: 'screen' }} // Set blend mode for effect
    />
  );
};
