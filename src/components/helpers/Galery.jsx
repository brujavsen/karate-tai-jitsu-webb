import React, { useState } from "react";

const Gallery = ({ images }) => {
	const [loadedImages, setLoadedImages] = useState([]);

	// Handler para cuando una imagen se carga
	const handleImageLoad = (image) => {
		setLoadedImages((prev) => [...prev, image]);
	};

	return (
		<div className="gallery">
			{images.map((image, index) => (
				<LazyImage
					key={index}
					image={image}
					index={index}
					handleImageLoad={handleImageLoad}
					loaded={loadedImages.includes(image)}
				/>
			))}
		</div>
	);
};

const LazyImage = ({ image, index, handleImageLoad, loaded }) => {
	return (
		<div className="image-container">
			<picture>
				<source
					srcSet={`${image}-320w.webp 320w, ${image}-480w.webp 480w, ${image}-800w.webp 800w`}
					type="image/webp"
				/>
				<source
					srcSet={`${image}-320w.jpg 320w, ${image}-480w.jpg 480w, ${image}-800w.jpg 800w`}
					type="image/jpeg"
				/>
				<img
					className={`lazy-image ${loaded ? "loaded" : ""}`}
					data-src={image}
					src={loaded ? `${image}-800w.jpg` : ""}
					srcSet={`${image}-320w.jpg 320w, ${image}-480w.jpg 480w, ${image}-800w.jpg 800w`}
					sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
					alt={`img ${index + 1}`}
					loading="lazy"
					onLoad={() => handleImageLoad(image)}
				/>
			</picture>
		</div>
	);
};

export default Gallery;
