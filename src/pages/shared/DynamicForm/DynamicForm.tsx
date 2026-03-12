import React from "react";
import classnames from "classnames";

// ** Reactstrap
import { Button, Col, Input, Label, Row, Form, FormFeedback } from 'reactstrap';

// ** Google reCAPTCHA
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// ** Hooks
import useContactForm, { FormData } from "../../../hooks/useContactForm/useContactForm";

// ** Interfaces
import { FormInterface } from "./../../contact/interfaces/Contact"

// ** Components
import FileInput from "../FileInput/FileInput";
import RenderParagraphsPolicy from "../../../components/RenderParagraphsPolicy/RenderParagraphsPolicy";
import FinishMessage from "./FinishMessage/FinishMessage";
import Cleave from 'cleave.js/react';

interface DynamicFormProps {
    data: FormInterface;
    requiredFields: string[];
    page: string
}

const DynamicForm = ({ data, requiredFields, page }: DynamicFormProps): React.JSX.Element => {

    const { formData, errors, successApi, errorApi, handleInputChange, handleSubmit } = useContactForm({
        name: '',
        email: '',
        message: '',
        cv: null,
        agreement: '',
        lastname: '',
        phone: ''
    }, requiredFields, data.button?.url);

    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (executeRecaptcha) {
            const newToken = await executeRecaptcha('form_submit');
            handleSubmit(e, newToken);

        } else {
            console.warn('Execute recaptcha not yet available');
        }
    }
    return (
        <Form onSubmit={onSubmit} className="php-email-form" data-url={data.button?.url}>
            <Row className="gy-4">
                {data.input_field.map((input) => (
                    <Col md={input.type === "file" || page !== "leaders" ? 12 : 12} key={input.id}>
                        <Label
                            for={input.field}
                            className={classnames(
                                "text-label", {
                                "color-white": page === "leaders"
                            })}>
                            {input.label}
                        </Label>
                        {
                            input.type === "file" ?
                                <FileInput
                                    input={input}
                                    handleInputChange={handleInputChange}
                                    errors={errors}
                                    cv={formData.cv ?? null}
                                /> : []
                        }
                        {
                            input.type !== "file" && input.field !== "phone" ?
                                <Input
                                    type={input.type as 'text' | 'email' | 'number'}
                                    name={input.field}
                                    id={input.field}
                                    placeholder={input.placeholder}
                                    value={formData[input.field as keyof FormData] as string}
                                    onChange={handleInputChange}
                                    invalid={!!errors[input.field]}
                                /> : []
                        }
                        {
                            input.field === "phone" ?
                                <div>
                                    <Cleave
                                        className={classnames("text-12 text-input form-control", {
                                            "is-invalid": !!errors[input.field], // Add custom invalid class
                                        })}
                                        options={{
                                            blocks: [0, 2, 4, 4],
                                            delimiters: ['(', ') ', ' '],
                                            numericOnly: true,
                                        }}
                                        aria-label="phone-number"
                                        value={formData[input.field as keyof FormData] as string}
                                        onChange={handleInputChange}
                                        name={input.field}
                                        id={input.field}
                                        placeholder={input.placeholder}
                                    />
                                    {errors[input.field] && (
                                        <FormFeedback>{input.error_message}</FormFeedback> // Display the error message
                                    )}
                                </div> : []
                        }
                        <FormFeedback>{input.error_message}</FormFeedback>
                    </Col>
                ))}
                {data.select_field.map((select) => (
                    <Col key={select.id} md="12">
                        <Label for={select.field} className="text-label">
                            {select.label}
                        </Label>
                        <Input
                            className='select-form'
                            type="select"
                            name={select.field}
                            id={select.field}
                            placeholder={select.placeholder}
                            value={formData[select.field as keyof FormData] as string}
                            onChange={handleInputChange}
                            invalid={!!errors[select.field]}
                        >
                            <option value="">{select.placeholder}</option>
                            {select.options.map((option) => (
                                <option key={option.children[0].text} value={option.children[0].text}>
                                    {option.children[0].text}
                                </option>
                            ))}
                        </Input>
                        <FormFeedback>{select.error_message}</FormFeedback>
                    </Col>
                ))}
                {data.textarea_field.map((input) => (
                    <Col key={input.id} md="12">
                        <Label
                            for="message"
                            className={classnames(
                                "text-label", {
                                "color-white": page === "leaders"
                            })}>
                            {input.label}
                        </Label>
                        <Input
                            type="textarea"
                            className="textarea-form"
                            name={input.field}
                            id={input.field}
                            placeholder={input.placeholder}
                            value={formData[input.field as keyof FormData] as string}
                            onChange={handleInputChange}
                            invalid={!!errors.message}
                        />
                        <FormFeedback>{input.error_message}</FormFeedback>
                    </Col>
                ))}
                <Col md="12">
                    <div
                        className={classnames(
                            "accept-terms", {
                            "accept-terms-white": page === "leaders",
                            "text-start color__base lengend__termsandconditions": page !== "leaders"
                        })}>
                        <RenderParagraphsPolicy data={data.terms_and_conditions} />
                    </div>
                </Col>
                <Col md="12">
                    <div
                        className={'terms__recaptcha'}>
                        <p className="recaptcha__legend">Este sitio está protegido por reCAPTCHA y en él se aplican la Política de privacidad y los Términos de servicio de Google.</p>
                    </div>
                </Col>
                <Col md="12">
                    <Button
                        type="submit"
                        className={classnames(
                            {
                                "btn-send-form": page !== "leaders",
                                "btn-bolsa btn__filled": page === "leaders"
                            })}
                        outline>
                        {data.button?.text}
                    </Button>
                </Col>

                {(successApi || errorApi) && (
                    <Col md="12">
                        <FinishMessage success={successApi} error={errorApi} />
                    </Col>
                )}

            </Row>
        </Form>
    );
};

export default DynamicForm;