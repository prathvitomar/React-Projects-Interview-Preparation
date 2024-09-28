import React, { useState } from 'react'
import Input from './Input'

function Transaction() {
  const [checkBoxOptions, setCheckBoxOptions] = useState(["income", "expense"]);
  // const [checkBoxOptions, setCheckBoxOptions] = ;
  

  const checkBoxSelect = (args)=>{

  }

  const handleDescription = (args)=>{

  }

  const handleAmount = (args)=>{

  }

  return (
    <>
    <div>
      <div>
        <Input
        title='Enter Description'
        placeholder='Enter Description Please'
        handleChange={(args) => handleDescription(args)}
        />
      </div>
      <div>
        <Input
        title='Enter Amount'
        placeholder='Enter Amount Please'
        handleChange={(args) => handleAmount(args)}
        />
      </div>
      <div>
        <input 
        type="checkbox" 
        value={checkBoxOptions}
        onChange={checkBoxSelect}
        />
      </div>

    </div>
    
    </>
  )
}

export default Transaction