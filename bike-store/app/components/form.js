'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/form.css';
import Fetch from '../customHooks/fetch';

const ContactForm = () => {

    const initialValues = {
        Name: '',
        Surname: '',
        email: '',
        message: '',
        phoneNumber: '',
    };

    const validationSchema = Yup.object({
        Name: Yup.string().matches(/^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(-[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+)?$/, "Name is not valid - Shouldn't contain numbers!").required(),
        Surname: Yup.string().matches(/^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(-[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+)?$/, "Surname is not valid - Shouldn't contain numbers!").required(),
        email: Yup.string().required().email(),
        message: Yup.string().required().max(250),
        phoneNumber: Yup.string().matches(/^[0-9-]+$/),
    });

    const onSubmit = (_, { resetForm }) => {
        alert('Your message has been sent!'); // Change this in the future
        resetForm();
    };

    const formatPhoneNumber = (value) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
        }
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
    };

    const handlePhoneNumberChange = (e, setFieldValue) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setFieldValue('phoneNumber', formattedPhoneNumber);
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ setFieldValue }) => (
                <Form className="contact-form" id="contact-form">
                    <h2>Contact us!</h2>

                    <div className="form-field">
                        <label htmlFor="Name">Name</label>
                        <strong>*</strong>
                        <Field type="text" id="Name" name="Name" placeholder="First name here..." />
                        <ErrorMessage name="Name" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="Surname">Surname</label>
                        <strong>*</strong>
                        <Field type="text" id="Surname" name="Surname" placeholder="Surname goes here..." />
                        <ErrorMessage name="Surname" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">E-mail</label>
                        <strong>*</strong>
                        <Field type="email" id="email" name="email" placeholder="Rock your email in this place..." />
                        <ErrorMessage name="email" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="phoneNumber">Number</label>
                        <Field
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Number example: 123-456-789"
                            onChange={(e) => handlePhoneNumberChange(e, setFieldValue)}
                        />
                        <ErrorMessage name="phoneNumber" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">Message</label>
                        <strong>*</strong>
                        <Field as="textarea" id="message" name="message" maxLength="1024" placeholder="Your message should be ridin' here..." />
                        <ErrorMessage name="message" component="p" className="error" />
                    </div>

                    <p className="required"><strong>(*) required fields</strong></p>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
