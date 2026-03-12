import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'reactstrap';

// ** Interfaces
import { Section } from '../../interfaces/HomeManagement';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';

/**
 * A functional component that renders an About Us section of the Hotel Management page.
 * The section renders an image and a description.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the image and the description.
 * @param {Section} data - The data for the About Us section.
 * @returns {React.JSX.Element} The JSX element representing the About Us section.
 */
const HotelManagementAbout = ({ data }: { data: Section }): React.JSX.Element => {
  return (
    <section className="about light-background-tab nopadding">
      <Container fluid>
        <Row className="gy-4">
          <Col className="nomargin" lg={6}>
            <Fade direction="up" triggerOnce>
              <img
                src={data.image?.data?.attributes?.url}
                className="img-fluid"
                alt="operación"
              />
            </Fade>
          </Col>
          <Col className="content margin-section p-justify mb-30" lg={6}>
            <Fade direction="up" triggerOnce>
              <RenderParagraphs data={data.description} />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HotelManagementAbout;
