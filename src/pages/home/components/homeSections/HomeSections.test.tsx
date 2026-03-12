import React from "react";
import { render, screen } from '@testing-library/react'
import HomeSections from './HomeSections'
import { HomeMock } from "../../mocks/HomeMock";

describe('HomeSections Component', () => {

    it('renders HomeProjects when section has no image', () => {
        render(<HomeSections data={HomeMock.data.attributes.Our_services} />)
        expect(screen.getByLabelText('sections-home')).toBeInTheDocument()
    })

})
