import React from 'react'
import ExpenseChart from './ExpenseChart'

function ShowExpense({
  balance,
  income,
  expense
}) {

  return (
    <>
    <div className='show-expense-main'>
      <div>
        <h1>Balance is ${balance}</h1>
        <div>
          <h1>$ {income}</h1>
          <p>Total Income</p>
        </div>
        <div>
          <h1>$ {expense}</h1>
          <p>Total Expense</p>
        </div>
      </div>
      <div>
        <ExpenseChart
        income={income}
        expense={expense}
        />
      </div>
    </div>
    </>
  )
}

export default ShowExpense