import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from 'react-redux'
import ShowExpense from "./ShowExpense";
import Transaction from "./Transaction";
import ExpenseChart from "./ExpenseChart";
import ExpensePage from "./ExpensePage";
import IncomePage from "./IncomePage";
import "./styles.css";

function MainExpenseTracker() {
  const [showTransaction, setShowTransaction] = useState(false);
  const allData = useSelector(state => state.expenses);
  const [expense, setExpense] = useState([]);
  const [income, setIncome] = useState([]);

  console.log("All Data:", allData);

  useEffect(() => {
    if (Array.isArray(allData) && allData.length > 0) {
      filterIncomeAndExpense();
    } else {
      setExpense([]);
      setIncome([]);
    }
  }, [allData]);

  const filterIncomeAndExpense = () => {
    const filteredExpense = allData.filter((item) => item.type === "expense");
    const filteredIncome = allData.filter((item) => item.type === "income");
    setExpense(filteredExpense);
    setIncome(filteredIncome);
  };

  const totalIncome = useMemo(() => {
    return income.reduce((sum, item) => sum + item.amount, 0);
  }, [income]);

  const totalExpense = useMemo(() => {
    return expense.reduce((sum, item) => sum + item.amount, 0);
  }, [expense]);

  const balanceLeft = totalIncome - totalExpense;


  return (
    <>
      <div>
        <div className="header">
          <h1>Expense Tracker</h1>
          <button onClick={() => setShowTransaction((prev) => !prev)}>
            Add New Tranaction
          </button>
          {showTransaction ? (
            <div>
              <Transaction />
            </div>
          ) : null}
        </div>
        <div>
          <ShowExpense
            balance = {balanceLeft}
            income={totalIncome}
            expense={totalExpense}
          />
        </div>
        <div>
          <div>
            <ExpensePage />
          </div>
          <div>
            <IncomePage />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainExpenseTracker;
