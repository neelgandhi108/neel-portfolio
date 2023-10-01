import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { ImageHolder } from '..';
import * as Asset from "../../assets"
import {FaReact, FaCss3Alt, FaHtml5, FaBootstrap} from "react-icons/fa";
import {SiNestjs, SiMysql} from "react-icons/si";
import styles from "./ProjectCard.module.css";

const assets = {
    "Big Data Analytics for Google Play Store": <ImageHolder primarySource={Asset.BIGDATA} secondarySource={Asset.FallbackBIGDATA} alt="BIGDATA" className={`card-img ${styles.image}`} />,
    "Medical Image Segmentation": <ImageHolder primarySource={Asset.COMPVISION} secondarySource={Asset.FallbackCOMPVISION} alt="COMPVISION" className={`card-img ${styles.image}`} />,
    "Covid record management system for public places": <ImageHolder primarySource={Asset.DBMS} secondarySource={Asset.FallbackDBMS} alt="DBMS" className={`card-img ${styles.image}`} />,
    "Financial Stock Recommendation System": <ImageHolder primarySource={Asset.RL} secondarySource={Asset.FallbackRL} alt="RL" className={`card-img ${styles.image}`} />,
    "TinyML-Speech Recognition": <ImageHolder primarySource={Asset.TINYML} secondarySource={Asset.FallbackTINYML} alt="TINYML" className={`card-img ${styles.image}`} />,
    "Low-light Image Enhancement": <ImageHolder primarySource={Asset.LOL} secondarySource={Asset.FallbackLOL} alt="LOL" className={`card-img ${styles.image}`} />,
    "FinanceFormer: Transformer-based Model for Investment Portfolio Optimization": <ImageHolder primarySource={Asset.FinanceFormer} secondarySource={Asset.FallbackFinanceFormer} alt="FinanceFormer" className={`card-img ${styles.image}`} />,
    "Next-Generation Sequencing and Genomic Data Classification": <ImageHolder primarySource={Asset.Genomic} secondarySource={Asset.FallbackGenomic} alt="Genomic" className={`card-img ${styles.image}`} />,
    "Optimization of Marketing Campaigns through Predictive Modeling and Advanced Statistical Analysis": <ImageHolder primarySource={Asset.Marketing} secondarySource={Asset.FallbackMarketing} alt="Marketing" className={`card-img ${styles.image}`} />,
    "Multi-Robot Coordination for Heterogeneous Task Allocation: A Market Based Distributed Mechanism": <ImageHolder primarySource={Asset.Robot} secondarySource={Asset.FallbackRobot} alt="Robot" className={`card-img ${styles.image}`} />,
    "MERN-Blog-Project: A Full-Stack Web App with DevOps Integration ": <ImageHolder primarySource={Asset.MERN} secondarySource={Asset.FallbackMERN} alt="MERN" className={`card-img ${styles.image}`} />,
    "Geospatial Analysis of Temperature and Salinity Relationships in the CalCOFI Dataset": <ImageHolder primarySource={Asset.Geospatial} secondarySource={Asset.FallbackGeospatial} alt="Geospatial" className={`card-img ${styles.image}`} />,
    "Deep Learning-based Stock Market Visualization and Prediction: A Comprehensive Study": <ImageHolder primarySource={Asset.Market} secondarySource={Asset.FallbackMarket} alt="Market" className={`card-img ${styles.image}`} />,
    "Autonomous Navigation System for Turtlebot for Pathfinding and Obstacle Avoidance": <ImageHolder primarySource={Asset.Turtlebot} secondarySource={Asset.FallbackTurtlebot} alt="Turtlebot" className={`card-img ${styles.image}`} />,
    "Battery Remaining Useful Life Prediction on 14 NMC-LCO 18650 Batteries": <ImageHolder primarySource={Asset.Battery} secondarySource={Asset.FallbackBattery} alt="Battery" className={`card-img ${styles.image}`} />,
    "Dartmouth College Expense Manager App": <ImageHolder primarySource={Asset.DartmouthApp} secondarySource={Asset.FallbackDartmouthApp} alt="DartmouthApp" className={`card-img ${styles.image}`} />,
    "Image Processing in Verilog with PIL Library": <ImageHolder primarySource={Asset.Verilog} secondarySource={Asset.FallbackVerilog} alt="Verilog" className={`card-img ${styles.image}`} />,
    "Uncovering Bias in Language Models: An Investigation into Stereotypical Text Generation": <ImageHolder primarySource={Asset.NLP} secondarySource={Asset.FallbackNLP} alt="NLP" className={`card-img ${styles.image}`} />    
}

const icons = {
    "React": <FaReact className={styles.icon} style={{color: "#61DAFB"}}/>,
    "CSS": <FaCss3Alt className={styles.icon} style={{color: "#1572B6"}}/>,
    "HTML": <FaHtml5 className={styles.icon} style={{color: "#E34F26"}}/>,
    "Bootstrap": <FaBootstrap className={styles.icon} style={{color: "#7952B3"}}/>,
    "NestJS": <SiNestjs className={styles.icon} style={{color: "#E0234E"}}/>,
    "MySQL": <SiMysql className={styles.icon} style={{color: "#4479A1"}}/>,
}

const ProjectCard = (props) => {
    const [modalDisplay, setModalDisplay] = useState(false);

    const handleModalOpen = () => setModalDisplay(true);
    const handleModalClose = () => setModalDisplay(false);

    return (
        <Card className={styles.container}>
            {assets[props.title]}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.techStack.map((tech, index) => (
                        <div key={index} className={styles.techBox}>
                            {tech}
                        </div>
                    ))}
                </Card.Text>
                    <Button className={styles.button} variant="primary" onClick={handleModalOpen}>
                        View Description
                    </Button>
                {props.liveUrl ? <Button className={styles.button} variant="primary" href={props.liveUrl} target="_blank">View Report</Button> : null}
                {props.gitHubUrl ? <Button className={styles.button} variant="dark" href={props.gitHubUrl} target="_blank">View on GitHub</Button> : null}
            </Card.Body>

            <Modal centered size="lg" show={modalDisplay} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.content}
                </Modal.Body>
            </Modal>
        </Card>
    );
}



export default ProjectCard;

