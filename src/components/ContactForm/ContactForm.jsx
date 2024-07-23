import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "you wrote less then 3 symbols")
    .max(50, "you wrote more then 50 symbols")
    .required("required"),
  number: Yup.string()
    .min(3, "you wrote less then 3 symbols")
    .max(50, "you wrote more then 50 symbols")
    .required("required"),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="">Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} component="span" name="name" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="">Number</label>
          <Field className={css.input} type="text" name="number" />
          <ErrorMessage className={css.error} component="span" name="number" />
        </div>
        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
