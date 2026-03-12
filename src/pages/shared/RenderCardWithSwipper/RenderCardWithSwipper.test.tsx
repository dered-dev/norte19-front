import React from 'react';
import { render, screen } from '@testing-library/react';
import RenderCardWithSwipper from './RenderCardWithSwipper';
import { vi } from 'vitest';

// Mock the renderContent function
const mockRenderContent = vi.fn((card) => <div>{card.title}</div>);

describe('RenderCardWithSwipper', () => {
    it('should return null if swipper is false and index is 0', () => {
        const { container } = render(
            <RenderCardWithSwipper
                card={{ title: 'Test Card' }}
                index={0}
                swipper={false}
                iconName='icon-operation'
                renderContent={mockRenderContent}
            />
        );

        expect(container.firstChild).toBeNull();
    });

    it('should render content when swipper is false and index is greater than 0', () => {
        render(
            <RenderCardWithSwipper
                card={{ title: 'Test Card' }}
                index={1}
                swipper={false}
                iconName='icon-operation'
                renderContent={mockRenderContent}
            />
        );

        expect(screen.getByText('Test Card')).toBeInTheDocument();
    });

    it('should render content when swipper is true', () => {
        render(
            <RenderCardWithSwipper
                card={{ title: 'Test Card' }}
                index={0}
                swipper={true}
                iconName='icon-operation'
                renderContent={mockRenderContent}
            />
        );

        expect(screen.getByText('Test Card')).toBeInTheDocument();
    });
});
