import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'reactstrap';

// ** Interfaces
import { Section } from '../../interfaces/HomeManagement';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';

/**
 * A functional component that renders a section of the Hotel Management page.
 * The component renders a section with a title, a subtitle, and a description.
 * The component uses the Fade component from react-awesome-reveal to animate
 * the title, the subtitle, and the description.
 * The component uses the RenderParagraphs component to render the description.
 * @param {Section} data - The data for the section.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const HotelManagementOperation = ({ data }: { data: Section }): React.JSX.Element => {
  return (
    <section className="about section responsive-margin">
      <Container>
        <Row className="gy-4">
          <Col className="content" lg={12}>
            <Fade direction="up" triggerOnce>
              <div className='text-center'>
                <h3>
                  {data?.title}
                </h3>
                <h5 className="mt-30">
                  <b>{data?.subtitle}</b>
                </h5>
              </div>

              <div className="mt-30 mb-30">
                <RenderParagraphs data={data?.description} />
              </div>

            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HotelManagementOperation;
