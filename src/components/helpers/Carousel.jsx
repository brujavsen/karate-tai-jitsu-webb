import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt, BiCircle } from "react-icons/bi";

const CarouselImages = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    // Function Arrows
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="slider">
            <div className="arrowStyle left" onClick={goToPrevious}><BiLeftArrowAlt/></div>
            <div className="arrowStyle right" onClick={goToNext}><BiRightArrowAlt/></div>
            <div style={slideStyles}></div>
            <div className="dotsCnt">
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        className="dotStyle"
                        onClick={()=> goToSlide(slideIndex)}>
                            <BiCircle/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselImages;