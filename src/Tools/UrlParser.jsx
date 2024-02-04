import { useState } from "react";

const UrlParser = () => {
  const [input, setInput] = useState("");
  const [protocol, setProtocol] = useState("");
  const [host, setHost] = useState("");
  const [path, setPath] = useState("");
  const [query, setQuery] = useState("");
  const [queryJson, setQueryJson] = useState("");

  const parseUrl = (text) => {
    try {
      const url = new URL(text);
      setProtocol(url.protocol);
      setHost(url.host);
      setPath(url.pathname);
      setQuery(url.search);
      setQueryJson(JSON.stringify(Object.fromEntries(url.searchParams)));
    } catch (e) {
      setProtocol("");
      setHost("");
      setPath("");
      setQuery("");
      setQueryJson("");
    }
  };

  return (
    <div className="w-full flex gap-4 m-5">
      <div className="w-full h-full">
        <div className="flex items-center mb-4 gap-4">
          <p className="font-bold text-xl">URL</p>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setInput("");
              parseUrl("");
            }}
          >
            Clear
          </button>
        </div>
        <textarea
          className="textarea textarea-primary h-full block w-full"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            parseUrl(e.target.value);
          }}
        />
      </div>

      <div className="w-full h-full flex flex-col gap-4">
        <div>
          <p className="font-bold text-sm mb-2">Protocol</p>
          <div className="flex gap-2">
            <input
              readOnly
              className="input input-bordered input-primary w-full"
              value={protocol}
            />
            <button
              className="btn btn-primary"
              onClick={async () => {
                await navigator.clipboard.writeText(protocol);
              }}
            >
              Copy
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-sm mb-2">Host</p>
          <div className="flex gap-2">
            <input
              readOnly
              className="input input-bordered input-primary w-full"
              value={host}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={async () => {
                await navigator.clipboard.writeText(host);
              }}
            >
              Copy
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-sm mb-2">Path</p>
          <div className="flex gap-2">
            <input
              readOnly
              className="input input-bordered input-primary w-full"
              value={path}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={async () => {
                await navigator.clipboard.writeText(path);
              }}
            >
              Copy
            </button>
          </div>
        </div>

        <div>
          <p className="font-bold text-sm mb-2">Query</p>
          <div className="flex gap-2">
            <input
              readOnly
              className="input input-bordered input-primary w-full"
              value={query}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={async () => {
                await navigator.clipboard.writeText(query);
              }}
            >
              Copy
            </button>
          </div>
        </div>
        {queryJson && (
          <div className="h-full">
            <p className="font-bold text-sm mb-2">Query JSON</p>
            <textarea
              className="textarea textarea-primary h-full block w-full"
              readOnly={true}
              value={JSON.stringify(JSON.parse(queryJson), null, 2)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlParser;
