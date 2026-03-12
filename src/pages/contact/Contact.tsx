import React, { useState } from 'react';
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Spinner
} from 'reactstrap';
import classNames from 'classnames';

// ** Styles
import './Contact.css';

// ** Components
import BreadCrumbHeader from '../shared/BreadCrumbHeader/BreadCrumbHeader';
import ContactInitialForm from './components/ContactInitialForm/ContactInitialForm';
import NotFoundData from '../shared/NotFoundData/NotFoundData';

// ** Hooks
import { useFetchData } from '../../hooks/useFetchData/useFetchData';

// ** Interfaces
import { ContactInterface } from './interfaces/Contact';

// ** Google reCAPTCHA
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const Contact = (): React.JSX.Element => {

  const { data, loading } = useFetchData<ContactInterface>('api/contact');

  const [activeTab, setActiveTab] = useState<string>('0');

  /**
   * Toggles the active tab state.
   *
   * @param {string} tab - The tab id to toggle
   *
   */
  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <NotFoundData data={data} loading={loading} />

      {
        loading && (
          <div className='container-loading'>
            <Spinner className='color-blue' />
          </div>
        )
      }
      <>
        {
          data && (
            <div
              className="dark-background responsive-margin contact-tabs-bg pb-100"
              data-aos="fade"
              style={{
                backgroundImage: `url(${data.data?.attributes?.banner?.data?.attributes?.url})`,
              }}
            >
              <Container className="position-relative pt-140">
                {/* <BreadCrumbHeader url="contact" /> */}

                <div className="about">
                  <Row>
                    <Col lg={12} className="mt-30">
                      <Nav className="mb-5" tabs>
                        {data.data?.attributes?.pages.map((contact, index) => (
                          <NavItem key={index}>
                            <NavLink
                              className={classNames("cursor-pointer link__tabs__contact", {
                                active: activeTab === index.toString(),
                              })}
                              aria-label='tab-contact'
                              onClick={() => toggle(index.toString())}
                              key={index}
                            >
                              {contact.tab}
                            </NavLink>
                          </NavItem>
                        ))}
                      </Nav>
                      <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_API_KEY_CAPTCHA}>
                        <TabContent activeTab={activeTab}>
                          {data.data?.attributes?.pages.map((contact, index) => (
                            <TabPane key={index} tabId={index.toString()}>
                              <ContactInitialForm contact={contact} />
                            </TabPane>
                          ))}
                        </TabContent>
                      </GoogleReCaptchaProvider>
                      
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
          )
        }

      </>

    </>
  );
}

export default Contact;
