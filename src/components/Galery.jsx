import { useEffect, useState } from "react";
import { BiXCircle } from "react-icons/bi";

const Galery = () => {
  const [imageSelected, setImageSelected] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [images, setImages] = useState([
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
  ]);

  const [imagesFirstAid, setImagesFirstAid] = useState([
    "/first-aid/image-04.jpg",
    "/first-aid/image-06.jpg",
    "/first-aid/image-02.jpg",
    "/first-aid/image-03.jpg",
    "/first-aid/image-05.jpg",
  ]);

  const [loadedImages, setLoadedImages] = useState([]);

  const firstTenImages = images.slice(0, 46);
  const secondTenImages = images.slice(46, 89);
  const thirdTenImages = images.slice(89, 135);

  // Función para manejar la carga de imágenes
  const handleImageLoad = (image) => {
    setLoadedImages((prevImages) => [...prevImages, image]);
  };

  const openImage = (image) => {
    setImageSelected(image);
    setIsModalVisible(true);
  };

  const closeImage = () => {
    setImageSelected(null);
    setIsModalVisible(false);
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
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src; // Cargar la imagen
            observer.unobserve(image); // Dejar de observar una vez cargada
          }
        });
      },
      {
        rootMargin: "100px", // Cargar un poco antes de que entre en el viewport
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
      <div className="hero_galery">
        <div className="hero_title">
          <h2>Galeria</h2>
          <p>Conoce a través de fotos</p>
        </div>
      </div>
      <div className="first-aid">
        <h3>Primeros Auxilios</h3>
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
                  onLoad={() => handleImageLoad(image)}
                />
              </div>
            ))}
        </div>
      </div>
      <h3 className="images-title">Actividades</h3>
      <section className="row">
        <div className="column">
          {firstTenImages.map((image, index) => (
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
                onLoad={() => handleImageLoad(image)}
              />
            </div>
          ))}
        </div>
        <div className="column">
          {secondTenImages.map((image, index) => (
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
                onLoad={() => handleImageLoad(image)}
              />
            </div>
          ))}
        </div>
        <div className="column">
          {thirdTenImages.map((image, index) => (
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
                onLoad={() => handleImageLoad(image)}
              />
            </div>
          ))}
        </div>
      </section>
      <div className={`popup-img ${isModalVisible ? "" : "hidden"}`}>
        <BiXCircle className="close-icon" onClick={closeImage} />
        {imageSelected && (
          <img
            loading="lazy"
            src={imageSelected}
            alt={`img`}
            onClick={closeImage}
          />
        )}
      </div>
    </>
  );
};

export default Galery;
