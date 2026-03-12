import React from "react";
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RenderParagraphsPolicy from "./RenderParagraphsPolicy";
import { Policy } from '../../pages/shared/ContentPolitics/interfaces/PrivacyNotice';

describe('RenderParagraphs', () => {
    const policies: Policy[] = [
        {
            type: 'Policy 1',
            level: 1,
            children: [
                {
                    text: 'Heading 1',
                    type: 'text',
                    bold: true,
                },
                {
                    text: 'Link Text',
                    type: 'link',
                    url: 'https://example.com',
                },
            ],
        },
        {
            type: 'Policy 2',
            children: [
                {
                    text: 'Paragraph text',
                    type: 'text',
                    children: [
                        {
                            text: 'Nested Child Text 1',
                            type: 'text',
                        }
                    ],
                },
            ],
        },
    ];

    it('renders a heading tag when level is present', () => {
        render(<RenderParagraphsPolicy data={policies} />);

        // Check if the h1 tag is rendered with the correct text
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('Heading 1');
    });

    it('renders bold text inside the heading', () => {
        render(<RenderParagraphsPolicy data={policies} />);

        // Check if bold text is rendered inside the heading
        const boldText = screen.getByRole('heading', { level: 1 }).querySelector('b');
        expect(boldText).toBeInTheDocument();
        expect(boldText).toHaveTextContent('Heading 1');
    });

});
