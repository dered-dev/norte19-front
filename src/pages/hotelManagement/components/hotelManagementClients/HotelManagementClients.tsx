import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from 'react-awesome-reveal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './HotelManagementClients.css';

// ** Interfaces
import { Sectionwithslider } from '../../interfaces/HomeManagement';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';

/**
 * A React functional component that renders a section of the Hotel Management page.
 * The component renders a section with a title, a description and a slider of logos.
 * The component uses the Fade component from react-awesome-reveal to animate the title and the description.
 * The component uses the Swiper component to render the slider of logos.
 * @param {Sectionwithslider} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const HotelManagementClients = ({ data }: { data: Sectionwithslider }) => {


  return (
    <section className="about section light-background">
      <Container>
        <Row className="gy-4">
          <Col className="content services-margin p-justify text-center aos-init aos-animate">
            <Fade direction="up" triggerOnce>
              <h3>{data.title}</h3>
              <RenderParagraphs data={data.description} />
            </Fade>
          </Col>
        </Row>

        <div className="mt-60">

          <div className="container">
            <Fade direction="up" triggerOnce>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={{ delay: 4000 }}
                className="text-center"
                wrapperClass="align-items-center"

              >
                {data.slider.data.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="img-fluid"
                      src={image.attributes.url}
                      alt={`client-${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Fade>
          </div>

        </div>
      </Container>

    </section>
  );
};

export default HotelManagementClients;
