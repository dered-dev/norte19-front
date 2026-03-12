// Enum for the routes in the application
export enum AppRoutesEnum {
  HOME = '/',
  HOTEL_MANAGEMENT = '/hotel-management',
  INVESTORS = '/investors',
  RESTAURANTS = '/restaurants',
  TECHNOLOGY = '/technology',
  LEADERSHIP_TEAM = '/leaders',
  CONTACT = '/contact',
  EXPERIENCE = '/experience',
  TERMS_AND_CONDITIONS = '/terms-and-conditions',
  PRIVACY_NOTICE = '/privacy-notice',
}

export interface HeaderSectionInterface {
  id: number,
  isEnabled: boolean,
  section_name: string,
  url: string
}