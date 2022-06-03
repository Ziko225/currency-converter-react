import { useState } from "react";
import "./style.css";


const Form = () => {
  // currency From 
  const [currencyFrom, setCurrencyFrom] = useState("4.44");
  const onSelectChangeFrom = ({ target }) => setCurrencyFrom(target.value)

  // currency to 
  const [currencyTo, setCurrencyto] = useState("1");
  const onSelectChangeTo = ({ target }) => setCurrencyto(target.value)

  // ammount
  const [ammount, setAmmount] = useState("");
  const ammountChange = ({ target }) => setAmmount(target.value)

  // result
  let result = (+ammount * +currencyFrom) / +currencyTo




  return (
    <form >
      <div className="form__block">
        <label>
          <input placeholder="Wpisz kwotę"
            min="0"
            type="number"
            className="form__input"
            value={ammount}
            onChange={ammountChange}
          />
        </label>
        <label>
          <select className="form__select" name="currencyFrom" value={currencyFrom} onChange={onSelectChangeFrom}>
            <option value="1">PLN</option>
            <option value="4.44">USD</option>
            <option value="4.68">EUR</option>
            <option value="0.19">CZK</option>
            <option value="5.46">GBP</option>
            <option value="4.47">CHF</option>
            <option value="0.15">UAH</option>
          </select>
        </label>
      </div>
      <div className="form__block">
        <label>
          <input
            disabled
            className="form__input"
            value={
              result < 0 ? result = "N/A" : result.toFixed(2)
                &&
                currencyFrom === currencyTo ? result = "same currency detected" : +result.toFixed(2)
            } />
        </label>
        <label>
          <select
            className="form__select form__select--backgroundColorGrey"
            name="currencyTo"
            value={currencyTo}
            onChange={onSelectChangeTo} >
            <option value="4.44">USD</option>
            <option value="4.68">EUR</option>
            <option value="0.19">CZK</option>
            <option value="5.46">GBP</option>
            <option value="4.47">CHF</option>
            <option value="0.15">UAH</option>
            <option value="1">PLN</option>
          </select>
        </label>
      </div>
    </form>
  )
}
export default Form