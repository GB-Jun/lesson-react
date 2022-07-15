import { useState } from "react";
import "./HTML5Form.css";

function HTML5form() {
  const [fields, setFields] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFieldsChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fields);

    const formData = new FormData(e.target);

    console.log(
      formData.get("userName"),
      formData.get("email"),
      formData.get("password")
    );

    if (fields.password !== fields.confirmPassword) {
      setFieldErrors({
        ...fieldErrors,
        password: "確認密碼與密碼不相符",
        confirmPassword: "確認密碼與密碼不相符",
      });
    }
  };

  const handleInvalid = (e) => {
    e.preventDefault();

    // console.log(e.target.validationMessage);

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    });
  };

  const handleFormChange = (e) => {
    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: "",
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onChange={handleFormChange}
      >
        <label>姓名 : </label>
        <input
          name="userName"
          type="text"
          required
          value={fields.userName}
          onChange={handleFieldsChange}
        />
        {fieldErrors.userName}
        <br />
        <label>密碼 : </label>
        <input
          name="password"
          type="password"
          required
          minLength={6}
          value={fields.password}
          onChange={handleFieldsChange}
        />
        {fieldErrors.password}
        <br />
        <label>確認密碼</label>
        <input
          type="text"
          name="confirmPassword"
          required
          minLength={6}
          value={fields.confirmPassword}
          onChange={handleFieldsChange}
        />
        <span className="error">{fieldErrors.confirmPassword}</span>
        <br />
        <label>Email : </label>
        <input
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={handleFieldsChange}
        />
        {fieldErrors.email}
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  );
}

export default HTML5form;
