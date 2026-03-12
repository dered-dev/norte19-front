import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelManagementOperation from './HotelManagementOperation';
import { HotelManagementMock } from '../../mocks/HotelManagementMock';

test('renders learn react link', async () => {
  render(<HotelManagementOperation data={HotelManagementMock.data.attributes.sections[0]} />);
  expect(screen.getByText("Operación")).toBeInTheDocument();
});
