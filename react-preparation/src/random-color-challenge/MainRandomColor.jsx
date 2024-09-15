import React, { useState } from 'react'

function MainRandomColor() {
    const [color, setColor] = useState("");
    const [colorName, setColorName] = useState("");

    const generateHexColor = ()=>{
        setColor("hex");
    }

    const generateRGBColor = ()=>{
        setColor("rgb");
    }

    const generatorRandomColor = ()=>{
        if(color === "hex"){
        const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        setColor("hex");
        setColorName(hex);
        }
        else if(color === "rgb"){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor("rgb");
        setColorName(`rgb(${r}, ${g}, ${b})`);
        }
        else{
            return (
                <h1>Invalid Color Palette</h1>
            )
        }

    }

  return (
    <>
    <div style={{backgroundColor : colorName}}>
        <button type='button' onClick={generateHexColor}>Create HEX Color</button>
        <button type='button' onClick={generateRGBColor}>Create RGB Color</button>
        <button type='button' onClick={generatorRandomColor}>Generator Random Color</button>
        <div>
            {
                color === "hex" ? (
                    <>
                    <h1>HEX Color</h1>
                    <h1>{colorName}</h1>
                    </>
                ) :
                (
                    <>
                    <h1>RGB Color</h1>
                    <h1>{colorName}</h1>
                    </>
                )
            }
        </div>
    </div>
    </>
  )
}

export default MainRandomColor