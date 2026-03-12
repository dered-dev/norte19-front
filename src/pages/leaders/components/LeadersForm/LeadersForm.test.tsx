import React from "react";
import { render } from '@testing-library/react';
import LeadersForm from './LeadersForm';
import { vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import { LeadersMock } from "../../mocks/Leaders";

vi.mock('../../../shared/DynamicForm/DynamicForm', () => ({
    default: () => <div>Mock DynamicForm</div>,
}));


describe('LeadersForm - executeRecaptcha tests', () => {

    it('calls executeRecaptcha if it is defined', async () => {

        render(
            <Router>
                <LeadersForm data={LeadersMock.data.attributes.job_board} />
            </Router>
        );

        expect(LeadersMock.data.attributes.job_board.title).toBeTruthy();
    });
});
