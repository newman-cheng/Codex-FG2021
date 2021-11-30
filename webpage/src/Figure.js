import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Figure = (props) => {

    return (
        <Container style={{paddingTop: 10, width: "100%"}} className="justify-content-md-left" fluid>
            <Row>
                <Col align="center"><img src={require("" + props.img).default} style={{width: props.width, maxWidth: props.maxWidth, margin: "0 auto"}}/></Col>
            </Row>
            <Row>
                <p align="justify" style={{width: props.width, maxWidth: props.maxWidth, margin: "0 auto"}}><b>{`Figure ${props.number}. `}</b>{props.caption}</p>
                <br/><br/><br/><br/>
            </Row>
        </Container>
    );
}

export default Figure;
