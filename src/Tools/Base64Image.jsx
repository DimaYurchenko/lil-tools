import React, { useState } from "react";

const Base64Image = () => {
  const [base64String, setBase64String] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64String(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex gap-4 m-5">
      <div className="w-full h-full">
        <p className="font-bold text-xl mb-2">Input Image</p>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full"
          accept="image/*"
          onChange={handleImageChange}
        />
        {base64String && (
          <img
            src={base64String}
            className="rounded-lg mt-2"
            alt="Converted Image"
          />
        )}
      </div>

      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4">
          <p className="font-bold text-xl">Base64 encoded string</p>
          <button
            className="btn btn-primary"
            onClick={() => navigator.clipboard.writeText(base64String)}
          >
            Copy
          </button>
        </div>
        <textarea
          className="textarea textarea-primary h-full block w-full"
          value={base64String}
          readOnly={true}
        />
      </div>
    </div>
  );
};

export default Base64Image;
