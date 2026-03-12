import React from 'react'
import classnames from 'classnames'

// ** i18n
import { useTranslation } from 'react-i18next'

// ** Styles
import './FinishMessage.css'

const FinishMessage = ({ success, error }: { success: boolean, error: boolean }): React.JSX.Element => {

    const { t } = useTranslation();

    return (
        <div
            className={classnames("container-message text-message",
                {
                    'background-success': success,
                    'background-error': error
                })}>
            {
                success && t('sendSuccessForm')
            }
            {
                error && t('sendErrorForm')
            }
        </div>
    )
}

export default FinishMessage