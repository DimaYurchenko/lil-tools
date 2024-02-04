import React, { useState } from "react";

const AsciiConverter = () => {
  const [text, setText] = useState("");
  const [ascii, setAscii] = useState("");

  const handleConvertToASCII = (e) => {
    setText(e.target.value);
    const ascii = text
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
    setAscii(ascii);
  };

  const handleConvertToText = (e) => {
    setAscii(e.target.value);
    const text = ascii
      .split(" ")
      .map((code) => String.fromCharCode(parseInt(code.trim(), 10)))
      .join("");
    setText(text);
  };

  const handleClear = () => {
    setText("");
    setAscii("");
  };

  return (
    <div className="w-full flex gap-4 m-5">
      <div className="w-full h-full">
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Text</p>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigator.clipboard.writeText(text)}
          >
            Copy
          </button>
        </div>
        <input
          onChange={handleConvertToASCII}
          value={text}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">ASCII</p>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => navigator.clipboard.writeText(ascii)}
          >
            Copy
          </button>
        </div>
        <input
          onChange={handleConvertToText}
          value={ascii}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />
        <button className="btn btn-secondary" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default AsciiConverter;
