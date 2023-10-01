import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { ImageHolder } from '..';
import * as Asset from "../../assets"
import styles from "./CertificationCard.module.css";

const assets = {
    "AI": <ImageHolder primarySource={Asset.AI} secondarySource={Asset.FallbackAI} alt="AI" className={`card-img ${styles.image}`} />,
    "IBMDS": <ImageHolder primarySource={Asset.IBMDS} secondarySource={Asset.FallbackIBMDS} alt="IBMDS" className={`card-img ${styles.image}`} />,
    "AIM": <ImageHolder primarySource={Asset.AIM} secondarySource={Asset.FallbackAIM} alt="AIM" className={`card-img ${styles.image}`} />,
    "MML": <ImageHolder primarySource={Asset.MML} secondarySource={Asset.FallbackMML} alt="MML" className={`card-img ${styles.image}`} />,
    "DL": <ImageHolder primarySource={Asset.DL} secondarySource={Asset.FallbackDL} alt="DL" className={`card-img ${styles.image}`} />,
    "DRL": <ImageHolder primarySource={Asset.DRL} secondarySource={Asset.FallbackDRL} alt="DRL" className={`card-img ${styles.image}`} />,
    "SF": <ImageHolder primarySource={Asset.SF} secondarySource={Asset.FallbackSF} alt="SF" className={`card-img ${styles.image}`} />,
}

const CertificationCard = (props) => {
    const [modalDisplay, setModalDisplay] = useState(false);

    const handleModalOpen = () => setModalDisplay(true);
    const handleModalClose = () => setModalDisplay(false);

    return (
        <Card className={styles.container}>
            {assets[props.logo]}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.organization}<br /><span style={{ fontWeight: "500" }}>{props.duration}</span></Card.Text>
                {props.liveUrl ? <Button className={styles.button} variant={props.variant} href={props.liveUrl} target="_blank">View Certificate</Button> : null}
                {
                    props.description ?
                        (
                            <React.Fragment>
                                <Button className={styles.button} variant="secondary" onClick={handleModalOpen}>
                                    View Description
                                </Button>
                                <Modal centered size="lg" show={modalDisplay} onHide={handleModalClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{props.organization}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div style={{ textAlign: "center" }}><h4>{props.title}</h4></div>
                                        <div style={{ textAlign: "center" }}><h5>{props.duration}</h5></div>
                                        <ul>
                                            {props.description.map(elem => <li>
                                                {elem}
                                            </li>)}
                                        </ul>
                                    </Modal.Body>
                                </Modal>
                            </React.Fragment>
                        )
                        : null
                }
            </Card.Body>
        </Card >
    )
}

export default CertificationCard;