import React, { useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "./store/expenseSlice";

function Transaction() {
  const dispatch = useDispatch();
  const initialState = {
    description: "",
    amount: "",
    type: "",
  };
  const [formValues, setformValues] = useState(initialState);
  const checkBoxes = ["income", "expense"];
  
  const handleInputValue = (e) => {
    const {name, value} = e.target;
    setformValues({...formValues, [name] : value});
  };

  const checkBoxSelect = (e) => {
    setformValues({...formValues, type : e.target.value})
  };

  const handleAdd = () => {
    const {description, amount, type} = formValues;
    if (!description || !amount || !type) {
      alert("Please Fill all Fields");
      return;
    }
    const transactionData = {
      description,
      amount: parseFloat(amount),
      type: type,
    };
    dispatch(addTransaction(transactionData));
    console.log(transactionData)
    setTimeout(() => {
      setformValues(initialState);
    }, 100);
  };

  const handleCancel = () => {
    setformValues(initialState)
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
        >
          <div>
            <Input
              name="description"
              value={formValues.description}
              title="Enter Description"
              placeholder="Enter Description Please"
              handleChange={handleInputValue}
            />
          </div>
          <div>
            <Input
              name="amount"
              value={formValues.amount}
              title="Enter Amount"
              placeholder="Enter Amount Please"
              type="number"
              handleChange={handleInputValue}
            />
          </div>
          <div>
            {checkBoxes.map((checkBox) => (
              <div key={checkBox}>
                <label>{checkBox}</label>
                <input
                  name="type"
                  label={checkBox}
                  type="radio"
                  value={checkBox}
                  checked={formValues.type === checkBox}
                  onChange={checkBoxSelect}
                />
              </div>
            ))}
          </div>
          <div>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Transaction;
