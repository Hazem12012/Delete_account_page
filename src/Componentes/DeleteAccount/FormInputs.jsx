import phone_icon from "../Assets/icons8-phone-16.png";
import lock_icon from "../Assets/icons8-lock-64.png";
export default function FormInputs({
    changeButton,
    phone,
    password,
    setPhone,
    setPassword,
    setErrors,
    handleSubmit,
  }) {
    return (
      <div>
        <form className="inputs" onSubmit={handleSubmit}>
          {/* phone input */}
          <div className={changeButton ? `input next` : "input"}>
            <img src={phone_icon} />
            <input
              type="number"
              placeholder="رقم الهاتف"
              maxLength={11}
              value={phone}
              onChange={(e) => {
                e.target.value.length <= 11 && setPhone(e.target.value);
                {
                  e.target.value.length >= 11
                    ? setErrors("")
                    : setErrors("رقم الهاتف يجب أن يحتوي على 11 رقم على الأقل");
                }
              }}
            />
          </div>
  
          {/* password input */}
          <div className={changeButton === true ? `input next` : "input"}>
            <img src={lock_icon} style={{ width: "20px" }} />
            <input
              type="password"
              placeholder="كلمه المرور"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                {
                  e.target.value.length >= 8
                    ? setErrors("")
                    : setErrors(" كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل");
                }
              }}
            />
          </div>
        </form>
      </div>
    );
  }
  