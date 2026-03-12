import React from 'react';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HotelManagementTitle from './HotelManagementTitle';
import { HotelManagementMock } from '../../mocks/HotelManagementMock';

vi.mock('react-awesome-reveal');

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key === 'home') {
        return 'Inicio';
      }
      return key;
    },
  }),
}));


test('renders learn react link', async () => {
  const { container } = render(
    <MemoryRouter>
      <HotelManagementTitle data={{
        page_description: HotelManagementMock.data.attributes.page_description,
        slider_background: HotelManagementMock.data.attributes.slider_background,
        title: HotelManagementMock.data.attributes.title
      }} />
    </MemoryRouter>,
  );
  expect(container.firstChild).toBeTruthy();
});
