import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import ShowExpense from "./ShowExpense";
import Transaction from "./Transaction";
import ExpenseChart from "./ExpenseChart";
import ExpensePage from "./ExpensePage";
import IncomePage from "./IncomePage";
import "./styles.css";

function MainExpenseTracker() {
  const [showTransaction, setShowTransaction] = useState(false);
  const expense = useSelector((state) => state.expenses.expense);
  const income = useSelector((state) => state.expenses.income);

  console.log("Expense :", expense);
  console.log("Income :", income);

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
            balance={balanceLeft}
            income={totalIncome}
            expense={totalExpense}
          />
        </div>
        <div className="expense-portion">
          <div>
            <label>Income</label>
            {income.map((item) => (
              <div key={item.id}>
                <ExpensePage label={item.description} income={item.amount} />
              </div>
            ))}
          </div>
          <div>
            <label>Expense</label>
            {expense.map((item) => (
              <div key={item.id}>
                <ExpensePage label={item.description} expense={item.amount} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainExpenseTracker;
