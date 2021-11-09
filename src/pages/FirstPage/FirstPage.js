import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import style from "./firstPage.module.css";

const FirstPage = () => {
  const navigate = useNavigate();

  const [tell, setTell] = useState("");
  const [pass, setPass] = useState("");
  const [errMessage, setErrMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    errMessage || tell === "" || pass === ""
      ? alert("Неправильный номер телефона или пароль")
      : navigate("/second-page");
  };
  return (
    <>
      <form className={style.form}>
        <IMaskInput
          className={style.form__input}
          mask="{+}{38\0}(00)000-00-00"
          value={tell}
          unmask={false}
          onAccept={(value) => setTell(value)}
          placeholder="+380(your phone)"
        />
        <IMaskInput
          className={style.form__input}
          mask={function (value) {
            if (/^[A-z0-9_\.-]+$/.test(value))
              return true && setErrMessage(false);
            return setErrMessage(true);
          }}
          value={pass}
          unmask={true}
          onAccept={(value) => setPass(value)}
          placeholder="Enter password here on ENG"
        />

        <button onClick={handleSubmit} className={style.button}>
          Зарегистрироваться
        </button>
      </form>
    </>
  );
};

export default FirstPage;
