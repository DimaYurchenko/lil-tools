import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UUIDGenerator = () => {
  const [uuid, setUuid] = useState(uuidv4());

  const generateNewAndCopy = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
    navigator.clipboard.writeText(newUuid);
  };

  return (
    <div className="w-full flex flex-col gap-4 m-5">
      <p className="font-bold text-xl">UUIDv4</p>
      <input
        className="input input-bordered input-primary w-full font-mono"
        value={uuid}
        readOnly={true}
      />
      <button className="btn btn-primary" onClick={generateNewAndCopy}>
        Generate & Copy
      </button>
    </div>
  );
};

export default UUIDGenerator;
