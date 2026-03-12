import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  Spinner,
} from 'reactstrap';
import './Footer.css';
import { useFetchData } from '../../hooks/useFetchData/useFetchData';
import { FooterInterface, FooterSection, Link as LinkInterface } from './interfaces/Footer.interface';
import { Icon } from '../Icon/Icon';
import packageJson from '../../../package.json';
import { AccessInterface } from '../Navbar/interfaces/Access';

/**
 * A functional component that renders the Footer component of the website.
 *
 * The component renders the footer section of the website, including the
 * navigation links, social media icons, and copyright information.
 *
 * @return {React.JSX.Element} The JSX element representing the Footer component.
 */
const Footer = (): React.JSX.Element => {
  const { data, loading } = useFetchData<FooterInterface>('api/footer');
  const [sections, setSections] = useState<FooterSection[]>([]);
  const [footerSection, setFooterSection] = useState<FooterSection | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState('');
  const { data: accessData } = useFetchData<AccessInterface>('api/access');
  const { data: billingData } = useFetchData<AccessInterface>('api/billing');

  useEffect(() => {
    if (!data) return;

    setSections(data.data.attributes.sections);
    setFooterSection(
      data.data.attributes.sections.find(
        (section) => section.title === 'Footer',
      ),
    );
  }, [data]);

  const toggle = (id: string) => {
    setOpen(open === id ? '' : id);
  };
  const linkStyle = { textDecoration: 'none' };

  const checkTypeLink = (link: LinkInterface) => {
    if (link.section_name === 'Access' && accessData) {
      return (
        <li key={link.id}>
          <a href={accessData.data?.attributes?.access_url} style={linkStyle} target="_blank" rel="noreferrer">
            {link.section_name}
          </a>
        </li>
      );
    }
    if ((link.section_name === 'Billing' || link.section_name === 'Facturación') && billingData) {
      return (
        <li key={link.id}>
          <a href={billingData.data?.attributes?.billing_url} style={linkStyle} target="_blank" rel="noreferrer">
            {link.section_name}
          </a>
        </li>
      );
    }

    return (
      <li key={link.id}>
        {/^https?:\/\//.test(link.url) ? (
          <a href={link.url} style={linkStyle} target="_blank" rel="noreferrer">
            {link.section_name}
          </a>
        ) : (
          <Link style={linkStyle} to={link.url}>
            {link.section_name}
          </Link>
        )}
      </li>
    );
  }

  const Sections = (section: FooterSection) => {
    return (
      <ul>
        {section.contact ? (
          <>
            <li>
              <a href={`tel:${section.contact.phone}`} style={linkStyle}>
                {section.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={section.contact.address_link}
                target="_blank"
                rel="noreferrer"
              >
                {section.contact.address}
              </a>
            </li>
          </>
        ) : (
          section.link.map((link) => {
            if (!link.isEnabled) return null;
            return checkTypeLink(link);

          })
        )}
      </ul>
    );
  };

  const MobileAccordion = () => (
    <Accordion
      flush
      open={open}
      toggle={toggle}
      style={{ backgroundColor: 'transparent' }}
    >
      {sections.map(
        (section) =>
          section.title !== 'Footer' && (
            <AccordionItem
              aria-label='footer-accordion'
              style={{ backgroundColor: 'transparent' }}
              key={section.id}
            >
              <AccordionHeader targetId={section.id.toString()}>
                {section.title}
              </AccordionHeader>
              <AccordionBody accordionId={section.id.toString()} color="white">
                {Sections(section)}
              </AccordionBody>
            </AccordionItem>
          ),
      )}
    </Accordion>
  );

  const DesktopContent = () => (
    <Fragment>
      {sections.map(
        (section) =>
          section.title !== 'Footer' && (
            <Col
              lg="2"
              md="6"
              className="footer-links web-element"
              key={section.id}
            >
              <h4>{section.title}</h4>
              {Sections(section)}
            </Col>
          ),
      )}
    </Fragment>
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1140);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer id="footer" className="footer dark-background">
      {data && (
        <>
          <Container className="footer-top">
            <Row className="gy-4">
              {/* Logo y Redes Sociales */}
              <Col lg="5" md="6" className="footer-about">
                <Link
                  style={linkStyle}
                  to="/"
                  className="logo d-flex align-items-center"
                >
                  <img
                    src={data.data?.attributes?.logo?.data?.attributes?.url}
                    alt="logo"
                  />
                </Link>
                <div className="social-links d-flex mt-4">
                  {data.data?.attributes?.social_media?.map((socialMedia) => (
                    <a
                      href={socialMedia.link}
                      target="_blank"
                      rel="noreferrer"
                      key={socialMedia.id}
                    >
                      <Icon iconName="Linkedin" />
                    </a>
                  ))}
                </div>
              </Col>

              {isMobile ? MobileAccordion() : DesktopContent()}
            </Row>
          </Container>
          <Container className="copyright text-center mt-4">
            <Row>
              <Col lg="6" md="6" style={{ textAlign: 'center', display: 'flex' }}>
                <p>{data.data.attributes.copyright}</p>
                <p className='ms-2'>v {packageJson.version}</p>
              </Col>
              <Col lg="6" md="6">
                <div className="credits">
                  {footerSection?.link.map((link) =>
                    link.isEnabled && (
                      <Link style={linkStyle} to={link.url} key={link.id}>
                        {link.section_name}
                      </Link>
                    )
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </>
      )}
      {loading && (
        <div className="container-loading">
          <Spinner className="color-blue" />
        </div>
      )}
    </footer>
  );
};

export default Footer;
