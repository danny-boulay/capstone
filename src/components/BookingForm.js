import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatch, onSubmit  }) => {
    const today = new Date().toISOString().split("T")[0]; //Date du jour

    const validationSchema = Yup.object({
        name : Yup.string().min(2, "Your name is too short").max(50, "Your name is too long").required("Required"),
        date : Yup.date()
            .min(today, "You can't book in the past")
            .required("Required"),
        time : Yup.string().required("Required"),
        guests : Yup.number()
            .min(2, "Too few guests")
            .max(10, "Too many guests")
            .required("Required"),
        occasion : Yup.string().required("Required")
    });

    return (
        <div className="FormContainer">
            <h1 className="BookingTitle">Book a Table</h1>
            <Formik
                initialValues={{
                    name: "",
                    date: today,
                    time: "",
                    guests: 2,
                    occasion: "Dinner",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log("Form submitted with values:", values); // Ajoute cette ligne pour voir les données soumises
                    await onSubmit(values); // Attente de la soumission
                    setSubmitting(false);
                }}
            >
                {({ values, setFieldValue, isValid, dirty, errors, touched }) => (
                    <Form className="BookingForm">
                        <label htmlFor="name">Reservation Name</label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={`input ${touched.name && errors.name ? "error-input" : ""}`}
                        />
                        <ErrorMessage name="name" component="div" className="error" />

                        <label htmlFor="date">Choose date</label>
                        <Field
                            type="date"
                            id="date"
                            name="date"
                            min={today}
                            onChange={(e) => {
                                const selectedDate = e.target.value;
                                setFieldValue("date", selectedDate);
                                dispatch({ type: "UPDATE_DATE", payload: selectedDate });
                            }}
                            required
                            className={`input ${touched.date && errors.date ? "error-input" : ""}`}
                        />
                        <ErrorMessage name="date" component="div" className="error" />

                        <label htmlFor="time">Choose time</label>
                        <Field
                            as="select"
                            id="time"
                            name="time"
                            required
                            className={`input ${touched.time && errors.time ? "error-input" : ""}`}>
                            <option value="">Select a time</option>
                            {(availableTimes || []).map((t) => (
                                <option key={t} value={t}>
                                {t}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage name="time" component="div" className="error" />

                        <label htmlFor="guests">Number of guests</label>
                        <Field
                            type="number"
                            id="guests"
                            name="guests"
                            min="2"
                            max="10"
                            required
                            onChange={(e) => setFieldValue("guests", parseInt(e.target.value, 10))}
                            className={`input ${touched.guests && errors.guests ? "error-input" : ""}`}
                        />
                        <ErrorMessage name="guests" component="div" className="error" />

                        <label htmlFor="occasion">Occasion</label>
                        <Field
                            as="select"
                            id="occasion"
                            name="occasion"
                            required
                            className={`input ${touched.occasion && errors.occasion ? "error-input" : ""}`}
                        >
                            <option value="Dinner">Dinner</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </Field>
                        <ErrorMessage name="occasion" component="div" className="error" />

                        <button type="submit" disabled={!(isValid && dirty)}>
                            Make Your Reservation
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
  );
};

export default BookingForm;

