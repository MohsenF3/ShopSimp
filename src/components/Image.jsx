import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ src, height, width, alt, ...rest }) {
  const placeholderRef = useRef(null);

  const onLoad = () => {
    placeholderRef.current.style.display = "none";
  };

  return (
    <>
      <div
        ref={placeholderRef}
        style={{ width, height }}
        className="bg-gray-100"
      />

      <LazyLoadImage
        alt={alt}
        height={height}
        src={src}
        effect="blur"
        wrapperProps={{
          style: { overflow: "hidden", transitionDelay: 0.5 },
        }}
        width={width}
        onLoad={onLoad}
        {...rest}
      />
    </>
  );
}

export default Image;
