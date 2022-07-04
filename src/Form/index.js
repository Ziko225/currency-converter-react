import { useState } from "react";
import { Input, Select, Block, Bottom, Error } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const { date, rates, status } = useRatesData();

  const [currencyFrom, setCurrencyFrom] = useState("PLN");
  const onSelectChangeFrom = ({ target }) => setCurrencyFrom(target.value)

  const [currencyTo, setCurrencyto] = useState("USD");
  const onSelectChangeTo = ({ target }) => setCurrencyto(target.value)

  const [amount, setAmmount] = useState("");
  const ammountChange = ({ target }) => setAmmount(target.value)

  const result = (amount * rates[currencyTo]) / rates[currencyFrom]

  if (status === "error") {
    return <Error>Ups, coś poszło nie tak!</Error>
  } else if (status === "loading") {
    return <h2>loading . . .</h2>
  }
  return (
    <form >
      <Block>
        <label>
          <Input placeholder="Wpisz kwotę"
            min="0"
            type="number"
            value={amount}
            onChange={ammountChange}
          />
        </label>
        <label>
          <Select
            name="currencyFrom"
            value={currencyFrom}
            onChange={onSelectChangeFrom}
          >
            {Object.keys(rates).map((currency) => (
              <option
                key={currency}
                value={currency}
              >{currency}</option>
            ))}
          </Select>
        </label>
      </Block>
      <Block>
        <label>
          <Input
            disabled
            value={result < 0 ? "N/A" : result.toFixed(2)
              &&
              currencyFrom === currencyTo ? "same currency detected" : result.toFixed(2)} />
        </label>
        <label>
          <Select
            grey
            name="currencyTo"
            value={currencyTo}
            onChange={onSelectChangeTo} >
            {Object.keys(rates).map((currency) => (
              <option
                key={currency}
                value={currency}
              >{currency}</option>
            ))}
          </Select>
        </label>
      </Block>
      <Bottom>kursy walut pobierane są bezpośrednio z baz danych Komisji Europejskiej.</Bottom>
      <Bottom>Aktualne na dzień: {date}</Bottom>
    </form>
  );
};

export default Form;