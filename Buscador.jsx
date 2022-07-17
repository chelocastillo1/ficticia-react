import React, { useContext, useEffect, useState } from 'react'
import { Alert, Button, Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap'
import Axios from 'axios';
import {PaginacionContext} from './Layout';
import BuscadorResultado from './BuscadorResultado';

function Buscador(props) {
    const strApiKey = 'e18accae9c5e474e888257f65ef518f9';
    //const strApiKey = '1cbaa6470fb5490db4958d6ded5978d3';
    
    const array_errors = [ // Listado de algunos errores que puede devolver newsapi.org en las peticiones.
        {code: "apiKeyDisabled", text: "Su API Key ha sido deshabilitada."},
        {code: "apiKeyExhausted", text: "Su API Key no tiene más solicitudes disponibles."},
        {code: "apiKeyInvalid", text: "Su API Key no se ha ingresado correctamente. Compruébelo dos veces e inténtalo de nuevo."},
        {code: "apiKeyMissing", text: "Falta su API Key en la solicitud."},
        {code: "corsNotAllowed", text: "El Intercambio de Recursos de Origen Cruzado (CORS) no está habilitado."},
        {code: "maximumResultsReached", text: "Se ha alcanzado el máximo de resultados que permite obtener newsapi.org"},
        {code: "parameterInvalid", text: "Ha incluido un parámetro en su solicitud que actualmente no se admite."},
        {code: "parametersMissing", text: "Faltan parámetros obligatorios en la solicitud y no se puede completar."},
        {code: "rateLimited", text: "Se le ha limitado la tarifa. Inténtelo más tarde."},
        {code: "sourcesTooMany", text: "Ha solicitado demasiadas fuentes en una sola solicitud. Intente dividir la solicitud en dos solicitudes más pequeñas."},
        {code: "sourceDoesNotExist", text: "Ha solicitado una fuente que no existe."},
        {code: "unexpectedError", text: "Error inesperado, el servidor no está respondiendo correctamente."},
        {code: "ERR_NETWORK", text: "Error de conexión, no tienes conexión a internet o bien, el servidor no está en línea."},
        {code: "ERR_INTERNET_DISCONNECTED", text: "Se ha perdido la conexión a internet."},
        {code: "ERR_BAD_REQUEST", text: "Respuesta del servidor no válida."}
    ];

    const array_languages = [ // Idiomas de búsqueda que soporta newsapi.org
        {id: 'ar', descripcion: 'Árabe', disabled: false},
        {id: 'de', descripcion: 'Alemán', disabled: false},
        {id: 'en', descripcion: 'Inglés', disabled: false},
        {id: 'es', descripcion: 'Español', disabled: false},
        {id: 'fr', descripcion: 'Francés', disabled: false},
        {id: 'he', descripcion: 'Hebreo', disabled: false},
        {id: 'it', descripcion: 'Italiano', disabled: false},
        {id: 'nl', descripcion: 'Holandés', disabled: false},
        {id: 'no', descripcion: 'Noruego', disabled: false},
        {id: 'pt', descripcion: 'Portugués', disabled: false},
        {id: 'ru', descripcion: 'Ruso', disabled: false},
        {id: 'sv', descripcion: 'Sueco', disabled: false},
        {id: 'ud', descripcion: 'ud', disabled: true}, // deshabilitado, no se que lengüa es :S
        {id: 'zh', descripcion: 'Chino', disabled: false}
    ];

    const {nPage, setPage, nPageSize, strLanguage, setLanguage} = useContext(PaginacionContext); // importamos contexto
    const [error, setError] = useState(null);
    const [bCargando, setCargando] = useState(false);
    const [bBotonDeshabilitado, setBotonDeshabilitado] = useState(true); // si está deshabilitado el botón de búsqueda
    const [bTextoDeshabilitado, setTextoDeshabilitado] = useState(false); // Para bloquearlo mientras está activo el Axios
    const [strBuscar, setBuscar] = useState(""); // el texto a buscar
    const [data, setData] = useState(null); // resultados de la búsqueda

    const hBuscadorOnChange = event => { // capturar los eventos de tipeo en el input="text"
        setBotonDeshabilitado(event.target.value.trim().length < 3 ? true : false);
        setBuscar(event.target.value.trim());
    };

    const hOnSubmit = (event) => { // iniciar la búsquedar
        event.preventDefault();
        setPage(1);
        fxBuscar();
    };

    const hOnKeyDown = (event) => { // capturar el evento [ENTER] en el input="text"
        if (event.key === 'Enter') {
            hOnSubmit(event);
        }
    }

    const fxBuscar = () => {
        if(!bBotonDeshabilitado && strBuscar.trim().length > 2) { // Si no está deshabilitado, realizar la búsqueda
            setCargando(true);
            setError(null);
            setData(null);
            setTextoDeshabilitado(true);
            setBotonDeshabilitado(true);

            let txt = `https://ficticia-react.herokuapp.com/https://newsapi.org/v2/everything?q=${strBuscar}&language=${strLanguage}&pageSize=${nPageSize}&page=${nPage}&sortBy=publishedAt&apiKey=${strApiKey}`;
            //let txt = `https://newsapi.org/v2/everything?q=${strBuscar}&language=${strLanguage}&pageSize=${nPageSize}&page=${nPage}&sortBy=publishedAt`;

            Axios({ url: txt, })
                .then((response) => { setData(response.data); setCargando(false); })
                .catch((error) => { setError(error); setCargando(false); });

            setTextoDeshabilitado(false);
            setBotonDeshabilitado(false);
            //setCargando(false);
        }
    };

    useEffect(
        () => {
            if(strBuscar.trim().length > 2 && data != null)
                fxBuscar();
        }, [strLanguage, nPageSize, nPage]
    );

    if(bCargando) // Si la newsapi.org no terminó de devolver una respuesta, se mostrará el spinner.
        return (<div className="d-flex justify-content-center cargando"><Spinner animation="border" variant="light" />&nbsp;Espere...</div>);

    return (
        <>
        {  }
        <div className="d-flex justify-content-center m-4">
            <form>
                <Row>
                    <Col>
                        <FloatingLabel label="¿Qué buscamos?">
                            <Form.Control onChange={hBuscadorOnChange} value={strBuscar} onKeyDown={hOnKeyDown} disabled={bTextoDeshabilitado} id="buscar" placeholder="¿Qué buscamos?" />
                        </FloatingLabel>
                        </Col>
                        <Col>
                        <FloatingLabel label="Idioma">
                            <Form.Select defaultValue={strLanguage} onChange={(e) => setLanguage(e.target.value)} id="language" placeholder="Idioma">
                                { array_languages.map(
                                    (l) => <option key={l.id} value={l.id} disabled={l.disabled}>{l.descripcion}</option>
                                ) }
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Button type="submit" variant={bBotonDeshabilitado ? "secondary" : "primary"} onClick={hOnSubmit} disabled={bBotonDeshabilitado}>Buscar</Button>
                </Row>
            </form>
        </div>

        { data != null ?
                <BuscadorResultado data={data} pageSize={data != null && data.totalResults < nPageSize ? data.totalResults : nPageSize} />
        :
            (error != null ?
            <Container className="w-50">
                <Alert key="warning" variant="warning">
                    <Row>
                        <Col>
                        <strong>Se ha producido un error al intentar obtener una respuesta del servidor.</strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Código de error:&nbsp;</strong>{ error.response.data != null ? error.response.data.code : error.code }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-break">
                            <strong>Mensaje:</strong>&nbsp;{ array_errors.filter((e) => e.code === (error.response.data != null ? error.response.data.code : error.code))
                                                            .map(f => (error.response.data != null ? error.response.data : error).text) }
                        </Col>
                    </Row>
                </Alert>
            </Container>
            :
            ""
            )
        //<strong>Mensaje:</strong>&nbsp;{ array_errors.find((e) => {return (e.code === (error.response.data != null ? error.response.data.code : error.code) ? e.text : null)}).text }
        }
        </>
    );
}
export default Buscador;