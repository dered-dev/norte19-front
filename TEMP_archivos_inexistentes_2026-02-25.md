# Reporte temporal: archivos referenciados que no existen

Fecha: 2026-02-25
Alcance: escaneo estático de imports relativos en `src/**/*.{ts,tsx,js,jsx}`
Imports relativos revisados: 382
Referencias faltantes detectadas: 33

## Lista de referencias faltantes

1. `src/pages/experience/components/ExperienceProjects/ExperienceProjects.tsx` -> `./ExperienceProjectModal/ExperienceProjectModal`
2. `src/pages/experience/components/ExperienceHeader/ExperienceHeader.tsx` -> `../ExperienceSuccessStories/ExperienceSuccessStories`
3. `src/pages/hotelManagement/HotelManagement.tsx` -> `./components/hotelManagementTitle/HotelManagementTitle`
4. `src/pages/hotelManagement/HotelManagement.tsx` -> `./components/hotelManagementClients/HotelManagementClients`
5. `src/pages/hotelManagement/HotelManagement.tsx` -> `./components/hotelManagementOperation/HotelManagementOperation`
6. `src/pages/hotelManagement/HotelManagement.tsx` -> `./components/hotelManagementAbout/HotelManagementAbout`
7. `src/pages/hotelManagement/HotelManagement.tsx` -> `./components/hotelManagementDevelopment/HotelManagementDevelopment`
8. `src/pages/hotelManagement/HotelManagement.tsx` -> `./components/hotelManagementTechnology/HotelManagementTechnology`
9. `src/pages/restaurants/components/RestaurantTabs/RestaurantTabs.tsx` -> `./RestaurantTabContent/RestaurantTabContent`
10. `src/pages/leaders/components/LeadersBoardSections/LeadersBoardSections.tsx` -> `./LeadersCulture/LeadersCulture`
11. `src/pages/leaders/components/LeadersBoardSections/LeadersBoardSections.tsx` -> `./LeadersMaxims/LeadersMaxims`
12. `src/pages/leaders/components/LeadersBoardSections/LeadersBoardSections.tsx` -> `./LeadersMission/LeadersMission`
13. `src/pages/investors/components/InvestorUs/InvestorUs.tsx` -> `./InvestorUsHistory/InvestorUsHistory`
14. `src/pages/investors/components/InvestorUs/InvestorUs.tsx` -> `./InvestorUsKnowMore/InvestorUsKnowMore`
15. `src/pages/investors/components/InvestorUs/InvestorUs.tsx` -> `./InvestorUsSections/InvestorUsSections`
16. `src/pages/investors/components/InvestorESG/InvestorESG.tsx` -> `./InvestorESGCodeEthics/InvestorESGCodeEthics`
17. `src/pages/investors/components/InvestorESG/InvestorESG.tsx` -> `./InvestorESGCorporate/InvestorESGCorporate`
18. `src/pages/investors/components/InvestorESG/InvestorESG.tsx` -> `./InvestorESGSustainability/InvestorESGSustainability`
19. `src/pages/investors/components/InvestorHome/InvestorHome.tsx` -> `./InvestorHomeNumbers/InvestorHomeNumbers`
20. `src/pages/investors/components/InvestorHome/InvestorHome.tsx` -> `./InvestorHomeMoreInfo/InvestorHomeMoreInfo`
21. `src/pages/investors/components/InvestorHome/InvestorHome.tsx` -> `./InvestorHomeSections/InvestorHomeSections`
22. `src/pages/investors/components/InvestorFinancial/InvestorFinancial.tsx` -> `./InvestorFinancialReports/InvestorFinancialReports`
23. `src/pages/investors/components/InvestorFinancial/InvestorFinancial.tsx` -> `./InvestorFinancialPresentation/InvestorFinancialPresentation`
24. `src/pages/investors/components/InvestorFinancial/InvestorFinancial.tsx` -> `./InvestorFinancialProspect/InvestorFinancialProspect`
25. `src/pages/investors/components/InvestorFinancial/InvestorFinancial.tsx` -> `./InvestorFinancialFstay/InvestorFinancialFstay`
26. `src/pages/investors/components/InvestorHeader/InvestorHeader.tsx` -> `../InvestorHome/InvestorHomeHeader/InvestorHomeHeader`
27. `src/pages/investors/components/InvestorHeader/InvestorHeader.tsx` -> `../InvestorUs/InvestorUsHeader/InvestorUsHeader`
28. `src/pages/investors/components/InvestorBursatil/InvestorBursatil.tsx` -> `./InvestorBursatilCoverage/InvestorBursatilCoverage`
29. `src/pages/investors/components/InvestorBursatil/InvestorBursatil.tsx` -> `./InvestorBursatilAction/InvestorBursatilAction`
30. `src/pages/investors/components/InvestorBursatil/InvestorBursatil.tsx` -> `./InvestorBursatilConversion/InvestorBursatilConversion`
31. `src/pages/investors/components/InvestorBursatil/InvestorBursatil.tsx` -> `./InvestorBursatilEvents/InvestorBursatilEvents`
32. `src/pages/investors/components/InvestorBursatil/InvestorBursatil.tsx` -> `./InvestorBursatilNextEvents/InvestorBursatilNextEvents`
33. `src/pages/investors/components/InvestorContact/InvestorContact.tsx` -> `./InvestorContactForm/InvestorContactForm`

## Nota
- Este reporte valida existencia física de archivos para imports relativos.
- No incluye resolución de paquetes externos (`node_modules`) porque no aplican como “archivos faltantes del repo”.
