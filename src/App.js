import "./App.css";
import { useState } from "react";
import styles from "./styles.module.css";
function App() {
  // state for expence list (array)
  const [expenceList, setExpenceList] = useState([]);

  // state for expence inputs values
  const [expence, setExpence] = useState({});

  //handle the onChange event of expence app
  const handleExpenceChange = (event) =>
    setExpence({
      ...expence,
      [event.target.name]: event.target.value,
    });

  // Clear the expence state
  const clearExpence = () => setExpence({});

  // handle add expence event in the app
  const handleAddExpence = () => {
    setExpenceList(expenceList.length ? [...expenceList, expence] : [expence]);
    clearExpence();
  };

  // To get sum total of the expence obj
  const getSumTotal = (list) => {
    const values = list.map((expence) => expence.amount);
    return values.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue),
      0
    );
  };

  // To get the total income from the expence list
  const getTotalIncome = () =>
    getSumTotal(expenceList.filter((expence) => expence.amount >= 0));

  // To get the total expence from the expence list
  const getTotalExpence = () =>
    getSumTotal(expenceList.filter((expence) => expence.amount < 0));

  // To get the balance amount
  const getBalance = () => getSumTotal(expenceList);

  return (
    <div className={styles.contentWrapper}>
      {/* <div>
        <p>{expenceList.length ? getBalance() : 0} </p>
        <div>
          <p>{expenceList.length ? getTotalIncome() : 0}</p>
          <p>{expenceList.length ? getTotalExpence() : 0}</p>
        </div>
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
      </div> */}
    </div>
  );
}

export default App;
