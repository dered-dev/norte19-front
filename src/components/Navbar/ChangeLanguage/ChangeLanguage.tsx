import React, { useState, useEffect } from 'react';
import { Icon } from '../../Icon/Icon';
import classnames from 'classnames';

const languages = {
    en: {
        label: 'English',
        shortLabel: 'EN',
        flag: 'assets/images/header/icon__world.svg',
        flagColor: 'assets/images/header/flag-usa.svg',
        alt: 'inglés'
    },
    "es-mx": {
        label: 'Español',
        shortLabel: 'ES',
        flag: 'assets/images/header/icon__world.svg',
        flagColor: 'assets/images/header/flag-mex.svg',
        alt: 'español'
    }
};

/**
 * A functional component that renders the Change Language dropdown menu in the navigation bar.
 *
 * The component renders a dropdown menu with the current language and a link to change to the other language.
 * The component also renders a mobile version, which shows the current language and a chevron down icon to toggle the dropdown menu.
 * When the dropdown menu is open, the component renders a list with the other language as a link.
 *
 * @return {React.JSX.Element} The JSX element representing the Change Language dropdown menu in the navigation bar.
 */
const ChangeLanguage = (): React.JSX.Element => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState<'en' | 'es-mx'>('es-mx');

    useEffect(() => {
        const savedLanguage = (localStorage.getItem('language') as 'en' | 'es-mx') || 'es-mx';
        setCurrentLanguage(savedLanguage);
    }, []);

    /**
     * Toggle the dropdown menu for changing the language
     */
    const openChangeLanguage = (): void => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    /**
     * Save the chosen language to local storage and reload the page
     * @param {string} language - The new language to be set
     */
    const clickChangeLanguage = (language: 'en' | 'es-mx'): void => {
        localStorage.setItem('language', language);
        window.location.reload();
    };

    const otherLanguage = currentLanguage === 'es-mx' ? 'en' : 'es-mx';

    return (
        <>
            <li className="dropdown d-none d-xl-flex ms-3">
                <div className="d-flex align-items-center gap-1 lang__selector">
                    <div className="me-1">
                        <img
                            src={languages[currentLanguage].flag}
                            alt={languages[currentLanguage].alt}
                        />
                    </div>
                    <span>{languages[currentLanguage].shortLabel}</span>
                    <Icon iconName="ChevronDown" />
                </div>
                <ul>
                    <li className="d-flex align-items-center gap-2 dropdown-change-language">
                        <div>
                            <img
                                src={languages[otherLanguage].flagColor}
                                alt={languages[otherLanguage].alt}
                            />
                        </div>
                        <div
                            onClick={() => clickChangeLanguage(otherLanguage)}
                            aria-label="item-show-language-desktop"
                            className="cursor-pointer"
                        >
                            {languages[otherLanguage].label}
                        </div>
                    </li>
                </ul>
            </li>

            <li className="dropdown d-xl-none">
                <div
                    aria-label="change-language"
                    id="change-language"
                    className="dropdown-change-language-mobile"
                    onClick={openChangeLanguage}
                >
                    <span>{languages[currentLanguage].label}</span>
                    {isOpenDropdown ? (
                        <Icon iconName="ChevronDown" />
                    ) : (
                        <Icon iconName="ChevronUp" />
                    )}
                </div>
                <ul className={classnames({ 'dropdown-active': !isOpenDropdown })}>
                    <li>
                        <div
                            aria-label="item-show-language"
                            id="item-show-language"
                            className="dropdown-change-language-mobile cursor-pointer"
                            onClick={() => clickChangeLanguage(otherLanguage)}
                        >
                            {languages[otherLanguage].label}
                        </div>
                    </li>
                </ul>
            </li>
        </>
    );
};

export default ChangeLanguage;
