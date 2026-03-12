import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelManagementClients from './HotelManagementClients';
import { HotelManagementMock } from '../../mocks/HotelManagementMock';


test('renders learn react link', async () => {
  render(<HotelManagementClients data={HotelManagementMock.data.attributes.section_with_slider} />);
  expect(screen.getByText("Convertimos ideas en experiencias inolvidables")).toBeInTheDocument();
});
