import React from 'react';
import { FaLinkedin, FaYoutubeSquare, FaBehanceSquare, FaGithubSquare, FaGoogle,FaFileDownload,FaPython } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import { ImageHolder, ProfileButton } from "../../components";
import { ProfessionalHeadshot, FallbackProfessionalHeadshot, HomeBackground } from '../../assets';
import styles from "./Home.module.css";

const Home = () => {
    return (
        <Container fluid className={styles.container} style={{ background: `url(${HomeBackground})` }}>
            <Row>
                <ImageHolder
                    primarySource={ProfessionalHeadshot}
                    secondarySource={FallbackProfessionalHeadshot}
                    alt="Professional Headshot of Neel Jaydip Gandhi"
                    className={styles.professionalHeadshot}
                />
            </Row>
            <Row>
                <Col><span className={`${styles.textWhite} ${styles.headingOne}`}>Neel Jaydip Gandhi</span></Col>
            </Row>
            <Row>
                <Col><span className={`${styles.textWhite} ${styles.headingThree}`}>Software Engineer, Full-Stack Developer, College Student</span></Col>
            </Row>
            <Row>
                <Col><a href="https://github.com/neelgandhi108" target="_blank_"><FaGithubSquare className={styles.icon} /></a></Col>
                <Col><a href="https://leetcode.com/neelgandhi11/" target="_blank_"><FaPython className={styles.icon} /></a></Col>
                <Col><a href="https://www.linkedin.com/in/neel-gandhi-467247172/" target="_blank_"><FaLinkedin className={styles.icon} /></a></Col>
                <Col><a href="https://scholar.google.com/citations?user=luzHFIcAAAAJ&hl=en" target="_blank_"><FaGoogle className={styles.icon} /></a></Col>
            </Row>
            <Row>
                <Col><ProfileButton logo={<FaFileDownload className={styles.iconSmall} />} href="./resume.html">Résumé</ProfileButton></Col>
            </Row>
            {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={CICSLogo} logoAlt="University of Massachusetts Amherst"> Undergraduate Course Assistant at Manning CICS </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Tech + Design Member at HackUMass Organizing Team </ProfileCard>
                <ProfileCard logo={HackUMassLogo} logoAlt="HackUMass"> Software Developer at HackUMass Organizing Team </ProfileCard>
            </Row> */}
        </Container>
    )
}

export default Home;