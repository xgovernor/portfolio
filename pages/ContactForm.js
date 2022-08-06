// Core Components
import { Field, Form, Formik, useFormik } from "formik";
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

		if (!message.values) {
			errors.message = "Let me know the perpose of your message";
		} else if (values.message.length <= 50) {
			errors.message =
				"Please, write a clear brief with morethen 50 chracters.";
		}

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
		validate,
		onSubmit: onSubmit,
	});

	return (
		<>
			<Formik onSubmit={formik.handleSubmit}>
				<Form>
					<div className="p__row">
						<label htmlFor="name">Full name</label>
						<Field
							className={
								formik.touched.name && formik.errors.name ? "__err" : null
							}
							id="name"
							name="name"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.name}
							placeholder="Jhon Doe"
						/>
						{formik.touched.name && formik.errors.name ? (
							<p className="p__error">{formik.errors.name}</p>
						) : null}
					</div>
					<div className="p__row">
						<label htmlFor="email">Email address</label>
						<Field
							className={
								formik.touched.email && formik.errors.email ? "__err" : null
							}
							id="email"
							name="email"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							placeholder="e.g. example@mail.com"
						/>
						{formik.touched.email && formik.errors.email ? (
							<p className="p__error">{formik.errors.email}</p>
						) : null}
					</div>
					<div className="p__row">
						<label htmlFor="phone">Phone number</label>
						<Field
							className={
								formik.touched.phone && formik.errors.phone ? "__err" : null
							}
							id="phone"
							name="phone"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.phone}
							placeholder="e.g. (xxx)-xxxx-xxxxxx"
						/>
						{formik.touched.phone && formik.errors.phone ? (
							<p className="p__error">{formik.errors.phone}</p>
						) : null}
					</div>
					<div className="p__row">
						<label htmlFor="message">Your message</label>
						<Field
							className={
								formik.touched.message && formik.errors.message ? "__err" : null
							}
							id="message"
							as="textarea"
							name="message"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.message}
							placeholder="Write something"
						/>
						{formik.touched.message && formik.errors.message ? (
							<p className="p__error">{formik.errors.message}</p>
						) : null}
					</div>

					<button className="p__submit" type="submit">
						<span>SUBMIT</span>
					</button>
				</Form>
			</Formik>
		</>
	);
}
