import React from 'react';

function ExpensePage({ label = "", income = 0, expense = 0 }) {
  return (
    <div>
      <div className='amount-card'>
        <h3>{label}</h3>
        <h3>{income !== 0 ? income : expense}</h3> {/* Display income if it's not zero, otherwise display expense */}
      </div>
    </div>
  );
}

export default ExpensePage;