import "./style.css";

const Form = () => (
  <form>
    <div className="form__block">
      <label>
        <input placeholder="Wpisz kwotę" min="0" type="number" className="form__input" />
      </label>
      <label>
        <select className="form__select" name="currencyFrom">
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
        <input disabled className="form__input" />
      </label>
      <label>
        <select className="form__select form__select--backgroundColorGrey" name="currencyTo">
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

export default Form