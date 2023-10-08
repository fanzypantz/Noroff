import React, { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import "../css/Contact.scss";

const Contact = () => {
  const context = useContext(GameContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    context.setPageFade(false);
    // eslint-disable-next-line
  }, []);

  const handleChange = (formType, value) => {
    console.log("test: ");
    let errorObject = {};
    switch (formType) {
      case "first-name":
        if (!value.match(/[a-zA-Z]{2,}/)) {
          errorObject.firstName = "First Name needs more than two characters";
        }
        break;
      case "last-name":
        if (!value.match(/[a-zA-Z]{2,}/)) {
          errorObject.lastName = "Last Name needs more than two characters";
        }
        break;
      case "email":
        if (!value.match(/\S+@\S+\.\S+/)) {
          errorObject.email = "Email must be valid email";
        }
        break;
      case "message":
        if (!value.match(/[a-zA-Z]{10,}/)) {
          errorObject.message = "Message needs more than ten characters long";
        }
        break;
      default:
        break;
    }
    setErrors(errorObject);
  };

  const handleSubmit = () => {};

  return (
    <form className={"form"}>
      <div className={"form-group"}>
        {errors.firstName && <p>{errors.firstName}</p>}
        <label htmlFor="first-name">First Name</label>
        <input
          onChange={e => handleChange("first-name", e.target.value)}
          name={"first-name"}
          type="text"
        />
      </div>

      <div className={"form-group"}>
        {errors.lastName && <p>{errors.lastName}</p>}
        <label htmlFor="last-name">Last Name</label>
        <input
          onChange={e => handleChange("last-name", e.target.value)}
          name={"last-name"}
          type="text"
        />
      </div>

      <div className={"form-group"}>
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="email">Email</label>
        <input
          onChange={e => handleChange("email", e.target.value)}
          name={"email"}
          type="email"
        />
      </div>

      <div className={"form-group"}>
        {errors.message && <p>{errors.message}</p>}
        <textarea
          onChange={e => handleChange("message", e.target.value)}
          name="message"
          cols="30"
          rows="10"
          placeholder={"Please type your message here"}
        />
      </div>

      <button className="[ form__submit ]" onClick={handleSubmit}>
        Send Message
      </button>
    </form>
  );
};

export default Contact;
