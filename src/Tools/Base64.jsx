import React, { useState } from "react";

const Base64 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = () => {
    const encoded = btoa(input);
    setOutput(encoded);
  };

  const handleDecode = () => {
    try {
      const decoded = atob(input);
      setOutput(decoded);
    } catch (error) {
      setOutput("Invalid base64 string");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="w-full flex gap-4 m-5">
      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4">
          <p className="font-bold text-xl">Input</p>
          <button className="btn btn-primary" onClick={handleEncode}>
            Encode
          </button>
          <button className="btn btn-primary" onClick={handleDecode}>
            Decode
          </button>
          <button className="btn btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
        <textarea
          className="textarea textarea-primary h-full block w-full font-mono"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4">
          <p className="font-bold text-xl">Output</p>
          <button
            className="btn btn-primary"
            onClick={() => navigator.clipboard.writeText(output)}
          >
            Copy
          </button>
        </div>
        <textarea
          className="textarea textarea-primary h-full block w-full font-mono"
          readOnly={true}
          value={output}
        />
      </div>
      {/* <h2>Base64 Encoder/Decoder</h2>
      <div>
        <label>Input Text:</label>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleEncode}>Encode</button>
      </div>
      <div>
        <label>Encoded Text:</label>
        <div>{encodedText}</div>
      </div>
      <div>
        <button onClick={handleDecode}>Decode</button>
      </div>
      <div>
        <label>Decoded Text:</label>
        <div>{decodedText}</div>
      </div> */}
    </div>
  );
};

export default Base64;
