import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Col, Container, Row } from 'reactstrap';

// ** Interfaces
import { Header } from '../../interfaces/Technology';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';
import BreadCrumbHeader from '../../../shared/BreadCrumbHeader/BreadCrumbHeader';


/**
 * A functional component that renders the title section of the Technology page.
 * The component renders a section with a background image, a breadcrumb, and a heading with a paragraph of text.
 * The component uses the Zoom animation effect from react-awesome-reveal.
 * @param {Header} data - The data for the title section.
 * @returns {React.JSX.Element} The JSX element representing the title section.
 */
const TechnologyTitle = ({ data }: { data: Header }): React.JSX.Element => {

  return (
    <>
      <div
        className="page-title dark-background responsive-margin"
        style={{
          backgroundImage: `url(${data.background?.data?.attributes?.url})`,
        }}
      >
        <BreadCrumbHeader url="technology" />

        <div className="call-to-action banner-page">
          <Container>
            <Row>
              <Col lg={6} className="align-content-center">
                <Zoom triggerOnce>
                  <div className="p-left">
                    <h2>{data.title}</h2>
                  </div>
                </Zoom>
              </Col>
              <Col lg={6}>
                <Zoom triggerOnce>
                  <div className="p-left mt-30">
                    <RenderParagraphs data={data.description} />
                  </div>
                </Zoom>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default TechnologyTitle;
