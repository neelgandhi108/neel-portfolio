import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { ImageHolder } from '..';
import * as Asset from "../../assets"
import styles from "./ExperienceCard.module.css";

const assets = {
    "Mercedes-Benz USA": <ImageHolder primarySource={Asset.MercedesBenz} secondarySource={Asset.FallbackMercedesBenz} alt="MercedesBenz" className={`card-img ${styles.image}`} />,
    "DHMC": <ImageHolder primarySource={Asset.DHMC} secondarySource={Asset.FallbackDHMC} alt="DHMC" className={`card-img ${styles.image}`} />,
    "Iolite Softwares": <ImageHolder primarySource={Asset.Iolite} secondarySource={Asset.FallbackIolite} alt="Iolite" className={`card-img ${styles.image}`} />,
    "BISAG": <ImageHolder primarySource={Asset.BISAG} secondarySource={Asset.FallbackBISAG} alt="BISAG" className={`card-img ${styles.image}`} />,
    "CIBIOD": <ImageHolder primarySource={Asset.CIBIOD} secondarySource={Asset.FallbackCIBIOD} alt="CIBIOD" className={`card-img ${styles.image}`} />,
    "IIITNR": <ImageHolder primarySource={Asset.IIITNR} secondarySource={Asset.FallbackIIITNR} alt="IIITNR" className={`card-img ${styles.image}`} />,
    "IITGandhinagar": <ImageHolder primarySource={Asset.IITGandhinagar} secondarySource={Asset.FallbackIITGandhinagar} alt="IITGandhinagar" className={`card-img ${styles.image}`} />,
    "SHREEJI": <ImageHolder primarySource={Asset.SHREEJI} secondarySource={Asset.FallbackSHREEJI} alt="SHREEJI" className={`card-img ${styles.image}`} />,
    "SPARK": <ImageHolder primarySource={Asset.SPARK} secondarySource={Asset.FallbackSPARK} alt="SPARK" className={`card-img ${styles.image}`} />,
}

const ExperienceCard = (props) => {
    const [modalDisplay, setModalDisplay] = useState(false);

    const handleModalOpen = () => setModalDisplay(true);
    const handleModalClose = () => setModalDisplay(false);

    return (
        <Card className={styles.container}>
            {assets[props.logo]}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.organization}<br /><span style={{ fontWeight: "500" }}>{props.duration}</span></Card.Text>
                {
                    props.description ?
                        (
                            <React.Fragment>
                                <Button className={styles.button} variant={props.variant} onClick={handleModalOpen}>
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
                {props.liveUrl ? <Button className={styles.button} variant="secondary" href={props.liveUrl} target="_blank">Company Website</Button> : null}
                
            </Card.Body>
        </Card >
    )
}

export default ExperienceCard;