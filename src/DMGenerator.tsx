import React, { useState } from 'react';

export default function DMGenerator() {
  const [name, setName] = useState('');
  const [niche, setNiche] = useState('');
  const [skill, setSkill] = useState('');
  const [tone, setTone] = useState('Friendly');
  const [result, setResult] = useState('');

  const generate = () => {
    const intro = `Hi ${name},`;
    const personalize = `I saw your work in ${niche} and loved it.`;
    const pitch = `I'm a freelance ${skill} and help people in ${niche} improve their results.`;
    const cta = `Would you be open to discussing a quick idea?`;
    setResult([intro, personalize, pitch, cta, "Thanks,\n[Your Name]"].join("\n\n"));
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Client DM Generator</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Recipient Name" className="border mb-2 p-2 w-full" />
      <input value={niche} onChange={e => setNiche(e.target.value)} placeholder="Their Niche/Business" className="border mb-2 p-2 w-full" />
      <input value={skill} onChange={e => setSkill(e.target.value)} placeholder="Your Skill" className="border mb-2 p-2 w-full" />
      <select value={tone} onChange={e => setTone(e.target.value)} className="border mb-2 p-2 w-full">
        {['Friendly', 'Casual', 'Professional'].map(t => <option key={t}>{t}</option>)}
      </select>
      <button onClick={generate} className="bg-blue-500 text-white p-2 w-full">Generate DM</button>
      {result && <>
        <textarea readOnly className="border p-2 w-full h-32 mt-4" value={result} />
        <button onClick={() => navigator.clipboard.writeText(result)} className="bg-green-500 text-white p-2 w-full mt-2">Copy to Clipboard</button>
      </>}
    </div>
  );
}
