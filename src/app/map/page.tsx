'use client'
import Image from 'next/image';
import mapImage from '../assets/mieraudmap.jpg';
import { useState } from 'react';

export default function MapPage() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDoubleClick = () => {
    window.open(
      'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmieraudmap.a405ddf5.jpg&w=3840&q=75',
      '_blank'
    );
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const newZoomLevel = zoomLevel + (e.deltaY > 0 ? -0.1 : 0.1);
    setZoomLevel(Math.max(1, newZoomLevel));
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLElement | null;
    if (target && target.tagName.toLowerCase() === 'img') {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.movementX;
      const deltaY = e.movementY;

      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Reset the position to its original state after panning
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    // Reset the position to its original state after panning
    setPosition({ x: 0, y: 0 });
  };

  return (
    <main
      className="flex flex-row justify-around h-screen max-w-screen"
      onWheel={handleWheel}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-1/3 order-1"></div>

      <div
        className="order-2 flex flex-col ml-[2%]"
        style={{
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        <div className="max-w-full mt-[1vw] m-[4vw]">
          <Image
            className="w-[80%] h-auto"
            src={mapImage}
            alt="Map of the Continent of Mieraud"
            priority={true}
            placeholder="blur"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
            }}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
    </main>
  );
}
{/*import Image from 'next/image';
import mapImage from '../assets/mieraudmap.jpg';
import { useState } from 'react';

export default function MapPage() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleDoubleClick = () => {
    window.open(
      'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmieraudmap.a405ddf5.jpg&w=3840&q=75',
      '_blank'
    );
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const newZoomLevel = zoomLevel + (e.deltaY > 0 ? -0.1 : 0.1);
    setZoomLevel(Math.max(1, newZoomLevel));
  };

  const handleMouseDown = (e) => {
    // Check if the mouse event target is the image
    if (e.target.tagName.toLowerCase() === 'img') {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.movementX;
      const deltaY = e.movementY;

      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <main
      className="flex flex-row justify-around h-screen max-w-screen"
      onWheel={handleWheel}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-1/3 order-1">
        
      </div>

      <div
        className="order-2 flex flex-col"
        style={{
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        <div className="max-w-full mt-[1vw] m-[4vw]">
          <Image
            className="w-[80%] h-auto"
            src={mapImage}
            alt="Map of the Continent of Mieraud"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
            }}
          />
        </div>
      </div>
    </main>
  );
}
'use client'
import Image from 'next/image';
import mapImage from '../assets/mieraudmap.jpg';
import { useState } from 'react';

export default function MapPage() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleDoubleClick = () => {
    window.open(
      'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmieraudmap.a405ddf5.jpg&w=3840&q=75',
      '_blank'
    );
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const newZoomLevel = zoomLevel + (e.deltaY > 0 ? -0.1 : 0.1);
    setZoomLevel(Math.max(1, newZoomLevel));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));

      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <main
      className="flex flex-row justify-around h-screen max-w-screen"
      onWheel={handleWheel}
      onDoubleClick={handleDoubleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="w-1/3 order-1">
        
      </div>

      <div
        className="order-2 flex flex-col"
        style={{
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        <div className="max-w-full mt-[1vw] m-[4vw]">
          <Image
            className="w-[80%] h-auto"
            src={mapImage}
            alt="Map of the Continent of Mieraud"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
            }}
          />
        </div>
      </div>
    </main>
  );
}

'use client'
import Image from 'next/image';
import mapImage from '../assets/mieraudmap.jpg';
import { useState } from 'react';

export default function MapPage() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleDoubleClick = () => {
    window.open(
      'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmieraudmap.a405ddf5.jpg&w=3840&q=75',
      '_blank'
    );
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const newZoomLevel = zoomLevel + (e.deltaY > 0 ? -0.1 : 0.1);
    setZoomLevel(Math.max(1, newZoomLevel));
  };

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen" onWheel={handleWheel} onDoubleClick={handleDoubleClick}>
      <div className="w-1/3 order-1">
        
      </div>

      <div className="order-2 flex flex-col">
        <div className="max-w-full mt-[1vw] m-[4vw]">
          <Image
            className="w-[80%] h-auto"
            src={mapImage}
            alt="Map of the Continent of Mieraud"
            style={{ transform: `scale(${zoomLevel})` }}
          />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image"
import mapImage from '../assets/mieraudmap.jpg'
export default function mapPage() {

  return (
    <main className="flex flex-row justify-around h-screen max-w-screen">
      
      <div className="w-1/3 order-1">
        
      </div>

      <div className="order-2 flex flex-col">
        <div className="max-w-full mt-[1vw] m-[4vw]">
          <Image
              className="w-[80%] h-auto"
              src={mapImage}
              alt="Map of the Continent of Mieraud"
              priority={true}
              placeholder="blur"
            />
        </div>
        </div>
      
    </main>
  );
}*/}