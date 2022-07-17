import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout"
import Buscador from "./components/Buscador"
import About from "./components/About"
import Error404 from "./components/Error404"
import DataProvider from './context/DataContext'

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
                <Layout>
                    <Routes>
                        { rutas.map((ruta) => <Route key={ruta.key} path={ruta.path} element={ruta.component} />) }
                    </Routes>
                </Layout>
            </DataProvider>
        </BrowserRouter>
    );
}

export default App;