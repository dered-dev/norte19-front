import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelManagementAbout from './HotelManagementAbout';
import { HotelManagementMock } from '../../mocks/HotelManagementMock';

test('renders learn react link', async () => {
  render(
    <HotelManagementAbout data={HotelManagementMock.data.attributes.sections[1]} />
  );
  expect(screen.getByText(/Anualmente/i)).toBeInTheDocument();
});
