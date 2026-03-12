import React from "react";

// ** Styles
import "./Leaders.css"

// ** Components
import LeadersHeader from "./components/LeadersHeader/LeadersHeader";
import LeadersBoard from "./components/LeadersBoard/LeadersBoard";
import LeadersBoardSections from "./components/LeadersBoardSections/LeadersBoardSections";
import LeadersForm from "./components/LeadersForm/LeadersForm";
import NotFoundData from "../shared/NotFoundData/NotFoundData";

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Hooks
import { useFetchData } from "../../hooks/useFetchData/useFetchData";

// ** Interfaces
import { LeadersInterface } from "./interfaces/Leaders";

// ** Google reCAPTCHA
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

/**
 * Renders the entire Leaders page, including the header, board, culture, mission, maxims and form.
 *
 * The content of the page is fetched from the 'api/leadership' endpoint using the useFetchData hook.
 *
 * If the data has been fetched, the page renders the LeadersHeader, LeadersBoard, LeadersCulture,
 * LeadersMission, LeadersMaxims and LeadersForm components.
 *
 * If the data is still loading, the page renders a loading spinner.
 *
 * @returns The JSX element representing the entire Leaders page.
 */
const Leaders = (): React.JSX.Element => {

    const { data, loading } = useFetchData<LeadersInterface>('api/leadership');

    return (
        <>
            {
                data && (
                    <>
                        <LeadersHeader data={data.data.attributes.header} />
                        <LeadersBoard data={data.data.attributes.leaders} />
                        <div className="wrap__mision">
                            <LeadersBoardSections data={data.data.attributes.sections} />
                        </div>
                        <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_API_KEY_CAPTCHA}>
                            <LeadersForm data={data.data.attributes.job_board} />
                        </GoogleReCaptchaProvider>
                    </>
                )
            }
            {
                loading && (
                    <div className='container-loading'>
                        <Spinner className='color-blue' />
                    </div>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>

    )
}

export default Leaders