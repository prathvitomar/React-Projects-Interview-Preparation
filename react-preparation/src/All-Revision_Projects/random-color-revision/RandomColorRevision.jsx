import React, { useEffect, useState } from "react";

function RandomColorRevision() {
  const [colorCode, setColorCode] = useState("");
  const [colorType, setColorType] = useState("");

  useEffect(()=> {
    if(colorType === "HEX") setColorCode(generateHexColor());
    else setColorCode(generateRgbColor());
  },[colorType])

  function generateHexColor() {
    let allDigits = "ABCDEF0123456789";
    let result = "#";
    for (let i = 0; i < 6; i++) {
      result += allDigits[Math.floor(Math.random() * 16)];
    }
    return result;
  }

  function generateRgbColor() {
    let result = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    return result;
  }

  function generateRandom() {
    if (colorType === "HEX") {
      setColorCode(generateHexColor());
    } else if (colorType === "RGB") {
      setColorCode(generateRgbColor());
    } else {
      alert("Please Select Color Code First");
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: colorCode,
          height: "100vh",
          width: "100wh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <button onClick={() => setColorType("HEX")}>Create HEX Color</button>
          <button onClick={() => setColorType("RGB")}>Create RGB Color</button>
          <button onClick={generateRandom}>Generate Random Color</button>
        </div>
        <div>
          <h1>{colorCode ? colorCode : "No Color Generated Yet"}</h1>
        </div>
      </div>
    </>
  );
}

export default RandomColorRevision;
