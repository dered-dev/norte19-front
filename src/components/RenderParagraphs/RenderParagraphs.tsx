import React from 'react';

// ** Interfaces
import { Child } from '../../pages/home/interfaces/Home';
import { Child2 } from '../../pages/leaders/interfaces/Leaders';

// ** Custom components
import { Icon } from '../Icon/Icon';

/**
 * A recursive function that renders a single child. If the child has nested
 * children, it will recursively render them.
 * @param child The child to render.
 * @param isOrdered A flag indicating if the list is ordered.
 * @returns {React.JSX.Element} The rendered child element.
 */
const renderChild = (child: Child | Child2, idx: number, isOrdered: boolean): React.JSX.Element => {
    // Check if it's Child2 with nested children
    if ('children' in child && Array.isArray(child.children)) {
        return (
            <div className="nested-child" key={idx}> {/* Use a div for spacing */}
                {!isOrdered && (
                    <Icon iconName="Check2" size={20} className="color-blue me-1" />
                )}
                {child.children.map((nestedChild, nestedIdx) => (
                    nestedChild?.bold ? (
                        <b key={nestedIdx}>{nestedChild.text}</b>
                    ) : (
                        <span key={nestedIdx}>{nestedChild.text}</span>
                    )
                ))}
            </div>
        );
    }

    // Render either bold text or normal text
    return child.bold ? <b key={idx}>{child.text}</b> : <span key={idx}>{child.text}</span>;
};

/**
 * A function that renders a list of paragraphs based on the provided description
 * array.
 * The function maps over the description array and renders a paragraph with
 * its children for each paragraph.
 * The function uses the div component to wrap the rendered
 * paragraphs.
 * @returns {React.JSX.Element[]} An array of JSX elements representing the
 * paragraphs.
 */
const RenderParagraphs = <T extends { children: Child[] | Child2[], format?: string, type?: string }>({ data }: { data: T[] }): React.JSX.Element[] => {
    return data.map((paragraph, index) => {
        const isOrdered = paragraph.format === 'ordered' && paragraph.type === 'list';

        return (
            <div key={index}>
                {isOrdered ? (
                    <ol>
                        {paragraph.children.map((child, idx) => (
                            <li key={idx}>{renderChild(child, idx, isOrdered)}</li>
                        ))}
                    </ol>
                ) : (
                    <div> {/* Changed from <p> to <div> */}
                        {paragraph.children.map((child, idx) => renderChild(child, idx, isOrdered))}
                    </div>
                )}
            </div>
        );
    });
};

export default RenderParagraphs;
