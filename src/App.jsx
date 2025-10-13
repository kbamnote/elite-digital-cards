import React from "react";
import { Wrench, Clock, Mail } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 text-white px-4">
      {/* Background overlay image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1350&q=80')",
        }}
      ></div>

      {/* Content */}
      <div className="relative text-center z-10 max-w-lg">
        <div className="flex justify-center mb-6">
          <Wrench className="w-20 h-20 animate-bounce text-yellow-300" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Elite Digital Cards</h1>
        <p className="text-lg mb-6">
          We’re crafting something amazing for you. Our website is currently{" "}
          <span className="font-semibold text-yellow-300">under construction</span>.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6">
          <Clock className="w-4 h-4 text-yellow-300" />
          <span>Expected Launch: Coming Soon 🚀</span>
        </div>

        <a
          href="mailto:info@elitedigitalcards.com"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-all shadow-lg"
        >
          <Mail className="w-5 h-5" />
          Contact Us
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-sm opacity-80 z-10">
        © {new Date().getFullYear()} Elite Digital Cards. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
