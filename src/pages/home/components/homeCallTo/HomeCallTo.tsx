import React from 'react'

/**
 * A functional component that renders a section of the Home page.
 * The component renders a section with a background image.
 * The component expects a string prop, which is the URL of the image.
 * @param {string} data - The URL of the background image.
 * @returns {React.JSX.Element} The JSX element representing the section.
 */
const HomeCallTo = ({ data }: { data: string }): React.JSX.Element => {
    return (
        <section className="call-to-action image-home section dark-background">
            <img src={data} alt="home banner" />
        </section>
    )
}

export default HomeCallTo