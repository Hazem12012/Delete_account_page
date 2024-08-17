import "./deleteAccount.css";
import phone_icon from "../Assets/icons8-phone-16.png";
import lock_icon from "../Assets/icons8-lock-64.png";
import arrow_icon from "../Assets/icons8-back-48.png";
import delete_icon from "../Assets/icons8-delete-100.png";
import { useState } from "react";

export const DeleteAccount = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [valueClick, setValueClick] = useState(true);
  const [back_delete, setBack_Delete] = useState(false);
  const formData = { phone: phone, password: password };

  function handelClick() {
    valueClick === true ? setValueClick(false) : setValueClick(true);
  }
  function handelClose_delet() {
    setBack_Delete(true);
  }
  //   Handel Submit
  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
  }
  return (
    <div className="body">
      <div className="container">
        <Pop_up
          back_delete={back_delete}
          setBack_Delete={setBack_Delete}
          onSubmit={handleSubmit}
        />
        <form
          style={back_delete ? { display: "none" } : {}}
          onSubmit={handleSubmit}
        >
          <div className="header">
            <div className="text">حذف الحساب</div>
            <div className="underline"></div>
            {!valueClick && (
              <button onClick={handelClick} className="back">
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

          <div className="inputs">
            <div className={`input ${valueClick && "next"}`}>
              <img src={phone_icon} />
              <input
                type="number"
                placeholder="رقم الهاتف"
                onChange={(e) =>
                  +e.target.value.length <= 11 && setPhone(e.target.value)
                }
                value={phone}
                maxLength={11}
              />
            </div>
            <div className={`input ${valueClick && "next"}`}>
              <img src={lock_icon} style={{ width: "20px" }} />
              <input
                type="password"
                placeholder="كلمه المرور"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          {!valueClick && (
            <div className="forgot-password">
              <span> هل نسيت كلمة المرور?</span>
              <a href="#">لقد نسيت </a>
            </div>
          )}
          <div className="submit-container">
            <div className="submit">
              {valueClick ? (
                <button className="button" onClick={handelClick} type="button">
                  التلي
                </button>
              ) : (
                <button className="button delete" onClick={handelClose_delet}>
                  {" "}
                  <img
                    src={delete_icon}
                    alt="Not Found"
                    style={{ width: "24px" }}
                  />
                  حذف{" "}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

function Pop_up({ back_delete, setBack_Delete, onSubmit }) {
  return (
    <div className="pop_up_1">
      <div
        className="container"
        style={back_delete ? { transform: "scale(1)" ,position:"relative" } : {}}
      >
        <div className="title">
          <h3>هل انت متاكد من حذف الحساب</h3>
        </div>
        <div className={"buttons"}>
          <input
            type="submit"
            value={"تأكيد"}
            className="button delete"
            onClick={onSubmit}
          />
          <button className="button" onClick={() => setBack_Delete(false)}>
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
}
