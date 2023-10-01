import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Header, PublicationCard } from "../../components";
import PublicationsData from "../../data/Publications.json";
import styles from "./Publications.module.css";

const Publications = () => {
    return (
        <React.Fragment>
            <Header title="Publications" />
            <Container fluid className={styles.container}>
                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {PublicationsData.map((obj, index) => (<PublicationCard key={index} title={obj.title} organization={obj.organization} description={obj.description} paperUrl={obj.paperUrl}/>))}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Publications;