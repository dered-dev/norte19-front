import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelManagementTechnology from './HotelManagementTechnology';
import { HotelManagementMock } from '../../mocks/HotelManagementMock';

test('renders learn react link', async () => {
  render(<HotelManagementTechnology data={HotelManagementMock.data.attributes.sections[3]} />);
  expect(screen.getByText('Tecnología')).toBeInTheDocument();
});
