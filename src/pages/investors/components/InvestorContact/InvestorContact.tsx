import React, { useEffect } from "react"

// ** Styles
import "./InvestorContact.css"

// ** Components
import InvestorContactForm from "./InvestorContactForm/InvestorContactForm"
import NotFoundData from "../../../shared/NotFoundData/NotFoundData"

//** Interfaces */
import { InvestorContactInterface } from "../../interfaces/InvestorContact"

// ** Hooks
import { useFetchData } from '../../../../hooks/useFetchData/useFetchData'

// ** Reactstrap
import { Spinner } from 'reactstrap'

// ** Google reCAPTCHA
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const InvestorContact = ({ setTitle }: { setTitle: React.Dispatch<React.SetStateAction<string>> }): React.JSX.Element => {

    const { data, loading } = useFetchData<InvestorContactInterface>('api/investors-contact');

    useEffect(() => {
        if (data) {
            setTitle(data?.data?.attributes?.title)
        }
    }, [data])

    return (
        <>
            {
                loading && (
                    <div className='container-loading'>
                        <Spinner className='color-blue' />
                    </div>
                )
            }{
                data && (
                    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_API_KEY_CAPTCHA}>

                        <InvestorContactForm data={data} />

                    </GoogleReCaptchaProvider>
                )
            }

            <NotFoundData data={data} loading={loading} />

        </>
    )
}

export default InvestorContact