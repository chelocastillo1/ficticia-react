import {BrowserRouter, Routes, Route} from 'react-router-dom';

import About from "./components/About"
import Buscador from "./components/Buscador"
import DataProvider from "./components/Contexto"
import Error404 from "./components/Error404"
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    const rutas = [
        {component: <Buscador />, path: '/', key: 'index'},
        {component: <About />, path: '/about', key: 'about'},
        {component: <Buscador />, path: '/buscador', key: 'search'},
        {component: <Error404 />, path: '*', key: 'error'},
    ];

    return (
        <BrowserRouter>
            <DataProvider>
                <Header />
                <Routes>
                    { rutas.map((r) => <Route key={r.key} path={r.path} element={r.component} />) }
                </Routes>
                <Footer />
            </DataProvider>
        </BrowserRouter>
    );
}
export default App;