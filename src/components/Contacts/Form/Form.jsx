import React from 'react';
import classes from './Form.module.scss';
import { useFormik } from 'formik';

const Form = (props) => {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.message) {
      errors.message = 'Required';
    } else if (values.message.length > 200) {
      errors.message = 'Must be 200 characters or less';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <div className={classes.label}>
        <input
          className={
            classes.input + ' ' + (formik.errors.name ? classes.fieldError : '')
          }
          id="name"
          name="name"
          type="text"
          placeholder="_Name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.name ? (
          <div className={classes.error}>{formik.errors.name}</div>
        ) : null}
      </div>
      <div className={classes.label}>
        <input
          className={
            classes.input + ' ' + (formik.errors.name ? classes.fieldError : '')
          }
          name="email"
          type="text"
          placeholder="_EMail"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.email ? (
          <div className={classes.error}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className={classes.label}>
        <textarea
          className={
            classes.textarea +
            ' ' +
            (formik.errors.name ? classes.fieldError : '')
          }
          name="message"
          id="message"
          placeholder="_Message"
          cols="30"
          rows="10"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        ></textarea>
        {formik.errors.message ? (
          <div className={classes.error}>{formik.errors.message}</div>
        ) : null}
      </div>
      <button className={classes.button} type="submit">
        Contact me
      </button>
    </form>
  );
};

export default Form;
