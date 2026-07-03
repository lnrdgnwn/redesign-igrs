import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import TentangPage from './pages/TentangPage';
import InformasiRatingPage from './pages/InformasiRatingPage';
import KonsultasiAdiksiPage from './pages/KonsultasiAdiksiPage';
import HubungiKamiPage from './pages/HubungiKamiPage';
import MasukPage from './pages/MasukPage';
import LupaKataSandiPage from './pages/LupaKataSandiPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tentang" element={<TentangPage />} />
          <Route path="informasi-rating" element={<InformasiRatingPage />} />
          <Route path="konsultasi-adiksi" element={<KonsultasiAdiksiPage />} />
          <Route path="hubungi-kami" element={<HubungiKamiPage />} />
        </Route>
        <Route path="/masuk" element={<MasukPage />} />
        <Route path="/lupa-kata-sandi" element={<LupaKataSandiPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;