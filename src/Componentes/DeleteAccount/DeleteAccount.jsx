import Pop_up from "./Pop_up";
import { useState } from "react";

// import imges

import arrow_icon from "../Assets/icons8-back-48.png";
import delete_icon from "../Assets/icons8-delete-100.png";
import  Button  from "./Button";
import { Header } from "./Header";
import  FormInputs  from "./FormInputs";


export default function DeleteAccount() {
  // Start states
  const [changeButton, setChangeButton] = useState(true);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const getData={phone,password}
  const [errors, setErrors] = useState("");
  const [back_delete, setBack_Delete] = useState(false);

  // Start functions
  function handleChangeButton() {
    setChangeButton(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="body">
      <div className="container">
        <Pop_up setBack_Delete={setBack_Delete} back_delete={back_delete} />{" "}
        <div style={back_delete ? { display: "none" } : {}}>
          {" "}
          <Header>
            {!changeButton && (
              <button onClick={() => setChangeButton(true)} className="back">
                {
                  <img
                    src={arrow_icon}
                    alt="Not Found"
                    style={{ width: "45px" }}
                  />
                }
              </button>
            )}
          </Header>
          <FormInputs
            changeButton={changeButton}
            setPhone={setPhone}
            phone={phone}
            setPassword={setPassword}
            password={password}
            setErrors={setErrors}
            handleSubmit={handleSubmit}
          />
          {!changeButton && (
            <div className="forgot-password">
              <span> هل نسيت كلمة المرور?</span>
              <a href="#">لقد نسيت </a>
            </div>
          )}
          {changeButton ? (
            <Button
              clickEvent={() => phone.length === 11 && handleChangeButton()}
              buttonName={"التلي"}
              errors={errors}
            />
          ) : (
            <Button
              className={"delete"}
              clickEvent={() => password.length >= 8 && setBack_Delete(true)}
              buttonName={"حذف"}
              errors={errors}
              password={password}
              style={
                password !== ""
                  ? {
                      color: "#d96e6e",
                      fontWeight: "700",
                      backgroundColor: "#d96e6e5d",
                    }
                  : {}
              }
            >
              <img
                src={delete_icon}
                alt="Not Found"
                style={
                  password.length
                    ? {
                        transform: "translate(4px, 5px)",
                      }
                    : {}
                }
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
 