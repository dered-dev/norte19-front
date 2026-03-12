import React from "react";

// ** Assets
import notFound from "./assets/404.svg";

// ** Styles
import "./NotFoundData.css";

// ** i18n
import { useTranslation } from 'react-i18next';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

// Define the props type to make data and loading optional
interface NotFoundDataProps<T = unknown> {
    data?: T | null;
    loading?: boolean;
}

const NotFoundData = ({ data, loading }: NotFoundDataProps): React.JSX.Element | null => {
    const { t: translate } = useTranslation();

    if (loading || data) {
        return null;
    }

    return (
        <div className="container-not-found-data">
            <div className="img-not-found">
                <img src={notFound} alt="404" />
            </div>
            <div className="title-not-found">
                4<span className="color-blue-0">0</span>4
            </div>
            <div>
                {translate("error404Subtitle")}
            </div>
            <div>
                <Button className="btn-not-found" tag={Link} to="/">{translate("goToHome")}</Button>
            </div>
        </div>
    );
};

export default NotFoundData;
