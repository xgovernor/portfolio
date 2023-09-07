import { Field, Form, Formik } from "formik";
import React, { memo } from "react";
import * as Yup from "yup";

function ContactForm({ onSubmit }) {
   // Set initial values
   const initialValues = {
      name: "",
      email: "",
      phone: "",
      message: "",
   };
  
  // Define form validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Please enter your full name"),
    email: Yup.string().email("Invalid email address").required("Please enter your email address"),
    phone: Yup.string().required("Please enter your phone number"),
    message: Yup.string().required("Please enter your message"),
  });

  
  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      onSubmit(values);
      setSubmitting(false);
    }, 400);
  };

  // Form Validation
  // A custom validation function. This must return an object
  // which keys are symmetrical to our values/initialValues
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "You know, name matters.";
    }

    if (!values.email) {
      errors.email = "You know, email is important.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.phone) {
      errors.phone =
        "I know, phone is something personal. But you know sometimes it's exceptional.";
    }

    if (!values.message) {
      errors.message = "Let me know the purpose of your message";
    } else if (values.message.length <= 50) {
      errors.message =
        "Please, write a clear brief with more then 50 characters.";
    }

    return errors;
  };


  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <div className="p__row">
              <label htmlFor="name">Full name</label>
              <Field
                className={`border--b--motion ${
                  touched.name && errors.name ? "__err" : null
                }`}
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Jhon Doe"
                autoComplete
              />
              {touched.name && errors.name ? (
                <p className="p__error">{errors.name}</p>
              ) : null}
            </div>
            <div className="p__row">
              <label htmlFor="email">Email address</label>
              <Field
                className={`border--b--motion ${
                  touched.email && errors.email ? "__err" : null
                }`}
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="e.g. example@mail.com"
                autoComplete
              />
              {touched.email && errors.email ? (
                <p className="p__error">{errors.email}</p>
              ) : null}
            </div>
            <div className="p__row">
              <label htmlFor="phone">Phone number</label>
              <Field
                className={touched.phone && errors.phone ? "__err" : null}
                id="phone"
                name="phone"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="e.g. (xxx)-xxxx-xxxxxx"
                autoComplete
              />
              {touched.phone && errors.phone ? (
                <p className="p__error">{errors.phone}</p>
              ) : null}
            </div>
            <div className="p__row">
              <label htmlFor="message">Your message</label>
              <Field
                className={touched.message && errors.message ? "__err" : null}
                id="message"
                as="textarea"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                placeholder="Write something"
                autoComplete
              />
              {touched.message && errors.message ? (
                <p className="p__error">{errors.message}</p>
              ) : null}
            </div>

            <button className="p__submit" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</span>
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default memo(ContactForm);
