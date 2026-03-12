import React from 'react'

import './FallbackSpinner.css'

/**
 * A functional React component that renders a fallback spinner.
 *
 * @return {React.JSX.Element} A JSX element representing the fallback spinner.
 */
const FallbackSpinner = (): React.JSX.Element => {

    return (
        <div className="preloader" id='preloader' aria-label='preloader' />
    )
}

export default FallbackSpinner