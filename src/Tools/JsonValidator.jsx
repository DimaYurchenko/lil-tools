import React, { useState } from "react";

const placeholder = JSON.stringify(
  {
    name: "Alice",
    age: 25,
    city: "London",
    isStudent: true,
    hobbies: ["music", "travel"],
  },
  null,
  2
);

const JsonValidator = () => {
  const [inputJson, setInputJson] = useState(placeholder);
  const [outputJson, setOutputJson] = useState(placeholder);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const jsonText = event.target.value;
    setInputJson(jsonText);

    try {
      const parsedJson = JSON.parse(jsonText);
      setOutputJson(JSON.stringify(parsedJson, null, 2));
      setError("");
    } catch (e) {
      setOutputJson("");
      setError(e.message);
    }
  };

  const handleClear = () => {
    setInputJson("");
    setOutputJson("");
    setError("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outputJson);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
  };

  return (
    <div className="w-full flex gap-4 m-5">
      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4">
          <p className="font-bold text-xl">Input</p>
          <button className="btn btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
        <textarea
          className="textarea textarea-primary h-full block w-full font-mono"
          value={inputJson}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4">
          <p className="font-bold text-xl">Output</p>
          <button className="btn btn-primary" onClick={handleCopy}>
            Copy
          </button>
        </div>
        <textarea
          className="textarea textarea-primary h-full block w-full font-mono"
          readOnly={true}
          value={error ? error : outputJson}
        />
      </div>
    </div>
  );
};

export default JsonValidator;
