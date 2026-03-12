import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

// ** Interfaces
import { Header } from "../../interfaces/Leaders";

// ** Components
import RenderParagraphs from "../../../../components/RenderParagraphs/RenderParagraphs";

// ** Images 
import imageHeader from '/assets/images/all/back_leaders.png'

/**
 * A functional component that renders the header section of the Leaders page.
 * The component renders a section with a background image, a breadcrumb, and a heading with a paragraph of text.
 * The component uses the Fade and Zoom animation effects from react-awesome-reveal.
 * @param {Header} data - The data for the header section.
 * @returns {React.JSX.Element} The JSX element representing the header section.
 */
export const LeadersHeader = ({ data }: { data: Header }): React.JSX.Element => {

    function stripTagsWithDOMParser(html: string, allowedTags: string[] = []) {
        if (typeof window === 'undefined') return html; // SSR check
        
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        const removeDisallowedTags = (node: Node) => {
            const children = Array.from(node.childNodes);
            
            children.forEach(child => {
                if (child.nodeType === 1) { // Element node
                    const element = child as Element;
                    if (!allowedTags.includes(element.tagName.toLowerCase())) {
                        // Reemplazar el nodo con su contenido de texto
                        const textNode = document.createTextNode(element.textContent ?? '');
                        node.replaceChild(textNode, child);
                    } else {
                        removeDisallowedTags(child);
                    }
                }
            });
        };
        
        removeDisallowedTags(doc.body);
        console.log(doc.body.innerHTML)
    }

    return (
        <>
            {/* TODO */}
            {/* Replace image imageHeader for admin `url(${data.background?.data?.attributes?.url})`  */}
            <div 
                className="page-title dark-background responsive-margin" 
                style={{ backgroundImage: `url(${imageHeader})` }}
            >
                <div className="call-to-action banner-page">
                    <div className="container">
                        <Zoom triggerOnce>
                            <div className="row">
                                <div className="col-lg-12 align-content-center">
                                    <div className="">
                                        <h1 className="banner__page__title">
                                            {data.second_title}
                                            <strong>{data.title}</strong>
                                            
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
            { data.description && (
                <div className="header__description pt-5 pb-4">
                    <div className="inner__header__description">
                        <RenderParagraphs data={data.description} />
                    </div>
                </div>
            )}
        </>
    )
}

export default LeadersHeader