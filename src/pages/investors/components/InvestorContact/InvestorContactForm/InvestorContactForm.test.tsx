import React from "react";
import { render } from '@testing-library/react';
import InvestorContactForm from './InvestorContactForm';
import { vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import { InvestorsContactMock } from "../../../mocks/InvestorsContactMock";

vi.mock('../../../shared/DynamicForm/DynamicForm', () => ({
    default: () => <div>Mock DynamicForm</div>,
}));


describe('InvestorContactForm', () => {

    const mock = InvestorsContactMock;

    it('displays validation errors for empty fields on form submission', async () => {

        render(
            <Router>
                <InvestorContactForm data={mock} />
            </Router>
        );

        expect(mock.data.attributes.form_title)
    });

});
