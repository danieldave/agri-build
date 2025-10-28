/*
Agri-Build Initiative — Mobile-friendly React prototype
File: AgriBuild_Website_Prototype.jsx (single-file React component)

How to use:
1) Create a React app (recommended: Vite):
   npm create vite@latest agribuild -- --template react
   cd agribuild
   npm install

2) (Optional but recommended) Use Tailwind via CDN in index.html for quick preview:
   Add this inside <head> of public/index.html (or index.html):
   <script src="https://cdn.tailwindcss.com"></script>

   If you prefer full Tailwind setup, follow Tailwind docs for PostCSS/Vite.

3) Replace src/App.jsx with the contents of this file (or import this component).
4) npm run dev (Vite) or npm start (CRA)

Notes:
- This prototype focuses on mobile-first responsiveness using Tailwind utility classes.
- All data placeholders are local; you can later wire these components to APIs.
- I included accessible form handlers that submit to a mailto: link by default.

*************************************************************************
*/

import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Hero />
        <About />
        <HowItWorks />
        <Transparency />
        <Roadmap />
        <Join />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center text-white font-bold">AB</div>
          <div>
            <div className="text-sm font-semibold">Agri-Build Initiative</div>
            <div className="text-xs text-gray-500">Plant • Grow • Build</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#how" className="hover:text-green-700">How it works</a>
          <a href="#transparency" className="hover:text-green-700">Transparency</a>
          <a href="#join" className="hover:text-green-700">Join</a>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-green-50 text-green-700"
        aria-expanded={open}
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-3 text-sm">
          <a href="#how" className="block py-1">How it works</a>
          <a href="#transparency" className="block py-1">Transparency</a>
          <a href="#join" className="block py-1">Join</a>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">Plant. Grow. Build. Together.</h1>
          <p className="mt-3 text-gray-600">A transparent ecosystem that turns agricultural investment into real community infrastructure — tracked live on our platform.</p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a href="#join" className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-green-600 text-white font-semibold shadow-sm">Join the movement</a>
            <a href="#how" className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-gray-200 text-sm">How it works</a>
          </div>

          <div className="mt-4 text-xs text-gray-500">Share, invest, or volunteer — everyone is an investor in progress.</div>
        </div>

        <div className="w-full md:w-80">
          <div className="rounded-xl overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="farm placeholder" className="w-full h-48 object-cover" />
            <div className="p-3 bg-white">
              <div className="text-sm font-semibold">Pilot Farm: Sunrise Valley</div>
              <div className="text-xs text-gray-500 mt-1">Status: Planting phase — 24 investors • Estimated harvest: 3 months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mt-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-bold">Our Vision & Mission</h2>
        <p className="mt-2 text-gray-600">We connect people, farms, and builders via a transparent digital platform that ensures investments transform into food and homes. Our mission is to create scalable community prosperity through measurable, auditable progress.</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="mt-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold">How it works</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="p-3 bg-green-50 rounded-lg text-center">
              <div className="text-2xl font-bold mb-2">{s.icon}</div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-xs text-gray-600 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: '💸', title: 'Invest', desc: 'Choose a verified farm project and fund seeds or inputs.' },
  { icon: '🌱', title: 'Grow', desc: 'Local farmers manage crops, sharing updates in real time.' },
  { icon: '💰', title: 'Harvest', desc: 'Crops are sold and profits are calculated transparently.' },
  { icon: '🏠', title: 'Build', desc: 'Proceeds fund homes, schools or community structures.' }
];

function Transparency() {
  return (
    <section id="transparency" className="mt-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold">Transparency & Accountability</h3>
        <p className="mt-2 text-gray-600">Everything is visible: investments, expenses, harvest yields, and building milestones. We encourage independent audits and community oversight.</p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Stat title="Verified Projects" value="12" />
          <Stat title="Active Investors" value="324" />
          <Stat title="Funds Tracked" value="₦3.1M" />
        </div>

        <div className="mt-4">
          <div className="text-sm font-semibold">Public Dashboard (prototype)</div>
          <div className="mt-2 p-3 bg-gray-50 rounded">[ Live graphs & blockchain ledger — coming soon ]</div>
        </div>
      </div>
    </section>
  );
}

type StatProps = {
  title: string;
  value: string | number;
};

function Stat({ title, value }: StatProps) {
  return (
    <div className="p-4 bg-white border border-gray-100 rounded-lg text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{title}</div>
    </div>
  );
}



function Roadmap() {
  return (
    <section className="mt-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold">Roadmap & Next Steps</h3>
        <ol className="mt-3 space-y-3 list-decimal list-inside text-gray-700">
          <li><strong>Foundation:</strong> Legal registration, founding volunteers, MVP plan.</li>
          <li><strong>MVP:</strong> Landing site + basic investor flow + join form.</li>
          <li><strong>Pilot:</strong> Launch 1 farm project and 1 build.</li>
          <li><strong>Scale:</strong> Attract partners, NGOs, and impact investors.</li>
        </ol>
      </div>
    </section>
  );
}

function Join() {
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('Investor');
  const [email, setEmail] = React.useState('');

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const subject = encodeURIComponent(`Join Agri-Build: ${role} - ${name}`);
  const body = encodeURIComponent(`Name: ${name}%0ARole: ${role}%0AEmail: ${email}%0A`);
  window.location.href = `mailto:info@agribuild.org?subject=${subject}&body=${body}`;
}


  return (
    <section id="join" className="mt-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold">Join the Movement</h3>
        <p className="mt-2 text-gray-600">Volunteer, invest, or partner — everyone contributes value. Tell us how you want to help.</p>

        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input aria-label="Your name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="col-span-1 sm:col-span-1 p-3 border rounded" />
          <select aria-label="Role" value={role} onChange={(e) => setRole(e.target.value)} className="col-span-1 sm:col-span-1 p-3 border rounded">
            <option>Investor</option>
            <option>Volunteer Developer</option>
            <option>Farmer / Field Lead</option>
            <option>Builder / Engineer</option>
            <option>Partner / NGO</option>
          </select>
          <input aria-label="Email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="col-span-1 sm:col-span-1 p-3 border rounded" />

          <button type="submit" className="col-span-1 sm:col-span-3 mt-2 px-4 py-3 bg-green-600 text-white rounded font-semibold">Send & Join</button>
        </form>

        <div className="mt-4 text-xs text-gray-500">No money yet? No problem. Contribute skills, time, or spread the word — every action is an investment.</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-100 bg-white">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Agri-Build Initiative • Built for impact</div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600">Privacy</a>
          <a href="#" className="text-sm text-gray-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
