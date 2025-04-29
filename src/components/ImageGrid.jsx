import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="w-[80%] mx-auto my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {images.map((img) => (
        <a key={img.id} href={img.links.html} target="_blank">
          <img
            src={img.urls.small}
            alt={img.alt_description}
            title={img.alt_description}
            loading="lazy"
            className="w-full h-[230px] object-cover rounded-md"
          />
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
