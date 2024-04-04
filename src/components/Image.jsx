import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ src, height, width, alt, ...rest }) {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src}
      effect="blur"
      wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: { overflow: "hidden", transitionDelay: 0.5 },
      }}
      width={width}
      {...rest}
    />
  );
}

export default Image;
