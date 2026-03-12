import React from "react";
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Col, Container, Row, Spinner } from 'reactstrap';

// ** Hooks
import { useFetchData } from "../../../hooks/useFetchData/useFetchData";

// ** Interfaces
import { PrivacyNoticeInterface } from "./interfaces/PrivacyNotice";

// ** Components
import RenderParagraphsPolicy from "../../../components/RenderParagraphsPolicy/RenderParagraphsPolicy";
import NotFoundData from "../NotFoundData/NotFoundData";

// ** i18n
import { useTranslation } from 'react-i18next'

/**
 * A React functional component that renders the privacy notice page,
 * based on the data fetched from the API.
 * The component renders a section with a title and a description,
 * and a breadcrumbs component with a link to the home page.
 *
 * @param url - The URL of the API endpoint to fetch the data from.
 * @returns - A JSX element representing the privacy notice page.
 */
const ContentPolitics = ({ url }: { url: string }): React.JSX.Element => {
    const { data, loading } = useFetchData<PrivacyNoticeInterface>(url);
    const { t } = useTranslation()

    return (
        <>
            {
                loading && (
                    <div className="text-center">
                        <Spinner color="primary" />
                    </div>
                )
            }
            {
                data && (
                    <>
                        <div
                            className="page-title dark-background"
                            style={{
                                backgroundImage: `url(${data.data?.attributes?.banner?.data?.attributes?.url})`,
                            }}
                        >
                            <Breadcrumb className="container position-relative breadcrumbs">
                                <BreadcrumbItem>
                                    <Link to="/">{t('home')}</Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem active>{data.data.attributes.title}</BreadcrumbItem>
                            </Breadcrumb>

                            <div className="call-to-action banner-page">
                                <Container>
                                    <Row>
                                        <Col lg={12} className="align-content-center">
                                            <Zoom triggerOnce>
                                                <div className="p-left text-center">
                                                    <h2>{data.data.attributes.title}</h2>
                                                </div>
                                            </Zoom>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>

                        <section className="service-details section text-black">
                            <Container>
                                <Row className="gy-4">
                                    <Col lg={12} className="p-justify">
                                        <RenderParagraphsPolicy data={data.data.attributes.policy} />
                                    </Col>
                                </Row>
                            </Container>
                        </section>

                    </>
                )
            }
            <NotFoundData data={data} loading={loading} />

        </>
    );
};

export default ContentPolitics;