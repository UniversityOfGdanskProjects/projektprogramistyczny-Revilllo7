'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/form.css';
import Fetch from '../customHooks/fetch';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();

    const initialValues = {
        Name: '',
        Surname: '',
        email: '',
        message: '',
        phoneNumber: '',
    };

    const validationSchema = Yup.object({
        Name: Yup.string().matches(/^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(-[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+)?$/, t("Name is not valid - Shouldn't contain numbers!")).required(),
        Surname: Yup.string().matches(/^[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+(-[a-zA-ZĄąĆćĘęŁłŃńÓóŚśŹźŻż]+)?$/, t("Surname is not valid - Shouldn't contain numbers!")).required(),
        email: Yup.string().required().email(),
        message: Yup.string().required().max(250),
        phoneNumber: Yup.string().matches(/^[0-9-]+$/),
    });

    const onSubmit = (_, { resetForm }) => {
        alert(t('form.alert')); // Change this in the future
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
                    <h2>{t('form.header')}</h2>

                    <div className="form-field">
                        <label htmlFor="Name">{t('form.name')}</label>
                        <strong>*</strong>
                        <Field type="text" id="Name" name="Name" placeholder={t('form.name.placeholder')} />
                        <ErrorMessage name="Name" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="Surname">{t('form.surname')}</label>
                        <strong>*</strong>
                        <Field type="text" id="Surname" name="Surname" placeholder={t('form.surname.placeholder')} />
                        <ErrorMessage name="Surname" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">{'E-mail'}</label>
                        <strong>*</strong>
                        <Field type="email" id="email" name="email" placeholder={t('form.email.placeholder')} />
                        <ErrorMessage name="email" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="phoneNumber">{t('form.number')}</label>
                        <Field
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder={t('form.number.placeholder')}
                            onChange={(e) => handlePhoneNumberChange(e, setFieldValue)}
                        />
                        <ErrorMessage name="phoneNumber" component="p" className="error" />
                    </div>

                    <div className="form-field">
                        <label htmlFor="message">{t('form.message')}</label>
                        <strong>*</strong>
                        <Field as="textarea" id="message" name="message" maxLength="1024" placeholder={t('form.message.placeholder')} />
                        <ErrorMessage name="message" component="p" className="error" />
                    </div>

                    <p className="required"><strong>{t('form.required')}</strong></p>
                    <button type="submit" className="submit-button">
                        {t('form.submit')}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
