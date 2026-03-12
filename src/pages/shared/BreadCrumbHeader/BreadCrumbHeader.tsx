import React from "react";
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

// ** Hooks
import useTitleHeader from "../../../hooks/useTitleHeader/useTitleHeader";

// ** i18n
import { useTranslation } from 'react-i18next'


/**
 * A functional component that renders a breadcrumb navigation.
 * The component fetches the header data for the given URL using the `useTitleHeader` hook
 * and renders a breadcrumb with two items: the home page and the current page.
 * The component uses the `useTranslation` hook to translate the text for the home page.
 * @param {{ url: string }} props - The props object with a `url` property.
 * @returns {React.JSX.Element} The JSX element representing the breadcrumb navigation.
 */
const BreadCrumbHeader = ({ url }: { url: string }): React.JSX.Element => {
    const { t } = useTranslation()
    const { headerData } = useTitleHeader({ url: url })

    return (
        <Breadcrumb className="container position-relative breadcrumbs">
            <BreadcrumbItem>
                <Link to="/">{t('home')}</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{headerData?.section_name}</BreadcrumbItem>
        </Breadcrumb>
    );
};

export default BreadCrumbHeader