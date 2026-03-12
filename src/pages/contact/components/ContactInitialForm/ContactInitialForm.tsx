import React from 'react';
import { Col, Row } from 'reactstrap';

// ** Interfaces
import { Page } from '../../interfaces/Contact';

// ** Components
import RenderParagraphs from '../../../../components/RenderParagraphs/RenderParagraphs';
import DynamicForm from '../../../shared/DynamicForm/DynamicForm';


const ContactInitialForm = ({ contact }: { contact: Page }): React.JSX.Element => {
  let requiredFields: string[];

  switch (contact.form?.button?.url) {
    case '/jobs-apply-forms':
      requiredFields = ['name', 'email', 'cv', 'message'];
      break;
    case '/lodging-agreement-forms':
      requiredFields = ['name', 'email', 'message', 'agreement'];
      break;
    default:
      requiredFields = ['name', 'email', 'message'];
      break;
  }

  return (
    <>
      <Row>
        <Col lg="12">
          <Row>
            <Col lg="7" className="content services-margin mb-4 mt-4 contact__content">
              <h2 className="contact__content__title">
                <b>{contact.title}</b>
              </h2>
              <div className="contact__content__description">
                <RenderParagraphs data={contact.description} />
              </div>
            </Col>
            {
              contact.form && (
                <Col lg="5" className="content back-form">
                  <DynamicForm
                    data={contact.form}
                    requiredFields={requiredFields}
                    page="contact" />
                </Col>
              )
            }

          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ContactInitialForm;
