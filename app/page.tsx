import React, { useState } from 'react';
import WarningGate from '../components/WarningGate';
import KeyInfo from '../components/KeyInfo';
import Encrypt from '../components/Encrypt';
import Decrypt from '../components/Decrypt';

export default function Page() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen p-6">
      <WarningGate onAccept={() => setAccepted(true)} />
      {accepted && (
        <>
          <h1 className="text-4xl font-bold text-center mb-6">Aestryx</h1>
          <KeyInfo />
          <Encrypt />
          <Decrypt />
        </>
      )}
    </div>
  );
}
