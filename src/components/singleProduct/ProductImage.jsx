import { useState } from "react";
import Image from "../Image";

function ProductImage({ imgUrl }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Function to handle mouse movement for updating magnifier position and cursor position
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    // Calculating the percentage-based cursor position relative to the product image container
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    // Updating the cursor position relative to the product image container
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  };

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={imgUrl}
        width="100%"
        height="100%"
        alt="Product Image"
        className="h-full rounded-3xl border object-cover"
        onError={(e) => {
          e.target.src = "/product-placeholder.webp";
        }}
      />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents: "none",
          }}
        >
          <div
            className="h-[210px] w-[210px] rounded-3xl border-2 border-white"
            style={{
              backgroundImage: `url(${imgUrl})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ProductImage;
