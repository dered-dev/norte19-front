import React from "react";

// ** i18n
import { useTranslation } from 'react-i18next'

/**
 * Renders a button to show/hide more information, with the text changing based on the `viewMore` prop.
 * 
 * @param {{ viewMore: boolean, setViewMore: React.Dispatch<React.SetStateAction<boolean>> }} props - Object with `viewMore` and `setViewMore` properties.
 * @returns {React.JSX.Element} - JSX element of the button.
 * 
 * @example
 * <ButtonViewMoreLess viewMore={false} setViewMore={setViewMore} />
 */
const ButtonViewMoreLess = ({ viewMore, setViewMore }: { viewMore: boolean, setViewMore: React.Dispatch<React.SetStateAction<boolean>> }): React.JSX.Element => {

    const { t } = useTranslation()

    return (
        <div className="text-center">
            <button aria-label="view-more" className="btn-faq" onClick={() => setViewMore(!viewMore)}>
                <span>{viewMore ? t('viewLess') : t('viewMore')}</span>
            </button>
        </div>
    )
}

export default ButtonViewMoreLess