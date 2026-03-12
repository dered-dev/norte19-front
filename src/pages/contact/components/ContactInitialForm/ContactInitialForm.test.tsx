import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactInitialForm from './ContactInitialForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContactMock } from '../../mocks/ContactMock';
import { vi } from 'vitest';

vi.mock('../../../shared/DynamicForm/DynamicForm', () => ({
  default: () => <div>Mock DynamicForm</div>,
}));

describe('ContactInitialForm Component', () => {
  const mock = ContactMock.data?.attributes?.pages;

  it('renders without crashing with the correct title', () => {

    render(
      <Router><ContactInitialForm contact={mock[2]} /></Router>
    );
    expect(screen.getByText(mock[2].title)).toBeInTheDocument();

  });


  it('renders without crashing', () => {

    render(
      <Router><ContactInitialForm contact={mock[0]} /></Router>
    );
    expect(screen.getByText(mock[0].title)).toBeInTheDocument();
  });

  it('render with case 1', () => {
    render(
      <Router><ContactInitialForm contact={mock[1]} /></Router>
    );
    expect(screen.getByText(mock[1].title)).toBeInTheDocument();

  });
});
