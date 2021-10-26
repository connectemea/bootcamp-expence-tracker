import "./App.css";
import { useState } from "react";
function App() {
  const [expenceList, setExpenceList] = useState([]);
  const [expence, setExpence] = useState({});
  const handleExpenceChange = (event) =>
    setExpence({
      ...expence,
      [event.target.name]: event.target.value,
    });
  const clearExpence = () => setExpence({});
  const handleAddExpence = () => {
    setExpenceList(expenceList.length ? [...expenceList, expence] : [expence]);
    clearExpence();
  };
  const getSumTotal = (list) => {
    const values = list.map((expence) => expence.amount);
    return values.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue),
      0
    );
  };

  const getTotalIncome = () =>
    getSumTotal(expenceList.filter((expence) => expence.amount >= 0));
  const getTotalExpence = () =>
    getSumTotal(expenceList.filter((expence) => expence.amount < 0));

  return (
    <div>
      <div>
        <p>{expenceList.length ? getTotalIncome() : null}</p>
        <p>{expenceList.length ? getTotalExpence() : null}</p>
      </div>
      <div>
        <h1>Add expence</h1>
        <div>
          <input
            type="text"
            name="label"
            value={expence?.label || ""}
            onChange={handleExpenceChange}
          />
          <input
            type="number"
            name="amount"
            value={expence?.amount || ""}
            onChange={handleExpenceChange}
          />
        </div>
        <button onClick={handleAddExpence}>Add</button>
      </div>
      <div>
        {expenceList.length
          ? expenceList.map((expence) => (
              <div>
                <h3>{expence.label}</h3>
                <span>{expence.amount}</span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
