import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Signals from "./pages/Signals";
import Profile from "./pages/Profile";
import Results from "./pages/Results";
import Document from "./pages/Documents";
import ReviewErrors from "./pages/ReviewErrors";

function App() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [updateSW, setUpdateSW] = useState(() => () => {});

  useEffect(() => {
    const updateServiceWorker = registerSW({
      onNeedRefresh() {
        setUpdateAvailable(true);
      },

      onOfflineReady() {
        console.log("App lista para funcionar offline 🚀");
      },
    });

    setUpdateSW(() => updateServiceWorker);
  }, []);

  const handleUpdate = async () => {
    await updateSW(true);

    setUpdateAvailable(false);

    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/signals" element={<Signals />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/results" element={<Results />} />
        <Route path="/documents" element={<Document />} />
        <Route path="/review" element={<ReviewErrors />} />
      </Routes>

      {updateAvailable && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-slate-900 text-white p-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <p className="text-sm md:text-base">
              🔄 Nueva versión disponible
            </p>

            <button
              onClick={handleUpdate}
              className="bg-white text-slate-900 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition"
            >
              Actualizar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;