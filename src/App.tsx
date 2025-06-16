import React, { useState } from 'react';
import DMGenerator from './DMGenerator';

export default function App() {
  const [tab, setTab] = useState<'plan' | 'dm'>('plan');

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <nav className="flex space-x-4 mb-6">
        <button onClick={() => setTab('plan')} className={`px-4 py-2 rounded ${tab === 'plan' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
          Plan
        </button>
        <button onClick={() => setTab('dm')} className={`px-4 py-2 rounded ${tab === 'dm' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
          DM Generator
        </button>
      </nav>
      {tab === 'plan' ? <div>Your plan here...</div> : <DMGenerator />}
    </div>
  );
}
