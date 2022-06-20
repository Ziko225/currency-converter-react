import { useState } from "react";
import { Input, Select, Block } from "./styled";

const Form = () => {
  const [currencyFrom, setCurrencyFrom] = useState("4.44");
  const onSelectChangeFrom = ({ target }) => setCurrencyFrom(target.value)

  const [currencyTo, setCurrencyto] = useState("1");
  const onSelectChangeTo = ({ target }) => setCurrencyto(target.value)

  const [ammount, setAmmount] = useState("");
  const ammountChange = ({ target }) => setAmmount(target.value)

  let result = (+ammount * +currencyFrom) / +currencyTo

  return (
    <form >
      <Block>
        <label>
          <Input placeholder="Wpisz kwotę"
            min="0"
            type="number"
            value={ammount}
            onChange={ammountChange}
          />
        </label>
        <label>
          <Select name="currencyFrom" value={currencyFrom} onChange={onSelectChangeFrom}>
            <option value="1">PLN</option>
            <option value="4.44">USD</option>
            <option value="4.68">EUR</option>
            <option value="0.19">CZK</option>
            <option value="5.46">GBP</option>
            <option value="4.47">CHF</option>
            <option value="0.15">UAH</option>
          </Select>
        </label>
      </Block>
      <Block>
        <label>
          <Input
            disabled
            value={
              result < 0 ? result = "N/A" : result.toFixed(2)
                &&
                currencyFrom === currencyTo ? result = "same currency detected" : +result.toFixed(2)
            } />
        </label>
        <label>
          <Select
            grey
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
          </Select>
        </label>
      </Block>
    </form>
  );
};

export default Form;