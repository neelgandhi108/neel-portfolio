import React from 'react';
import { FaLinkedin, FaSearchLocation, FaPhone, FaYoutubeSquare, FaBehanceSquare, FaGithubSquare, FaGoogle, FaFileDownload, FaPython } from "react-icons/fa";
import { SiLeetcode, SiGooglescholar, SiGmail } from "react-icons/si";
import { Container, Row, Col } from 'react-bootstrap';
import { ImageHolder, ProfileCard, ProfileButton } from "../../components";
import { ProfessionalHeadshot, FallbackProfessionalHeadshot, HomeBackground, PDEU, FallbackPDEU, DARTMOUTH, FallbackDARTMOUTH } from '../../assets';
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
            {/* <Row>
                <Col><span className={`${styles.textWhite} ${styles.headingThree}`}>Bringing Code to Life</span></Col>
            </Row> */}
            <Row>
                <Col><span className={`${styles.textWhite} ${styles.headingThree}`}>United States</span></Col>
            </Row>
            <Row>
            <Col><a href="https://www.linkedin.com/in/neeljgandhi/" target="_blank_"><FaLinkedin className={styles.icon} /></a></Col>
                <Col><a href="https://github.com/neelgandhi108" target="_blank_"><FaGithubSquare className={styles.icon} /></a></Col>
                <Col><a href="https://leetcode.com/neelgandhi11/" target="_blank_"><SiLeetcode className={styles.icon} /></a></Col>
                
                <Col><a href="https://scholar.google.com/citations?user=luzHFIcAAAAJ&hl=en" target="_blank_"><SiGooglescholar className={styles.icon} /></a></Col>
            </Row>
            <Row>
                <Col><ProfileButton logo={<FaFileDownload className={styles.iconSmall} />} href="./resume.html">Résumé</ProfileButton></Col>
            </Row>
            <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={DARTMOUTH} logoAlt="DARTMOUTH COLLEGE"> Education <br/> <br/> DARTMOUTH (Ivy League Institution) <br/> MASTER OF SCIENCE IN COMPUTER SCIENCE  <br/> (GPA ‑ 4.0/4.0)  <br/>   2022‑Present 
                <br/>   Full ride merit based scholarship recipient </ProfileCard>   
            </Row>
            {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={PDEU} logoAlt="Pandit Deendayal Energy University">Pandit Deendayal Energy University <br /> BACHELOR OF TECHNOLOGY IN INFORMATION AND COMMUNICATION TECHNOLOGY  <br/> (GPA ‑ 3.94/4.0) <br /> July 2018 ‑ May 2022 </ProfileCard>
            </Row> */}
            {/* <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <ProfileCard logo={PDEU} logoAlt="Contact Details"><SiGmail className={styles.icon} />Email : neelgandhi11@gmail.com <br /><FaSearchLocation className={styles.icon} /> United States <br /><FaPhone className={styles.icon} /> Phone No  </ProfileCard>
            </Row> */}
        </Container>
    )
}

export default Home;
