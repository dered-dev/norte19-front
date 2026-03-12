import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TechnologyTitle from './TechnologyTitle';
import { vi } from 'vitest';

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

  const mockData = {
    "id": 8,
    "title": "Tecnología hotelera",
    "description": [
      {
        "type": "paragraph",
        "children": [
          {
            "bold": true,
            "text": "En Norte 19",
            "type": "text"
          },
          {
            "text": " desarrollamos un software hotelero especializado único en la industria, basado en las necesidades operativas para mejorar la gestión y la eficiencia.",
            "type": "text"
          }
        ]
      },
      {
        "type": "paragraph",
        "children": [
          {
            "text": "Con ello nos mantenemos actualizados y mejoramos continuamente para satisfacer las necesidades del negocio y de los clientes.",
            "type": "text"
          }
        ]
      }
    ],
    "background": {
      "data": {
        "id": 254,
        "attributes": {
          "name": "technology_slider.svg",
          "alternativeText": null,
          "caption": null,
          "width": 1921,
          "height": 1081,
          "formats": null,
          "hash": "technology_slider_86ff1a5885",
          "ext": ".svg",
          "mime": "image/svg+xml",
          "size": 248.5,
          "url": "https://s3-cityexpress-landing2-dev-001.s3.us-east-1.amazonaws.com/technology_slider_86ff1a5885.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA4MTWJQRVBXQLSANL%2F20241011%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241011T183235Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLWVhc3QtMSJIMEYCIQDnxTs3srg%2FIaeJbXWtwXhHGDynrePSA28LJEtWEcb0RQIhAPr1d5XtfvJq%2BJC4FCV476yfKe1uMRze9u0gpZq2qZjFKpgECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMODUxNzI1MzU0MDkwIgw%2B7GOSl7a7ZTyPhlcq7APLh%2BjymcaCoD9j%2Bv6XA61Dq9cp3JPV5zfDWRLSiSwDU2TRKf4%2F1fd5741ZiGwzTrKINy4Eb8HEs%2FcqfxMQLCSFtyAZb2q1FkRfoCkkfO7DlKChxwiH0SuIuGF7COyz4jjYoxUqKWD7Afy2z5JGrX%2FJMBaonKyopzjopNGx9GUT6W%2Bd244NPtM6fWTSl%2FRQ3a7G%2BkNitfzioPJY%2BxqMs2qGzLV4AS8QEvvsvdXE86lNZCeAvbcCjWIWNEucApER0NdK4D5qB%2B8iaG7uJsOuxQiS0Z2dJs3vg%2F63PwDyaxOiDKoZ2SNpR6%2Bq98dXC0%2B2Em0BCy%2F7tJ%2FeLdiTunZIuvSw9bCqGrxtHspkq47T9FGqP3ITJeOqmanP2NJwJ%2FZF%2BG8YSgkFvNSv0sFEyrFNZyZjQ1Xp8IIz1i%2FRSY3i0vraeyrde6i0lHHx6kUjb5Pmh12MWA2Sddd%2FYiT6jxjF6dF5b%2F%2FaZZ1rPHcjs7Sg13lhLulu8xYUy85lZPyMTyYQX9I8CYQJGzDdZQOetayLcHJn9VGlxKoraNY1znjumw%2FEvaWnyKktOP7ImtPmL6Hm6yLXR7maGv7Zgp9io5m03UaIbsuVQx%2BAyG8QhBTt%2FqWh4erYcD171MeEjVA3z2wTEgdbosXGZs0UnaUnauAwhICluAY6pQHtiKPMb1TRzM%2FSJm25an2SA%2BCeeGpyhJw5ml7POQ1jm2ZQ88TgZEFkyEIC1NAmTWO2cTUORmegUi8CbKGIPtgAX8tcJgJ8ndxEU4enzbVIKAolhsKGz4wqchf4MXun5IQ5dKJqj6IXyHAROX8oq5BoiC688rqHBwG6TIDkgtKcHBYEoVCNvfGQNWeHDqqkbRLaq3%2BnkqcKPU7GSJu1%2FMSSz9RBfRU%3D&X-Amz-Signature=0a768b0548477113f03d0041b1ae93acbd62167c015c64bc417c7262897cd688&X-Amz-SignedHeaders=host&x-id=GetObject",
          "previewUrl": null,
          "provider": "aws-s3",
          "provider_metadata": null,
          "createdAt": "2024-10-04T12:11:37.713Z",
          "updatedAt": "2024-10-09T13:21:09.036Z",
          "isUrlSigned": true
        }
      }
    }
  }

  const { container } = render(
    <MemoryRouter>
      <TechnologyTitle data={mockData} />
    </MemoryRouter>,
  );
  expect(container.firstChild).toBeTruthy();
});
