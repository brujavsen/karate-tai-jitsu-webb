import { useEffect, useMemo, useState } from "react";
import { BiXCircle } from "react-icons/bi";

const galleryImages = [
    "/galery/image-1.jpeg",
    "/galery/image-2.jpeg",
    "/galery/image-3.jpeg",
    "/galery/image-4.jpeg",
    "/galery/image-5.jpeg",
    "/galery/image-6.jpeg",
    "/galery/image-7.jpeg",
    "/galery/image-8.jpeg",
    "/galery/image-9.jpeg",
    "/galery/image-10.jpeg",
    "/galery/image-11.jpeg",
    "/galery/image-12.jpeg",
    "/galery/image-13.jpeg",
    "/galery/image-14.jpeg",
    "/galery/image-15.jpeg",
    "/galery/image-16.jpeg",
    "/galery/image-17.jpeg",
    "/galery/image-18.jpeg",
    "/galery/image-19.jpeg",
    "/galery/image-20.jpeg",
    "/galery/image-21.jpeg",
    "/galery/image-22.jpeg",
    "/galery/image-23.jpeg",
    "/galery/image-24.jpeg",
    "/galery/image-25.jpeg",
    "/galery/image-26.jpeg",
    "/galery/image-27.jpeg",
    "/galery/image-28.jpeg",
    "/galery/image-29.jpeg",
    "/galery/image-30.jpeg",
    "/galery/image-31.jpeg",
    "/galery/image-32.jpeg",
    "/galery/image-33.jpeg",
    "/galery/image-34.jpeg",
    "/galery/image-35.jpg",
    "/galery/image-36.jpg",
    "/galery/image-37.jpg",
    "/galery/image-38.jpg",
    "/galery/image-39.jpg",
    "/galery/image-40.jpg",
    "/galery/image-41.jpg",
    "/galery/image-42.jpg",
    "/galery/image-43.jpg",
    "/galery/image-44.jpg",
    "/galery/image-45.jpg",
    "/galery/image-46.jpg",
    "/galery/image-47.jpg",
    "/galery/image-48.jpg",
    "/galery/image-49.jpg",
    "/galery/image-50.jpg",
    "/galery/image-51.jpg",
    "/galery/image-52.jpg",
    "/galery/image-53.jpg",
    "/galery/image-54.jpg",
    "/galery/image-55.jpg",
    "/galery/image-56.jpg",
    "/galery/image-57.jpg",
    "/galery/image-58.jpg",
    "/galery/image-59.jpg",
    "/galery/image-60.jpg",
    "/galery/image-61.jpg",
    "/galery/image-62.jpg",
    "/galery/image-63.jpg",
    "/galery/image-64.jpg",
    "/galery/image-65.jpg",
    "/galery/image-66.jpg",
    "/galery/image-67.jpg",
    "/galery/image-68.jpg",
    "/galery/image-69.jpg",
    "/galery/image-70.jpg",
    "/galery/image-71.jpg",
    "/galery/image-72.jpg",
    "/galery/image-73.jpg",
    "/galery/image-74.jpg",
    "/galery/image-75.jpg",
    "/galery/image-76.jpg",
    "/galery/image-77.jpg",
    "/galery/image-78.jpg",
    "/galery/image-79.jpg",
    "/galery/image-80.jpg",
    "/galery/image-81.jpg",
    "/galery/image-82.jpg",
    "/galery/image-83.jpg",
    "/galery/image-84.jpg",
    "/galery/image-85.jpg",
    "/galery/image-86.jpg",
    "/galery/image-87.jpg",
    "/galery/image-88.jpg",
    "/galery/image-89.jpg",
    "/galery/image-90.jpg",
    "/galery/image-91.jpg",
    "/galery/image-92.jpg",
    "/galery/image-93.jpg",
    "/galery/image-94.jpg",
    "/galery/image-95.jpg",
    "/galery/image-96.jpg",
    "/galery/image-97.jpg",
    "/galery/image-98.jpg",
    "/galery/image-99.jpg",
    "/galery/image-100.jpg",
    "/galery/image-101.jpg",
    "/galery/image-102.jpg",
    "/galery/image-103.jpg",
    "/galery/image-104.jpg",
    "/galery/image-105.jpg",
    "/galery/image-106.jpg",
    "/galery/image-107.jpg",
    "/galery/image-108.jpg",
    "/galery/image-109.jpg",
    "/galery/image-110.jpg",
    "/galery/image-111.jpg",
    "/galery/image-112.jpg",
    "/galery/image-113.jpg",
    "/galery/image-114.jpg",
    "/galery/image-115.jpg",
    "/galery/image-116.jpg",
    "/galery/image-117.jpg",
    "/galery/image-118.jpg",
    "/galery/image-119.jpg",
    "/galery/image-120.jpg",
    "/galery/image-121.jpg",
    "/galery/image-122.jpg",
    "/galery/image-123.jpg",
    "/galery/image-124.jpg",
    "/galery/image-125.jpg",
    "/galery/image-126.jpg",
    "/galery/image-127.jpg",
    "/galery/image-128.jpg",
    "/galery/image-129.jpg",
    "/galery/image-130.jpg",
    "/galery/image-131.jpg",
    "/galery/image-132.jpg",
    "/galery/image-133.jpg",
  "/galery/image-133.jpg",
];

const firstAidImages = [
    "/first-aid/image-04.jpg",
    "/first-aid/image-06.jpg",
    "/first-aid/image-02.jpg",
    "/first-aid/image-03.jpg",
    "/first-aid/image-05.jpg",
];

const Galery = () => {
  const [imageSelected, setImageSelected] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isPanning, setIsPanning] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });

  const images = useMemo(() => galleryImages, []);
  const imagesFirstAid = useMemo(() => firstAidImages, []);

  const firstColumnImages = useMemo(() => images.slice(0, 46), [images]);
  const secondColumnImages = useMemo(() => images.slice(46, 89), [images]);
  const thirdColumnImages = useMemo(() => images.slice(89, 135), [images]);


  const openImage = (image) => {
    setImageSelected(image);
    setIsModalVisible(true);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const closeImage = () => {
    setImageSelected(null);
    setIsModalVisible(false);
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleOverlayClick = (event) => {
    if (event.target.tagName !== "IMG" && event.target.tagName !== "BUTTON" && !event.target.closest('.popup-img__controls')) {
      closeImage();
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 1));
    setOffset({ x: 0, y: 0 });
  };

  const handleWheel = (event) => {
    event.preventDefault();
    const delta = event.deltaY < 0 ? 0.25 : -0.25;
    setZoom((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 4);
      if (next === 1) {
        setOffset({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleMouseDown = (event) => {
    if (zoom === 1) return;
    setIsPanning(true);
    setStartPan({ x: event.clientX - offset.x, y: event.clientY - offset.y });
  };

  const handleMouseMove = (event) => {
    if (!isPanning) return;
    setOffset({
      x: event.clientX - startPan.x,
      y: event.clientY - startPan.y,
    });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeImage();
      }
    };

    if (isModalVisible) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            if (image.dataset.src) {
              image.src = image.dataset.src;
            }
            obs.unobserve(image);
          }
        });
      },
      {
        rootMargin: "100px",
      }
    );

    const imagesToObserve = document.querySelectorAll(".lazy-image");
    imagesToObserve.forEach((image) => observer.observe(image));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="hero_galery" aria-labelledby="galery-title">
        <div className="hero_title">
          <h2 id="galery-title">Galería</h2>
          <p>Conoce a través de fotos</p>
        </div>
      </section>
      <section className="first-aid" aria-labelledby="first-aid-title">
        <h3 id="first-aid-title" className="gallery-section-title">Primeros auxilios</h3>
        <div className="first-aid__grid">
          {imagesFirstAid.map((image, index) => (
              <div
                key={index}
                className="image_item"
                onClick={() => openImage(image)}
              >
                <img
                  className="lazy-image"
                  data-src={image}
                  loading="lazy"
                  alt={`img ${index + 1}`}
                />
              </div>
            ))}
        </div>
      </section>
      <h3 className="gallery-section-title">Actividades</h3>
      <section className="row" aria-label="Galería de actividades">
        <div className="column">
          {firstColumnImages.map((image, index) => (
            <div
              key={index}
              className="image_item"
              onClick={() => openImage(image)}
            >
              <img
                className="lazy-image"
                data-src={image}
                loading="lazy"
                alt={`img ${index + 1}`}
                />
            </div>
          ))}
        </div>
        <div className="column">
          {secondColumnImages.map((image, index) => (
            <div
              key={index}
              className="image_item"
              onClick={() => openImage(image)}
            >
              <img
                className="lazy-image"
                data-src={image}
                loading="lazy"
                alt={`img ${index + 11}`}
                />
            </div>
          ))}
        </div>
        <div className="column">
          {thirdColumnImages.map((image, index) => (
            <div
              key={index}
              className="image_item"
              onClick={() => openImage(image)}
            >
              <img
                className="lazy-image"
                data-src={image}
                loading="lazy"
                alt={`img ${index + 21}`}
                />
            </div>
          ))}
        </div>
      </section>
      <div
        className={`popup-img ${isModalVisible ? "" : "hidden"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Imagen ampliada"
        onClick={handleOverlayClick}
        onWheel={handleWheel}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <button
          type="button"
          className="close-icon"
          onClick={closeImage}
          aria-label="Cerrar imagen"
        >
          <BiXCircle />
        </button>
        {imageSelected && (
          <div className="popup-img__content">
            <div className="popup-img__controls">
              <button type="button" onClick={handleZoomOut} disabled={zoom === 1}>
                -
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button type="button" onClick={handleZoomIn} disabled={zoom === 4}>
                +
              </button>
            </div>
            <img
              loading="lazy"
              src={imageSelected}
              alt="Imagen ampliada"
              style={{
                transform: `translate(-50%, -50%) scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
              }}
              onMouseDown={handleMouseDown}
              draggable={false}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Galery;
