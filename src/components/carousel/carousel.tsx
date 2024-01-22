import { Carousel } from "react-bootstrap";
import { useCallback, useState } from "react";

// Assets
import SliderMary from "assets/img/gradient-bloody-mary.jpg";
import SliderCelestial from "assets/img/gradient-celestial.jpg";
import SliderConstance from "assets/img/gradient-constance.jpg";

// Components
import MultiSkeletonLoader from "components/multi-skeleton-loader/multi-skeleton-loader";

// Types
import { ICarouselComponentProp } from "types/carousel";

// Styles
import styles from "./carousel.module.scss";

const CarouselComponent = ({ data, loadingData }: ICarouselComponentProp) => {
  const [index, setIndex] = useState<number>(0);
  const sliderBackgrounds = [SliderMary, SliderCelestial, SliderConstance];

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex === data.length ? 0 : selectedIndex);
  };

  const indicators = useCallback(() => {
    return (
      <div className={styles.customIndicators}>
        {data.map((_, key) => (
          <li
            key={key}
            className={key === index ? `${styles.active}` : ""}
            onClick={() => handleSelect(key)}
          />
        ))}
      </div>
    );
  }, [index]);

  // Loader
  if (loadingData) {
    return (
      <Carousel
        className={styles.carousel}
        indicators={false}
        nextIcon={null}
        prevIcon={null}
      >
        <Carousel.Item>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src={sliderBackgrounds[0]}
            alt="slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <MultiSkeletonLoader count={2} height={25} width={40} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <Carousel
      className={styles.carousel}
      indicators={false}
      nextIcon={null}
      prevIcon={null}
      activeIndex={index}
      onSelect={handleSelect}
      interval={2000}
      data-testid="carousel"
    >
      {data.map((value, index) => (
        <Carousel.Item key={index}>
          <img
            className={`d-block w-100 ${styles.carouselImage}`}
            src={sliderBackgrounds[index]}
            alt="slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <div className={styles.carouselTitle} data-testid="carousel-title">
              {value.title}
            </div>
            <p className={styles.carouselDetail}>{value.detail}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      {indicators()}
    </Carousel>
  );
};

export default CarouselComponent;
