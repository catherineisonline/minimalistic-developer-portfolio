import { useState } from "react";
import { validate } from "../../helpers/form-validation";
export const ContactForm = () => {
  const [formValues, setFormValues] = useState({ fullname: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setSubmit(true);
    setFormValues({ fullname: "", email: "", message: "" });
    setFormErrors({});
  };
  return (
    <>
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
          <div>
            <input
              onChange={handleChange}
              value={formValues.fullname}
              type="text"
              placeholder="Full name"
              name="fullname"
              autoComplete="given-name"
            />
            <br></br>
            {formErrors.fullname && <span aria-live="polite">{formErrors.fullname}</span>}
          </div>
          <div>
            <input
              onChange={handleChange}
              value={formValues.email}
              name="email"
              type="text"
              placeholder="Email"
              autoComplete="email"
            />
            <br></br>
            {formErrors.email && <span aria-live="polite">{formErrors.email}</span>}
          </div>
          <div>
            <textarea onChange={handleChange} value={formValues.message} name="message" placeholder="Message" />
            <br></br>
            {formErrors.message && <span aria-live="polite">{formErrors.message}</span>}
          </div>
          <button type="submit">Send</button>
          <br></br>
        </form>
      )}
    </>
  );
};
