import React from 'react';

// ** Interfaces
import { Child2, Policy } from '../../pages/shared/ContentPolitics/interfaces/PrivacyNotice';

/**
 * A recursive function that renders a single child. If the child has nested
 * children, it will recursively render them.
 * @param child The child to render.
 * @returns {React.JSX.Element} The rendered child element.
 */
const renderChild = (child: Child2, idx: number): React.JSX.Element => {
    // Recursively render children if they exist
    const nestedChildren = child.children?.map((nestedChild, nestedIdx) => renderChild(nestedChild, nestedIdx));

    // Render a link with bold text or normal text, and place nested children correctly
    if (child.url) {
        return (
            <a
                href={child.url}
                className="url-policy"
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
            >
                {child.text}
                {nestedChildren}
            </a>
        );
    }

    // Render bold text or normal text, and place nested children outside <a>
    return (
        <span key={idx}>
            {child.bold ? <b>{child.text}</b> : child.text}
            {nestedChildren}
        </span>
    );
};

/**
 * A function that renders a list of policies based on the provided data array.
 * If a policy has a 'level', its children are wrapped in a heading element.
 * Otherwise, the children are rendered normally.
 * @returns {React.JSX.Element[]} An array of JSX elements representing the
 * policies.
 */
const RenderParagraphsPolicy = ({ data }: { data: Policy[] }): React.JSX.Element[] => {
    return data.map((policy, index) => {
        const content = policy.children.map((child, idx) => renderChild(child, idx));

        // If the policy has a level, render the content inside a heading tag
        if (policy.level) {
            const HeadingTag = `h${policy.level}` as keyof React.JSX.IntrinsicElements;
            return (
                <div key={index}>
                    <HeadingTag><b>{content}</b></HeadingTag>
                </div>
            );
        }

        // Otherwise, just render the content in a div
        return (
            <div key={index}>
                <p>{content}</p>
            </div>
        );
    });
};

export default RenderParagraphsPolicy;
