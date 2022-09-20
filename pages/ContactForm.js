// Core Components
import { Field, Form, Formik } from "formik";
import React from "react";

export default function ContactForm({ onSubmit }) {
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

	const initialValues = {
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						onSubmit(values);
						setSubmitting(false);
					}, 400);
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<Form onSubmit={handleSubmit}>
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
