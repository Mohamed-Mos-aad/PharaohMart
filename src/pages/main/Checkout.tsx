// ** Style
import style from "../../style/pages/main/checkout.module.css";
// ** Assets
import checkedRadioIcon from "../../assets/icons/form/checkedRadioIcon.svg";
import unCheckedRadioIcon from "../../assets/icons/form/unCheckedRadioIcon.svg";
// ** Hooks && Tools
import { useState } from "react";
// ** Components
import InputElement from "../../components/ui/InputElement";
import { useAppSelector } from "../../app/hooks";

export default function Checkout() {
  // ** States
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);
  const [checkedMethod, setCheckedMethod] = useState<string>("");

  // ** Handlers
  const selectPaymentMethod = (paymentMethodSelected: string) => {
    setCheckedMethod(paymentMethodSelected);
  };

  return (
    <>
      <div className="global_container">
        <div className={style.checkout}>
          <h1>Checkout</h1>
          <h2>Delivery</h2>
          <div className={style.delivery}>
            <InputElement
              id="userFullName"
              label="Full Name"
              name="userFullName"
              onChange={() => {}}
              placeholder=""
              type="text"
              error=""
            />
            <InputElement
              id="userAddress"
              label="Address"
              name="userAddress"
              onChange={() => {}}
              placeholder=""
              type=""
              error=""
            />
            <InputElement
              id="userCity"
              label="City"
              name="userCity"
              onChange={() => {}}
              placeholder=""
              type=""
              error=""
            />
            <div className={style.inputs_row}>
              <InputElement
                id="userState"
                label="State"
                name="userState"
                onChange={() => {}}
                placeholder=""
                type=""
                error=""
              />
              <InputElement
                id="userZipCode"
                label="Zip Code"
                name="userZipCode"
                onChange={() => {}}
                placeholder=""
                type=""
                error=""
              />
            </div>
            <InputElement
              id="userPhoneNumber"
              label="Phone Number"
              name="userPhoneNumber"
              onChange={() => {}}
              placeholder=""
              type=""
              error=""
            />
          </div>
          <h2>Payment Method</h2>
          <div className={style.paymentMethod}>
            <div
              className={style.inputs_row}
              onClick={() => {
                selectPaymentMethod("card");
              }}
            >
              {checkedMethod === "card" ? (
                <img src={checkedRadioIcon} alt="Checked radio icon" />
              ) : (
                <img src={unCheckedRadioIcon} alt="unChecked radio icon" />
              )}
              <label htmlFor="Card">Card</label>
            </div>
            <div
              className={style.inputs_row}
              onClick={() => {
                selectPaymentMethod("payPal");
              }}
            >
              {checkedMethod === "payPal" ? (
                <img src={checkedRadioIcon} alt="Checked radio icon" />
              ) : (
                <img src={unCheckedRadioIcon} alt="unChecked radio icon" />
              )}
              <label htmlFor="PayPal">PayPal</label>
            </div>
            <div
              className={style.inputs_row}
              onClick={() => {
                selectPaymentMethod("cash");
              }}
            >
              {checkedMethod === "cash" ? (
                <img src={checkedRadioIcon} alt="Checked radio icon" />
              ) : (
                <img src={unCheckedRadioIcon} alt="unChecked radio icon" />
              )}
              <label htmlFor="Cash">Cash</label>
            </div>
          </div>
          <h3>
            Total<span>${totalAmount.toFixed(2)}</span>
          </h3>
          <button>Place Order</button>
        </div>
      </div>
    </>
  );
}
