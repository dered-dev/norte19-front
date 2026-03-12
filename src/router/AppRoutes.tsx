import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import FallbackSpinner from '../components/FallbackSpinner/FallbackSpinner';
import useHeader from '../hooks/useHeader/useHeader';
import { AppRoutesEnum, HeaderSectionInterface } from './AppRoutes.interface';
import { removeAccents } from '../components/Navbar/Navbar';
import { FooterInterface } from '../components/Footer/interfaces/Footer.interface';
import { useFetchData } from '../hooks/useFetchData/useFetchData';

// Lazy load the components
const Home = lazy(() => import('../pages/home/Home'));
const HotelManagement = lazy(
  () => import('../pages/hotelManagement/HotelManagement'),
);
const Investors = lazy(() => import('../pages/investors/Investors'));
const Restaurants = lazy(() => import('../pages/restaurants/Restaurants'));
const Technology = lazy(() => import('../pages/technology/Technology'));
const Leaders = lazy(() => import('../pages/leaders/Leaders'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const Experience = lazy(() => import('../pages/experience/Experience'));
const TermsAndConditions = lazy(
  () => import('../pages/termsAndConditions/TermsAndConditions'),
);
const PrivacyNotice = lazy(
  () => import('../pages/privacyNotice/PrivacyNotice'),
);

/**
 * Defines the application routes and their corresponding components.
 *
 * @return {JSX.Element} The JSX element representing the application routes.
 */
const AppRoutes = (): React.JSX.Element => {
  const { data, fetchHeaders } = useHeader();
  const { data: dataFooter } = useFetchData<FooterInterface>('api/footer');

  const [enabledRoutes, setEnabledRoutes] = useState<HeaderSectionInterface[] | null>(null);

  const componentsMap: Record<string, React.ComponentType<unknown>> = {
    'home': Home,
    'hotel-management': HotelManagement,
    'investors': Investors,
    'technology': Technology,
    'restaurants': Restaurants,
    'leaders': Leaders,
    'contact': Contact,
    'experience': Experience,
    'terms-and-conditions': TermsAndConditions,
    'privacy-notice': PrivacyNotice,
  };

  useEffect(() => {
    fetchHeaders();
  }, [fetchHeaders]);

  const getEnabledRoutes = () => {
    if (!data || !dataFooter) return;

    const allFooterLinks = dataFooter.data?.attributes?.sections.flatMap((section) => section.link);
    const headerSections = data.data?.attributes?.header_sections || []
    const combinedArray = [...headerSections, ...allFooterLinks];

    const filterEnabledRoutes = combinedArray
      .filter((header: { isEnabled: boolean }) => header.isEnabled)
      .map((header: { id: number, isEnabled: boolean, section_name: string, url?: string }) => ({
        id: header.id,
        isEnabled: header.isEnabled,
        section_name: header.section_name,
        url: header.url || '',
      }));

    setEnabledRoutes(filterEnabledRoutes);
  };


  useEffect(() => {
    getEnabledRoutes()
  }, [data, dataFooter]);

  return (
    <Suspense fallback={<FallbackSpinner />}>
      {enabledRoutes ? (
        <Routes>
          {enabledRoutes.map((header) => {
            const sectionName = removeAccents(header.url);
            const Component = componentsMap[sectionName];

            if (!Component) return null;

            return (
              <Route
                key={header.id}
                path={header.url}
                element={<Component />}
              />
            );
          })}
          <Route
            path={`${AppRoutesEnum.INVESTORS}/:activeTab`}
            element={<Investors />}
          />
          <Route path="*" element={<Navigate to={enabledRoutes[0].url} replace />} />
        </Routes>
      ) : (
        <FallbackSpinner />
      )}
    </Suspense>
  );

};

export default AppRoutes;
