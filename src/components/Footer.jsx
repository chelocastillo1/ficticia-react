import React, {Component} from 'react'
import { Col, Row } from 'react-bootstrap'

class Footer extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            "world": [
                {id: "ar", descripcion: "Argentina"},
                {id: "br", descripcion: "Brasil"},
                {id: "co", descripcion: "Colombia"},
                {id: "mx", descripcion: "Mexico"},
                {id: "es", descripcion: "España"}
            ],
            "social": [
                {id: "fb", uri: "https://www.facebook.com/", descripcion: "Facebook"},
                {id: "ig", uri: "https://www.instagram.com/", descripcion: "Instagram"},
                {id: "yt", uri: "https://www.youtube.com/", descripcion: "Youtube"},
                {id: "tw", uri: "https://www.twitter.com/", descripcion: "Twitter"}
            ],
            "contacto": [
                "Contacto",
                "Redacción",
                "Empleo"
            ],
            "legal": [
                "Términos y condiciones",
                "Política de seguridad"
            ]
        };
    }

    render(){
        return (
            <footer className="footer">
                <Row>
                    <Col>
                        <h4>En el mundo</h4>
                        <ul className="world">
                            { this.state.world.map((w) => <li key={w.id}><a target="_blank" rel="noreferrer" className="link-light" href={`https://${w.id}.ficticia-news.com/`}>{w.descripcion}</a></li>) }
                        </ul>
                    </Col>
                    <Col>
                        <h4>Redes sociales</h4>
                        <ul className="social">
                            { this.state.social.map((s) => <li key={s.id}><a target="_blank" rel="noreferrer" className="link-light" href={s.uri + "ficticia.news/"}>{s.descripcion}</a></li>) }
                        </ul>
                    </Col>
                    <Col>
                        <h4>Contáctenos</h4>
                        <ul className="contact">
                            { this.state.contacto.map((s, i) => <li key={i}><a target="_blank" rel="noreferrer" className="link-light" href={"#link" + i}>{s}</a></li>) }
                        </ul>
                    </Col>
                    <Col>
                        <h4>Legales</h4>
                        <ul className="list-group list-group-flush legal">
                            { this.state.legal.map((l, i) => <li key={i}><a target="_blank" rel="noreferrer" className="link-light" href={"#link" + i}>{l}</a></li>) }
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="copyright">
                        FICTICIA News © Todos los derechos reservados
                    </Col>
                    <Col md="auto" className="separator">|</Col>
                    <Col className="developedBy">
                        Desarrollado por <a className="link-light" href="https://chelocastillo1.github.io/informatorioPortfolio/" target="_blank" rel="noreferrer">FICTICIA Software</a>
                    </Col>
                </Row>
            </footer>
            );
    }
}
export default Footer;