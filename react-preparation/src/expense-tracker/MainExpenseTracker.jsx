import React from 'react'
import ShowExpense from './ShowExpense'
import Transaction from './Transaction'
import ExpenseChart from './ExpenseChart'
import ExpensePage from './ExpensePage'
import IncomePage from './IncomePage'
import './styles.css'

function MainExpenseTracker() {

  return (
    <>
      <div>
        <div className='header'>
          <h1>Expense Tracker</h1>
          <div>
              <Transaction/>
          </div>
        </div>
        <div>
            <ShowExpense/>
        </div>
        <div>
            <div>
              <ExpensePage/>
            </div>
            <div>
              <IncomePage/>
            </div>
        </div>
      </div>
    </>
  )
}

export default MainExpenseTracker