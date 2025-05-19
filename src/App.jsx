import { useEffect } from 'react';
import { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './Contexto/Contexto';
import { supabase } from "./supabase";
import Lista from './componentes/Lista';
import Capturados from './componentes/Capturados';
import Favoritos from './componentes/Favoritos';
import Aleatorios from './componentes/Aleatorios';
import Usuarios from './componentes/Usuarios';
import Pokemon from './componentes/Pokemon';
import Menu from './componentes/Menu';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Administrador from './componentes/Administrador';
import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }
    
    verificarSesion();
    
    // Escucha cambios en la sesión
    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);

  if (cargando) {
    return <p>Cargando...</p>;
  }

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}
        <Routes>
          <Route path="/" element={usuario ? <Lista /> : <Navigate to="/login" />} />
          <Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/pokemon/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/administrador" element={<Administrador/>} />

        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;