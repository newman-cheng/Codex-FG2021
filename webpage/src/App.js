import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Col, Row, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import Authors from "./Authors";
import Abstract from "./Abstract";
import Figure from "./Figure";
import authorlist from "./authorlist";
import metadata from "./metadata";
import figures from "./figures";

const App = () => {
    return (
        <Container fluid style={{width: "100%", paddingLeft: 0, paddingRight: 0}}>
            <Container fluid style={{width: "100%"}}>
                <br/><br/>
                <h2 align="center"><b>Top 3 in FG 2021 Families in the Wild kinship verification challenge</b></h2>
                <Authors authors={authorlist} venue={metadata.venue} paper={metadata.paper} github={metadata.github} number={false}/>
            </Container>
            <Container fluid>
                <Abstract abstract={metadata.abstract} tldr={metadata.tldr}/>
                <br/><br/>
                <Row>
                    {Object.entries(figures).map(([k, v], i) => (<Figure key={i} number={k.replace("F", "")} width={v.width} img={v.image} caption={v.caption} maxWidth={v.maxWidth ? v.maxWidth : "100%"}></Figure>))}
                </Row>
                <Row align="center"><h4 style={{paddingTop: 40}}><b>BibTeX</b></h4></Row>
                <Row><pre style={{width: "80%", margin: "0 auto", backgroundColor: "rgba(240, 244, 248, 1)", padding: 20, borderRadius: 8, fontFamily: "monospace"}}>{metadata.bibtex}</pre></Row>
            </Container>
            <p align="center" style={{fontSize: 12, color: "gray"}}>Updated August 19th 2021.</p>
        </Container>
    );
}

export default App;