import {useRef} from "react";
import emailjs from "@emailjs/browser";
import {Field, Formik, Form} from "formik";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqy25p4",
        "template_u9zqx7e",
        e.current,
        "UEX0s2KdFoYt4CEKX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const initialValues = {
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
  };

  const contactSubmit = (values, {resetForm, setSubmitting}) => {
    emailjs.sendForm(
      "service_lqy25p4",
      "template_u9zqx7e",
      "form",
      "UEX0s2KdFoYt4CEKX"
    );

    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={contactSubmit}>
      <Form ref={form}>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" placeholder="Name" />

        <label htmlFor="company">Company Name</label>
        <Field id="company" name="company" placeholder="Company name" />

        <label htmlFor="email">E-mail</label>
        <Field id="email" name="email" placeholder="E-mail" />

        <label htmlFor="service">Service</label>
        <Field id="service" name="service" placeholder="Choose" />

        <label htmlFor="message">Message</label>
        <Field id="message" name="message" placeholder="How can we help you?" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Contact;
