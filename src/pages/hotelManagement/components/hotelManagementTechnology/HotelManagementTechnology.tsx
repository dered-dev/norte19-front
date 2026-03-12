import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './HotelManagementTechnology.css';
import { Fade } from 'react-awesome-reveal';

// ** Interfaces
import { Section } from '../../interfaces/HomeManagement';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';

const HotelManagementTechnology = ({ data }: { data: Section }) => {
  return (
    <section className="about section">
      <Container>
        <Row className="gy-4">
          <Col lg={6}>
            <div
              className="back-technology"
              style={{ backgroundImage: `url(${data.image.data?.attributes?.url})` }}>

            </div>
          </Col>

          <Col className="content gestion-margin order-md-1 p-justify" lg={6}>
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

export default HotelManagementTechnology;
