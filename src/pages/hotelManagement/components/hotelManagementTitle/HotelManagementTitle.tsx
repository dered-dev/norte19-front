import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Col, Container, Row } from 'reactstrap';

// ** Interfaces
import { Pagedescription, Sliderbackground } from '../../interfaces/HomeManagement';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';
import BreadCrumbHeader from '../../../shared/BreadCrumbHeader/BreadCrumbHeader';

interface HomeManagementTitleInterface {
  page_description: Pagedescription[];
  slider_background: Sliderbackground;
  title: string;
}

/**
 * A functional component that renders the title section of the Hotel Management page.
 * 
 * The component renders a background image, a breadcrumb, and a heading with a paragraph of text.
 * The component also renders a call-to-action with a heading and a paragraph of text that is centered on the page.
 * The component uses the Zoom animation effect from react-awesome-reveal.
 * @param {HomeManagementTitleInterface} data - The data for the title section.
 * @returns {React.JSX.Element} The JSX element representing the title section.
 */
const HotelManagementTitle = ({ data }: { data: HomeManagementTitleInterface }): React.JSX.Element => {


  return (
    <div
      className="page-title dark-background responsive-margin"
      data-aos="fade"
      style={{
        backgroundImage: `url(${data.slider_background?.data?.attributes?.url})`,
      }}
    >
      <BreadCrumbHeader url="hotel-management" />

      <div className="call-to-action banner-page">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center" xl={8}>
              <Zoom triggerOnce>
                <h2>{data.title}</h2>
                <div className="mt-30">
                  <RenderParagraphs data={data.page_description} />
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HotelManagementTitle;
