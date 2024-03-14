import React from "react";

const scaleName = {
  c: "celsius",
  f: "fahrenheit",
};

export default function TempInput({ scale, temperature, onTempChange }) {
  const onChangeHandle = (event) => {
    onTempChange(event.target.value);
  };

  return (
    <div>
      <div className=" inputContainer my-5 ">
        <form>
          <label>
            <h3>Enter temperature in {scaleName[scale]} </h3>
          </label>
          <input
            name="temperature"
            type="number"
            className="mx-2"
            value={temperature}
            onChange={onChangeHandle}
          />
        </form>
      </div>
    </div>
  );
}
