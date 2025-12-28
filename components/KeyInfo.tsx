import React from "react";

const KeyInfo: React.FC = () => (
  <div className="bg-gray-900 p-4 rounded-lg text-white max-w-md mx-auto my-4">
    <h2 className="text-xl font-bold mb-2">🔑 Key Information</h2>
    <div className="mb-2">
      <strong>Public Key:</strong> Used to lock files. Safe to share.
    </div>
    <div>
      <strong>Private Key:</strong> Used to unlock files. Never share. Losing it = permanent loss.
    </div>
  </div>
);

export default KeyInfo;
