import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelManagementDevelopment from './HotelManagementDevelopment';
import { HotelManagementMock } from '../../mocks/HotelManagementMock';

test('renders learn react link', async () => {
  const title = HotelManagementMock.data.attributes.sections[2]?.title;

  if (title) {
    render(<HotelManagementDevelopment data={HotelManagementMock.data.attributes.sections[2]} />);
    expect(await screen.findByText(title)).toBeInTheDocument();
  }
});
