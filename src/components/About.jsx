import { Col, Container, Row } from 'react-bootstrap'

function About() {
    return (
        <Container className="about">
            <Row>
                <Col sm="12" className="title">
                    <h1>ABOUT</h1>
                </Col>
            </Row>
            <Row>
                <Col sm="2">
                    <strong>Proyecto:</strong>
                </Col>
                <Col sm="10">
                    REACT JS
                </Col>
            </Row>
            <Row>
                <Col sm="2">
                    <strong>Comisión:</strong>
                </Col>
                <Col sm="10">
                    2022
                </Col>
            </Row>
            <Row>
                <Col sm="2">
                    <strong>Grupo:</strong>
                </Col>
                <Col sm="10">
                    1
                </Col>
            </Row>
            <Row>
                <Col sm="2">
                    <strong>Alumno:</strong>
                </Col>
                <Col sm="10">
                    Castillo, Hugo Marcelo
                </Col>
            </Row>
            <Row>
                <Col sm="2">
                    <strong>E-mail:</strong>
                </Col>
                <Col sm="10">
                    marcelocastillo1@gmail.com / chelocastillo1@hotmail.com
                </Col>
            </Row>
            <Row>
                <Col sm="2">
                    <strong>Repositorio:</strong>
                </Col>
                <Col sm="10">
                <a class="link-light" target="_blank" rel="noreferrer" href="https://github.com/chelocastillo1/informatorioReact/">github.com/chelocastillo1/informatorioReact/</a>
                </Col>
            </Row>
        </Container>
    );
}
export default About;