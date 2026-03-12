import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import emailLogo from '/assets/images/icons/icon__email.svg'

// ** Styles
import './Navbar.css';

// ** Icons
import { Icon } from '../Icon/Icon';

import useHeader from '../../hooks/useHeader/useHeader';
import { AppRoutesEnum } from '../../router/AppRoutes.interface';
import { HeaderSection } from '../../hooks/useHeader/useHeader.interface';
import {
  HeaderSectionEnglishEnum,
  HeaderSectionSpanishEnum,
} from '../../hooks/useHeader/useHeader.enum';

// ** Components
import ChangeLanguage from './ChangeLanguage/ChangeLanguage';

// ** Hooks
import { useFetchData } from '../../hooks/useFetchData/useFetchData';
import { AccessInterface } from './interfaces/Access';

export const removeAccents = (str = '') => {
  return str
    .normalize('NFD') // Normalize the string to decompose combined characters
    .replace(/[\u0300-\u036f]/g, ''); // Remove the accents
};

/**
 * A functional component that renders the navigation bar.
 *
 * @return {React.JSX.Element} The JSX element representing the navigation bar.
 */
function Navbar(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logo, setLogo] = useState('');
  const [routes, setRoutes] = useState<HeaderSection[]>([]);
  const { data, fetchHeaders } = useHeader();
  const location = useLocation();
  const { data: accessData } = useFetchData<AccessInterface>('api/access');

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    fetchHeaders();
  }, [fetchHeaders]);

  useEffect(() => {
    if (!data) return;
    // for dev 
    setLogo('/assets/images/header/logo__norte19.svg');
    // setLogo(data.data.attributes?.header_logo.data?.attributes?.url);
    setRoutes(data.data.attributes.header_sections);
  }, [data]);

  // Filter routes based on `isEnabled`
  const enabledRoutes = routes.filter((route) => route.isEnabled);

  // Helper to find specific routes
  const findRoute = (englishKey: string, spanishKey: string) =>
    enabledRoutes.find(
      (route) =>
        route.section_name === englishKey ||
        removeAccents(route.section_name) === spanishKey
    );

  // Define individual routes
  const homeRoute = findRoute(
    HeaderSectionEnglishEnum.HOME,
    HeaderSectionSpanishEnum.HOME
  );
  const hotelManagementRoute = findRoute(
    HeaderSectionEnglishEnum.HOTEL_MANAGEMENT,
    HeaderSectionSpanishEnum.HOTEL_MANAGEMENT
  );
  const investorsRoute = findRoute(
    HeaderSectionEnglishEnum.INVESTORS,
    HeaderSectionSpanishEnum.INVESTORS
  );
  const technologyRoute = findRoute(
    HeaderSectionEnglishEnum.TECHNOLOGY,
    HeaderSectionSpanishEnum.TECHNOLOGY
  );
  const restaurantsRoute = findRoute(
    HeaderSectionEnglishEnum.RESTAURANTS,
    HeaderSectionSpanishEnum.RESTAURANTS
  );
  const accessRoute = findRoute(
    HeaderSectionEnglishEnum.ACCESS,
    HeaderSectionSpanishEnum.ACCESS
  );
  const leadersRoute = findRoute(
    HeaderSectionEnglishEnum.LEADERSHIP_TEAM,
    HeaderSectionSpanishEnum.LEADERSHIP_TEAM
  );
  const contactRoute = findRoute(
    HeaderSectionEnglishEnum.CONTACT,
    HeaderSectionSpanishEnum.CONTACT
  );
  const experienceRoute = findRoute(
    HeaderSectionEnglishEnum.EXPERIENCE,
    HeaderSectionSpanishEnum.EXPERIENCE
  );

  return (
    <div className="index-page">
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div
          className={classnames(
            'container-fluid container-xl position-relative d-flex align-items-center menu-header',
            { 'mobile-nav-active': isMenuOpen }
          )}
        >
          {logo && (
            <Link
              to={homeRoute ? AppRoutesEnum.HOME : '#'}
              className="logo d-flex align-items-center"
            >
              <img src={logo} alt="logo" />
            </Link>
          )}

          <nav id="navmenu" className="navmenu">
            <ul>
              {experienceRoute && (
                <li>
                  <Link
                    to={AppRoutesEnum.EXPERIENCE}
                    className={classnames({
                      active: location.pathname === `/${experienceRoute.url}`,
                    })}
                  >
                    {experienceRoute.section_name}
                  </Link>
                </li>
              )}
              {hotelManagementRoute && (
                <li>
                  <Link
                    to={AppRoutesEnum.HOTEL_MANAGEMENT}
                    className={classnames({
                      active:
                        location.pathname === `/${hotelManagementRoute.url}`,
                    })}
                  >
                    {hotelManagementRoute.section_name}
                  </Link>
                </li>
              )}
              {investorsRoute && (
                <li>
                  <Link
                    to={AppRoutesEnum.INVESTORS}
                    className={classnames({
                      active: location.pathname === `/${investorsRoute.url}`,
                    })}
                  >
                    {investorsRoute.section_name}
                  </Link>
                </li>
              )}
              {technologyRoute && (
                <li>
                  <Link
                    to={AppRoutesEnum.TECHNOLOGY}
                    className={classnames({
                      active: location.pathname === `/${technologyRoute.url}`,
                    })}
                  >
                    {technologyRoute.section_name}
                  </Link>
                </li>
              )}
              {restaurantsRoute && (
                <li>
                  <Link
                    to={AppRoutesEnum.RESTAURANTS}
                    className={classnames({
                      active: location.pathname === `/${restaurantsRoute.url}`,
                    })}
                  >
                    {restaurantsRoute.section_name}
                  </Link>
                </li>
              )}
              {accessRoute && accessData?.data?.attributes?.access_url && (
                <li>
                  <a
                    href={accessData?.data.attributes.access_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {accessRoute.section_name}
                  </a>
                </li>
              )}
              {leadersRoute && (
                <li>
                  <Link
                    to={AppRoutesEnum.LEADERSHIP_TEAM}
                    className={classnames({
                      active: location.pathname === `/${leadersRoute.url}`,
                    })}
                  >
                    {leadersRoute.section_name}
                  </Link>
                </li>
              )}
              {contactRoute && (
                <>
                  <li className="d-xl-none">
                    <Link
                      className="text-decoration-none"
                      to={AppRoutesEnum.CONTACT}
                    >
                      {contactRoute.section_name}
                    </Link>
                  </li>
                  <Link
                    className="btn-getstarted d-flex align-items-center gap-2 px-3 btn-contact text-decoration-none d-none d-xl-flex"
                    to={AppRoutesEnum.CONTACT}
                  >
                    {/* <Icon iconName="EnvelopeFill" fill="currentColor" />  */}
                    <img src={emailLogo} alt="Email Icon" width={20} height={20} />
                    {contactRoute.section_name}
                  </Link>
                </>
              )}

              <ChangeLanguage />
            </ul>
            <div
              className="mobile-nav-toggle d-xl-none"
              aria-label="open-menu"
              id="open-menu"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? <Icon iconName="List" /> : <Icon iconName="XLg" />}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
