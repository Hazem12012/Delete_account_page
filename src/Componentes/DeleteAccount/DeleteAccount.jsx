import Pop_up from "./Pop_up";
import "./deleteAccount.css";
// import imges
import phone_icon from "../Assets/icons8-phone-16.png";
import lock_icon from "../Assets/icons8-lock-64.png";
import arrow_icon from "../Assets/icons8-back-48.png";
import delete_icon from "../Assets/icons8-delete-100.png";
// usestate hook
import { useState } from "react";

export const DeleteAccount = () => {
  // state hooks
  const [valueClick, setValueClick] = useState(true);
  const [back_delete, setBack_Delete] = useState(false);
  const [validate, setValidate] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  // main data
  const data = { phone: phone, password: password };
  // next step handle
  function handleClick() {
    {
      valueClick === true ? setValueClick(false) : setValueClick(true);
    }
  }
  // Show Confirm deletion pop_up
  function handleClose_delet() {
    setBack_Delete(true);
  }
  // handle Submit
  function handleSubmit(e) {
    e.preventDefault();
  }
  // Delete result function
  function deleteAccount() {
    setValidate(true);
  }

  return (
    <div className="body">
      <div className="container">
        <Pop_up
          back_delete={back_delete}
          setBack_Delete={setBack_Delete}
          validate={validate}
          deleteAccount={deleteAccount}
        />
        <form
          style={back_delete ? { display: "none" } : {}}
          onSubmit={handleSubmit}
        >
          {/* Start Header */}
          <div className="header">
            <div className="text">حذف الحساب</div>
            <div className="underline"></div>
            {!valueClick && (
              <button onClick={handleClick} className="back">
                {
                  <img
                    src={arrow_icon}
                    alt="Not Found"
                    style={{ width: "45px" }}
                  />
                }
              </button>
            )}
          </div>
          {/* End Header */}
          {/* Start inputs section */}
          <div className="inputs">
            {/* phone input */}
            <div className={`input ${valueClick && "next"}`}>
              <img src={phone_icon} />
              <input
                type="number"
                placeholder="رقم الهاتف"
                onChange={(e) => {
                  e.target.value.length <= 11 && setPhone(e.target.value);
                  {
                    e.target.value.length === 11
                      ? (errors.phone = "")
                      : (errors.phone =
                          "رقم الهاتف يجب أن يحتوي على 11 رقم على الأقل");
                  }
                }}
                value={phone}
                maxLength={11}
              />
            </div>
            {/* password input */}
            <div className={`input ${valueClick && "next"}`}>
              <img src={lock_icon} style={{ width: "20px" }} />
              <input
                type="password"
                placeholder="كلمه المرور"
                onChange={(e) => {
                  setPassword(e.target.value);
                  {
                    e.target.value.length >= 8
                      ? (errors.password = "")
                      : (errors.password =
                          " كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل");
                  }
                }}
                value={password}
              />
            </div>
          </div>
          {/* Start input section */}
          {!valueClick && (
            // forgot password link
            <div className="forgot-password">
              <span> هل نسيت كلمة المرور?</span>
              <a href="#">لقد نسيت </a>
            </div>
          )}
          {/* Buttons section */}
          <div className="submit-container">
            <div className="submit">
              {valueClick ? (
                <div className="errorContainer">
                  {/* Error Message */}
                  {errors.phone && (
                    <p className="errorMessage" style={{ color: "red" }}>{errors.phone}</p>
                  )}
                  {/* Next Button  */}
                  <button
                    className="button"
                    onClick={() => phone.length === 11 && handleClick()}
                    type="button"
                  >
                    التلي
                  </button>
                </div>
              ) : (
                <div className="errorContainer">
                  {/* Error Message */}
                  {errors.password && (
                    <p className="errorMessage" style={{ color: "red" }}>{errors.password}</p>
                  )}
                  {/* Delete Button */}
                  <button
                    className="button delete"
                    onClick={() => password.length >= 8 && handleClose_delet()}
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
                    {" "}
                    {/* Image Effect */}
                    <img  
                      src={delete_icon}
                      alt="Not Found"
                      style={
                        password !== ""
                          ? {
                              transform: "translate(4px, 5px)",
                            }
                          : {}
                      }
                    />
                    حذف{" "}
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
