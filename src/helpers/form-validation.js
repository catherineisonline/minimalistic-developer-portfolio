export const validate = (values) => {
  const errors = {};
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const numberRegex = /\d/;
  const { fullname, email, message } = values;
  if (!fullname) {
    errors.fullname = "Enter your full name";
  } else if (numberRegex.test(fullname)) {
    errors.fullname = "Full name can't be numbers!";
  }
  if (!email) {
    errors.email = "Enter your email";
  } else if (!emailRegex.test(email)) {
    errors.email = "Imvalid email format";
  }
  if (!message) {
    errors.message = "Message field can't be empty";
  } else if (message.length < 10) {
    errors.message = "The message should contain min. 10 characters";
  }
  return errors;
};
