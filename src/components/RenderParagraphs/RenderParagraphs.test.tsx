import React from 'react'
import { render, screen } from '@testing-library/react'
import RenderParagraphs from './RenderParagraphs'

describe('RenderParagraphs Component', () => {

    it('renders all paragraphs with correct content', () => {
        const description = [
            {
                "type": "paragraph",
                "children": [
                    {
                        "text": "En ",
                        "type": "text"
                    },
                    {
                        "bold": true,
                        "text": "Norte 19",
                        "type": "text"
                    },
                    {
                        "text": " ofrecemos soluciones para el desarrollo y gestión de negocios hoteleros con un fuerte compromiso con la productividad y la optimización de recursos. Todas las áreas colaboran y participan en el desarrollo y establecimiento de las marcas hoteleras. Con equipos experimentados y un proceso de gestión integrado, buscamos alcanzar altos niveles de calidad y garantizar el cumplimiento de los requisitos de cada marca que gestionamos.",
                        "type": "text"
                    }
                ]
            }
        ]

        render(<RenderParagraphs data={description} />)

        expect(screen.getByText('Norte 19')).toBeInTheDocument()
    })

    it('renders all paragraphs with correct content type list', () => {
        const description2 = [
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "text": "Compromiso con la excelencia.",
                                "type": "text",
                            },
                            {
                                "text": "Bold text",
                                "type": "text",
                                "bold": true
                            }
                        ]
                    },
                ]
            }
        ]

        render(<RenderParagraphs data={description2} />)

        expect(screen.getByText('Compromiso con la excelencia.')).toBeInTheDocument()
    })

    it('renders all paragraphs with correct content type ordered list', () => {
        const description2 = [
            {
                "type": "list",
                "format": "ordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "text": "Order list item text",
                                "type": "text",
                            }
                        ]
                    },
                ]
            }
        ]

        render(<RenderParagraphs data={description2} />)

        expect(screen.getByText('Order list item text')).toBeInTheDocument()
    })
})