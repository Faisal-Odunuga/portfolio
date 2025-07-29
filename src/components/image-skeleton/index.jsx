import { useState } from "react";

const ImageWithSkeleton = ({
  src,
  alt,
  className = "",
  skeletonClass = "",
  imgClass = "",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div
          className={`absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded ${skeletonClass}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        } rounded ${imgClass}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImageWithSkeleton;
