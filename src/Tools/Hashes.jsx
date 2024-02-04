import React, { useState } from "react";
import * as CryptoJS from "crypto-js";

const Hashes = () => {
  const [input, setInput] = useState("");
  const [md5Hash, setMd5Hash] = useState("");
  const [sha1Hash, setSha1Hash] = useState("");
  const [sha224Hash, setSha224Hash] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");
  const [sha384Hash, setSha384Hash] = useState("");
  const [sha512Hash, setSha512Hash] = useState("");
  const [keccak256Hash, setKeccak256Hash] = useState("");

  const generateMd5Hash = (input) => setMd5Hash(CryptoJS.MD5(input).toString());
  const generateSha1Hash = (input) =>
    setSha1Hash(CryptoJS.SHA1(input).toString());
  const generateSha224Hash = (input) =>
    setSha224Hash(CryptoJS.SHA224(input).toString());

  const generateSha256Hash = (input) =>
    setSha256Hash(CryptoJS.SHA256(input).toString());

  const generateSha384Hash = (input) =>
    setSha384Hash(CryptoJS.SHA384(input).toString());

  const generateSha512Hash = (input) =>
    setSha512Hash(CryptoJS.SHA512(input).toString());

  const generateKeccak256Hash = (input) =>
    setKeccak256Hash(CryptoJS.SHA3(input, { outputLength: 256 }).toString());

  const generateHashes = (input) => {
    try {
      if (input) {
        generateMd5Hash(input);
        generateSha1Hash(input);
        generateSha224Hash(input);
        generateSha256Hash(input);
        generateSha384Hash(input);
        generateSha512Hash(input);
        generateKeccak256Hash(input);
      }
    } catch (_) {
      generateMd5Hash("");
      generateSha1Hash("");
      generateSha224Hash("");
      generateSha256Hash("");
      generateSha384Hash("");
      generateSha512Hash("");
      generateKeccak256Hash("");
    }
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInput(inputText);
    generateHashes(inputText);
  };

  const handleClear = () => {
    setInput("");
    setMd5Hash("");
    setSha1Hash("");
    setSha224Hash("");
    setSha256Hash("");
    setSha384Hash("");
    setSha512Hash("");
    setKeccak256Hash("");
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
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full h-full">
        {/* Md5 */}
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Md5</p>
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => navigator.clipboard.writeText(md5Hash)}
          >
            Copy
          </button>
        </div>
        <input
          value={md5Hash}
          readOnly={true}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />

        {/* Sha1 */}
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Sha1</p>
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => navigator.clipboard.writeText(sha1Hash)}
          >
            Copy
          </button>
        </div>
        <input
          value={sha1Hash}
          readOnly={true}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />

        {/* Sha224 */}
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Sha224</p>
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => navigator.clipboard.writeText(sha224Hash)}
          >
            Copy
          </button>
        </div>
        <input
          value={sha224Hash}
          readOnly={true}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />

        {/* Sha 256 */}
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Sha256</p>
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => navigator.clipboard.writeText(sha256Hash)}
          >
            Copy
          </button>
        </div>
        <input
          value={sha256Hash}
          readOnly={true}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />

        {/* Sha 384 */}
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Sha384</p>
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => navigator.clipboard.writeText(sha384Hash)}
          >
            Copy
          </button>
        </div>
        <input
          value={sha384Hash}
          readOnly={true}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />

        {/* Sha 512 */}
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Sha512</p>
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => navigator.clipboard.writeText(sha512Hash)}
          >
            Copy
          </button>
        </div>
        <input
          value={sha512Hash}
          readOnly={true}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />

        {/* Keccak 256 */}
        <div className="flex items-center mb-2 gap-4">
          <p className="font-bold text-xl">Keccak256</p>
          <button
            className="btn btn-primary btn-sm ml-auto"
            onClick={() => navigator.clipboard.writeText(keccak256Hash)}
          >
            Copy
          </button>
        </div>
        <input
          value={keccak256Hash}
          readOnly={true}
          className="input input-bordered input-primary w-full font-mono mb-2"
        />
      </div>
    </div>
  );
};

export default Hashes;
