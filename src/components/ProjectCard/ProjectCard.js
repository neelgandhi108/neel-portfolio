import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ImageHolder } from '..';
import * as Asset from "../../assets"
import {FaReact, FaCss3Alt, FaHtml5, FaBootstrap} from "react-icons/fa";
import {SiNestjs, SiMysql} from "react-icons/si";
import styles from "./ProjectCard.module.css";

const assets = {
    "BIGDATA": <ImageHolder primarySource={Asset.BIGDATA} secondarySource={Asset.FallbackBIGDATA} alt="BIGDATA" className="card-img"/>,
    "COMPVISION": <ImageHolder primarySource={Asset.COMPVISION} secondarySource={Asset.FallbackCOMPVISION} alt="COMPVISION" className="card-img"/>,
    "DBMS": <ImageHolder primarySource={Asset.DBMS} secondarySource={Asset.FallbackDBMS} alt="DBMS" className="card-img"/>,
    "RL": <ImageHolder primarySource={Asset.RL} secondarySource={Asset.FallbackRL} alt="RL" className="card-img"/>,
    "TINYML": <ImageHolder primarySource={Asset.TINYML} secondarySource={Asset.FallbackTINYML} alt="TINYML" className="card-img"/>,
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
    return (
        <Card className={styles.container}>
            {assets[props.title]}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.techStack.map((tech, index) => icons[tech])}
                </Card.Text>
                <Card.Text>
                    {props.content}
                </Card.Text>
                {props.liveUrl ? <Button className={styles.button} variant="primary" href={props.liveUrl} target="_blank">View Live</Button> : null}
                {props.gitHubUrl ? <Button className={styles.button} variant="dark" href={props.gitHubUrl} target="_blank">View on GitHub</Button> : null}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;

