import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState("Lil Tools");

  const handleTextChange = (input) => {
    setQrText(input);
  };

  const onImageDownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      const borderSize = 10;
      const borderColor = "#ffffff";

      canvas.width = img.width + 2 * borderSize;
      canvas.height = img.height + 2 * borderSize;

      ctx.fillStyle = borderColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const xPosition = (canvas.width - img.width) / 2;
      const yPosition = (canvas.height - img.height) / 2;
      ctx.drawImage(img, xPosition, yPosition);

      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="w-full flex flex-col gap-4 m-5">
      <div>
        <p className="font-bold text-xl mb-2">Text</p>
        <div className="flex gap-2">
          <input
            className="input input-primary w-full"
            value={qrText}
            onChange={(e) => handleTextChange(e.currentTarget.value)}
          />
          <button
            className="btn btn-primary"
            onClick={async () => {
              await navigator.clipboard.writeText(qrText);
            }}
          >
            Copy
          </button>
        </div>
        {qrText && (
          <div className="mt-5 flex gap-5 items-end">
            <div className="flex border-white border-8">
              <QRCode
                size={256}
                bgColor="white"
                fgColor="black"
                viewBox={`0 0 256 256`}
                value={qrText}
                id="QRCode"
              />
            </div>
            <button className="btn btn-primary" onClick={onImageDownload}>
              Download
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
