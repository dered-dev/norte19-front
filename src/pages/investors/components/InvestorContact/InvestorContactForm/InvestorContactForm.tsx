import React from "react"
import { Fade } from "react-awesome-reveal"

// ** Interfaces
import { InvestorContactInterface } from "../../../interfaces/InvestorContact";

// ** Components
import RenderParagraphsPolicy from "../../../../../components/RenderParagraphsPolicy/RenderParagraphsPolicy";
import DynamicForm from "../../../../shared/DynamicForm/DynamicForm";

/**
 * A functional component that renders a form component for the Investor Contact page.
 * The component renders a section with a title, a form with input fields, a button to submit the form, and a Google reCAPTCHA v3.
 * The form is validated using the useContactForm hook, which checks if the required fields are filled.
 * The form data is sent to the server using the button's URL.
 * @param {{ data: InvestorContactInterface }} props - The props of the component, which should contain the data for the form.
 * @returns {React.JSX.Element} - The JSX element representing the form component.
 */
const InvestorContactForm = ({ data }: { data: InvestorContactInterface }): React.JSX.Element => {

    const requiredFields = ['name', 'email', 'message', 'lastname', 'phone'];

    return (
        <div className="about light-background-tab pad-60">
            <div className="container">
                <div className="row gy-4 justify-content-center">
                    <div className="col-lg-6 col-12 content services-margin text-black">
                        <Fade direction="up" triggerOnce>
                            <RenderParagraphsPolicy data={data.data.attributes.section} />
                        </Fade>
                    </div>

                    {
                        data.data.attributes?.form && (
                            <div className="col-lg-4 content back-form">
                                <Fade direction="up" triggerOnce>
                                    <h6 className="color-blue text-center title-contact mb-4">
                                        {data.data.attributes.form_title}
                                    </h6>
                                    <DynamicForm
                                        data={data.data.attributes.form}
                                        requiredFields={requiredFields}
                                        page="investor-contact"
                                    />
                                </Fade>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>

    )
}

export default InvestorContactForm