import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HotelManagement from './HotelManagement';
import { HotelManagementMock } from './mocks/HotelManagementMock';

// Mock child components
vi.mock('./components/hotelManagementTitle/HotelManagementTitle', () => ({
  default: () => <div>Mocked HotelManagementTitle</div>
}));
vi.mock('./components/hotelManagementClients/HotelManagementClients', () => ({
  default: () => <div>Mocked HotelManagementClients</div>
}));
vi.mock('./components/hotelManagementOperation/HotelManagementOperation', () => ({
  default: () => <div>Mocked HotelManagementOperation</div>
}));
vi.mock('./components/hotelManagementAbout/HotelManagementAbout', () => ({
  default: () => <div>Mocked HotelManagementAbout</div>
}));
vi.mock('./components/hotelManagementDevelopment/HotelManagementDevelopment', () => ({
  default: () => <div>Mocked HotelManagementDevelopment</div>
}));
vi.mock('./components/hotelManagementTechnology/HotelManagementTechnology', () => ({
  default: () => <div>Mocked HotelManagementTechnology</div>
}));

// Mock useFetchData hook
vi.mock('../../hooks/useFetchData/useFetchData', () => {
  return {
    useFetchData: () => ({
      data: HotelManagementMock,
      loading: true
    })
  };
});

describe('HotelManagement Component', () => {
  test('renders all sections when data is available', () => {
    render(<HotelManagement />);

    // Assert that mocked child components are rendered
    expect(screen.getByText('Mocked HotelManagementTitle')).toBeInTheDocument();
    expect(screen.getByText('Mocked HotelManagementClients')).toBeInTheDocument();
    expect(screen.getByText('Mocked HotelManagementOperation')).toBeInTheDocument();
    expect(screen.getByText('Mocked HotelManagementAbout')).toBeInTheDocument();
    expect(screen.getByText('Mocked HotelManagementDevelopment')).toBeInTheDocument();
    expect(screen.getByText('Mocked HotelManagementTechnology')).toBeInTheDocument();
  });

});
