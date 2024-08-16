import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import css from "./bookForm.module.css";

export const BookForm = () => {
  const userSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    bookDate: Yup.date().required("Date is required"),
  });

  return (
    <div className={css.conteinerBookForm}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookDate: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
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
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <Field
              className={css.valueStyle}
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}

            <Field
              className={css.valueStyle}
              id="bookDate"
              name="bookDate"
              type="date"
            />
            {errors.bookDate && touched.bookDate ? (
              <div>{errors.bookDate}</div>
            ) : null}

            <Field
              as="textarea"
              className={css.valueComentStyle}
              id="comment"
              name="comment"
              placeholder="Comment"
            />
            {errors.comment && touched.comment ? (
              <div>{errors.comment}</div>
            ) : null}

            <button className={css.formButton} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
