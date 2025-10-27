import { useState } from "react";

export const ContactForm = () => {
  const [formValues, setFormValues] = useState({ fullname: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleValidation = (values) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;

    if (!values.fullname) {
      errors.fullname = "Enter your full name";
    } else if (numberRegex.test(values.fullname)) {
      errors.fullname = "Full name can't be numbers!";
    }
    if (!values.email) {
      errors.email = "Enter your email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Imvalid email format";
    }
    if (!values.message) {
      errors.message = "Message field can't be empty";
    } else if (values.message.length < 10) {
      errors.message = "The message should contain min. 10 characters";
    }
    return errors;
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(handleValidation(formValues));
    if (Object.keys(handleValidation(formValues)).length > 0) {
      return;
    } else {
      setSubmit(true);
      setFormValues({ fullname: "", email: "", message: "" });
    }
  };
  return (
    <section>
      {submit ? (
        <section className="form-success">
          <h3>Message successfully sent!</h3>
          <p>I will get back to you as soon as possible!</p>
          <button type="button" onClick={() => setSubmit(false)}>
            Send again
          </button>
        </section>
      ) : (
        <form className="form form-tag" onSubmit={submitForm}>
          <section>
            <input
              onChange={handleChange}
              value={formValues.fullname}
              type="text"
              placeholder="Full name"
              name="fullname"
            />
            <br></br>
            <label>{formErrors.fullname}</label>
          </section>
          <section>
            <input onChange={handleChange} value={formValues.email} name="email" type="text" placeholder="Email" />
            <br></br>
            <label>{formErrors.email}</label>
          </section>
          <section>
            <textarea onChange={handleChange} value={formValues.message} name="message" placeholder="Message" />
            <br></br>
            <label>{formErrors.message}</label>
          </section>
          <button type="submit">Send</button>
          <br></br>
        </form>
      )}
    </section>
  );
};
