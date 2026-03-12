import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Fade } from 'react-awesome-reveal';

import './HotelManagementDevelopment.css';

// ** Interfaces
import { Section } from '../../interfaces/HomeManagement';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';

/**
 * A functional component that renders a section of the Hotel Management page.
 * The component renders a section with a background image and a description.
 * The component uses the Fade animation effect from react-awesome-reveal.
 * @param {Section} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const HotelManagementDevelopment = ({ data }: { data: Section }): React.JSX.Element => {

  return (
    <section className="about section">
      <Container>
        <Row className="gy-4">
          <Col
            style={{
              backgroundImage: `url(${data.image.data?.attributes?.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="order-md-2"
            lg={6}></Col>
          <Col className="content services-margin order-md-1 p-justify" lg={6}>
            <Fade direction="up" triggerOnce>
              <h3 className="title-border">
                <b>{data.title}</b>
              </h3>
              <RenderParagraphs data={data.description} />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HotelManagementDevelopment;
