import accept_icon from "../Assets/icons8-accept-48.png";
import { useState } from "react";
import Button from "./Button";

export default function Pop_up({ back_delete, setBack_Delete }) {
  const [validate, setValidate] = useState(false);
  function deleteAccount() {
    setValidate(true);
  }

  if (validate === true) {
    return (
      <div className="pop_up_1">
        <div
          className="container"
          style={
            back_delete ? { transform: "scale(1)", position: "relative" } : {}
          }
        >
          <h3 className="accept">
            <span>
              <img src={accept_icon} alt="Not Found" /> تم حذف الحساب بنجاح{" "}
            </span>
          </h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="pop_up_1">
        <div
          className="container"
          style={
            back_delete ? { transform: "scale(1)", position: "relative" } : {}
          }
        >
          <div className="title">
            <h3>هل انت متاكد من حذف الحساب</h3>
          </div>
          <div className={"buttons"}>
            <Button
              className={"confarm delete "}
              clickEvent={() => {
                deleteAccount();
              }}
            >
              تأكيد
            </Button>
            <Button
              clickEvent={() => {
                setBack_Delete(false);
              }}
            >
              إلغاء
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
