import React, { useState, useEffect } from 'react';

const WarningGate: React.FC<{ onAccept: () => void }> = ({ onAccept }) => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('aestryxAccepted');
    if (stored === 'true') {
      setAccepted(true);
      onAccept();
    }
  }, [onAccept]);

  const handleAccept = () => {
    localStorage.setItem('aestryxAccepted', 'true');
    setAccepted(true);
    onAccept();
  };

  if (accepted) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white p-6 z-50">
      <h1 className="text-3xl font-bold mb-4">⚠️ Warning</h1>
      <p className="mb-6 text-center max-w-lg">
        Only encrypt your own files. Do not use for malicious purposes. The developer cannot
        recover your files or keys.
      </p>
      <button
        onClick={handleAccept}
        className="px-6 py-3 bg-green-500 hover:bg-green-400 rounded font-bold"
      >
        I Accept
      </button>
    </div>
  );
};

export default WarningGate;
