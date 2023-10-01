import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import styles from "./PublicationCard.module.css";
import { ImageHolder } from '..';
import * as Asset from "../../assets"


const assets = {
    "Leveraging towards Privacy‑preserving using Federated Machine Learning for Healthcare Systems": <ImageHolder primarySource={Asset.FEDML} secondarySource={Asset.FallbackFEDML} alt="FEDML" className={`card-img ${styles.image}`} />,
    "CNN and Bidirectional GRU-Based Heartbeat Sound Classification Architecture for Elderly People": <ImageHolder primarySource={Asset.Sound} secondarySource={Asset.FallbackSound} alt="Sound" className={`card-img ${styles.image}`} />,
    "Stacked Ensemble Learning Based Approach for Anomaly Detection in IoT Environment.": <ImageHolder primarySource={Asset.Ensemble} secondarySource={Asset.FallbackEnsemble} alt="Ensemble" className={`card-img ${styles.image}`} />,
    "Explainable AI for Healthcare: A Study for Interpreting Diabetes Prediction.": <ImageHolder primarySource={Asset.XAI} secondarySource={Asset.FallbackXAI} alt="XAI" className={`card-img ${styles.image}`} />,
    "A CNN‑BiLSTM based Approach for Detection of SQL Injection Attacks.": <ImageHolder primarySource={Asset.CNNBiLSTM} secondarySource={Asset.FallbackCNNBiLSTM} alt="CNNBiLSTM" className={`card-img ${styles.image}`} />,
    "Modelling resource allocation in uncertain system environment through deep reinforcement learning.": <ImageHolder primarySource={Asset.ModelRL} secondarySource={Asset.FallbackModelRL} alt="ModelRL" className={`card-img ${styles.image}`} />,
    "Applications of Reinforcement learning for Medical Decision Making.": <ImageHolder primarySource={Asset.RLHealth} secondarySource={Asset.FallbackRLHealth} alt="RLHealth" className={`card-img ${styles.image}`} />,
    "Training Quantum Machine Learning Models with Aid of Kernels": <ImageHolder primarySource={Asset.QuantumModel} secondarySource={Asset.FallbackQuantumModel} alt="QuantumModel" className={`card-img ${styles.image}`} />,
    "sEMG Assisted Hand Gesture Recognition using Bi-Directional LSTM and Uni-Directional LSTM": <ImageHolder primarySource={Asset.LSTM} secondarySource={Asset.FallbackLSTM} alt="LSTM" className={`card-img ${styles.image}`} />,
    "Uncovering Bias in Language Models: An Investigation into Stereotypical Text Generation": <ImageHolder primarySource={Asset.NLP} secondarySource={Asset.FallbackNLP} alt="NLP" className={`card-img ${styles.image}`} />
}

const PublicationCard = (props) => {
    const [modalDisplay, setModalDisplay] = useState(false);

    const handleModalOpen = () => setModalDisplay(true);
    const handleModalClose = () => setModalDisplay(false);

    return (
        <Card className={styles.container}>
            {assets[props.title]}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.organization}</Card.Text>
                {
                    props.description ?
                        (
                            <React.Fragment>
                                <Button className={styles.button} variant="secondary" onClick={handleModalOpen}>
                                    Abstract
                                </Button>
                                <Modal centered show={modalDisplay} onHide={handleModalClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{props.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {props.description}
                                    </Modal.Body>
                                    <Modal.Footer style={{ justifyContent: "center" }}>
                                        <h5>{props.organization}</h5>
                                    </Modal.Footer>
                                </Modal>
                            </React.Fragment>
                        )
                        : null
                }
                {props.paperUrl ? <Button className={styles.button} variant="primary" href={props.paperUrl} target="_blank">Paper Link</Button> : null}
            </Card.Body>
        </Card>
    )
}

export default PublicationCard;