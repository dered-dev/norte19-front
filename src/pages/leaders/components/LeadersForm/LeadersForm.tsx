import React from "react";
import { Fade } from "react-awesome-reveal";

// ** Interfaces
import { Jobboard } from "../../interfaces/Leaders";

// ** Components
import RenderParagraphs from "../../../../components/RenderParagraphs/RenderParagraphs";
import DynamicForm from "../../../shared/DynamicForm/DynamicForm";

import backLeadersContact from '/assets/images/all/back__contact__leaders.png';



/**
 * A functional component that renders a form component for the Leaders page.
 * The component renders a section with a title, a description, and a form with input fields, a button to submit the form, and a Google reCAPTCHA v3.
 * The form is validated using the useContactForm hook, which checks if the required fields are filled.
 * The form data is sent to the server using the button's URL.
 * @param {{ data: Jobboard }} props - The props of the component, which should contain the data for the form.
 * @returns {React.JSX.Element} - The JSX element representing the form component.
 */
const LeadersForm = ({ data }: { data: Jobboard }): React.JSX.Element => {
    const requiredFields = ['name', 'email', 'message', 'cv'];

    return (
        <section className="about projects section responsive-margin leaders__jobboard__form" style={{ backgroundImage: `url(${backLeadersContact})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 about-images">
                        <Fade triggerOnce>
                            <div id="stats" className="stats">
                                <div className="container">
                                    <div className="row gy-4">
                                        <div className="section-title text-left title-responsive">
                                            <h2 className="color-white leaders__jobboard__title">{data.title}</h2>
                                            <div className="color-white mt-3 mt-md-5 leaders__jobboard__description">
                                                <RenderParagraphs data={data.description} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {
                        data.form && (
                            <div className="col-lg-6 content bolsa-de-trabajo">
                                <Fade direction="up" triggerOnce>
                                    <DynamicForm
                                        data={data.form}
                                        requiredFields={requiredFields}
                                        page="leaders" />
                                </Fade>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default LeadersForm;
