import { FC, useState, useEffect, useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

// Types
import { IBrgyOfficials } from "types/home";

// Components
import Carousel from "components/carousel";

// Json
import carouselData from "json/sliders.json";
import brgyOfficialsData from "json/brgy-officials.json";

// Styles
import styles from "./home.module.scss";

const Home: FC = () => {
  const [brgyOfficials, setBrgyOfficials] = useState<Array<any>>([]);
  const isInitialRender = useRef(true);

  const setData = (officials: IBrgyOfficials[]) => {
    const newOfficials = officials?.map((item) => {
      const { name, description, imgUrl, isMale } = item;
      return { name, description, imgUrl, isMale };
    });

    const toNestedAry = (ary: IBrgyOfficials[], size: number) =>
      Array(Math.ceil(ary.length / size))
        .fill("")
        .reduce((acc, _, index) => {
          return [...acc, [...ary].splice(index * size, size)];
        }, []);

    setBrgyOfficials(toNestedAry(newOfficials, 3));
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      setData(brgyOfficialsData.officials);
    }
  }, []);

  return (
    <div className={`${styles.main} pb-5`}>
      <Carousel data={carouselData.carousels} loadingData={false} />
      <Container fluid className="p-5">
        <div className={styles.wrapper}>
          <div className="d-flex justify-content-center py-5">
            <h1 className={`${styles.title} text-center`}>
              BARANGAY OFFICIALS 2024
            </h1>
          </div>
          <div className="d-flex justify-content-around py-2">
            <Row>
              <Col>
                <Image
                  className={styles.person_thumbnail}
                  src={"../src/assets/img/person-male.png"}
                  thumbnail
                />
                <p className={styles.person_name}>Joshua Fabillar</p>
                <p className={styles.person_description}>Barangay Captain</p>
              </Col>
            </Row>
          </div>
          {brgyOfficials.map((nestedArray: IBrgyOfficials[], x: number) => {
            return (
              <div key={x} className="container-fluid text-center py-2">
                <div className="row">
                  {nestedArray.map((official, y: number) => {
                    return (
                      <div key={y} className="col-md-4 py-2">
                        <Image
                          className={styles.person_thumbnail}
                          src={official.imgUrl}
                          thumbnail
                        />
                        <p className={styles.person_name}>{official.name}</p>
                        <p className={styles.person_description}>
                          {official.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Home;
