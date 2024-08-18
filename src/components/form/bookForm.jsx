import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./bookForm.module.css";

export const BookForm = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "must be more than 2!")
      .max(20, "Name can't be longer than 20 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    bookDate: Yup.date().required("Date is required"),
    comment: Yup.string().max(150, "Comment is too long!"),
  });

  const handleSubmit = (value, { resetForm }) => {
    console.log("Form data", value);

    resetForm();

    window.location.reload();
  };

  return (
    <div className={css.conteinerBookForm}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookDate: "",
          comment: "",
        }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <span className={css.bookCampersStyle}>
              Book your campervan now
            </span>
            <p className={css.textStyle}>
              Stay connected! We are always ready to help you.
            </p>
            <Field
              className={css.valueStyle}
              id="name"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMesageStyle}
            />

            <Field
              className={css.valueStyle}
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={css.errorMesageStyle}
            />

            <Field
              className={css.valueStyle}
              id="bookDate"
              name="bookDate"
              type="date"
            />
            <ErrorMessage
              name="bookDate"
              component="span"
              className={css.errorMesageStyle}
            />

            <Field
              as="textarea"
              className={css.valueComentStyle}
              id="comment"
              name="comment"
              placeholder="Comment"
            />

            <button className={css.formButton} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
