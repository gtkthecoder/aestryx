import React, { useState } from "react";

const Encrypt: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const handleEncrypt = () => {
    if (!file) return alert("Select a file first!");
    // placeholder for crypto logic
    alert(`Encrypting ${file.name}...`);
  };

  return (
    <div className="p-4 bg-gray-800 rounded my-4 text-white">
      <h2 className="font-bold mb-2">Encrypt File</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleEncrypt}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
      >
        Encrypt
      </button>
    </div>
  );
};

export default Encrypt;
