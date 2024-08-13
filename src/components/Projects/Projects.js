import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import hcl from "../../Assets/Projects/hcl.png";
import lmt from "../../Assets/Projects/lmt.png";
import printcenter from "../../Assets/Projects/printcenter.png";
import goldenher from "../../Assets/Projects/goldenher.png";
import eplete from "../../Assets/Projects/eplete.png";
import onebarangay from "../../Assets/Projects/onebarangay.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hcl}
              isBlog={true}
              title="Hypas Client Libraries"
              description="The Hypas client libraries or API offer an exclusive interface designed to seamlessly connect mobile and standalone applications to multifunction printers (MFPs). Beyond establishing a simple connection, this API empowers developers to integrate essential functionalities such as direct printing and retrieving detailed information about the MFP directly from mobile devices. It streamlines the process, enabling enhanced control and usability for mobile and app-based printing solutions."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lmt}
              isBlog={true}
              title="License Management tool"
              description="The License Management Tool is a mobile-based application available for both Android and iOS platforms. This app allows users to activate a product on a target Kyocera printer using a license key, leveraging Near Field Communication (NFC) technology. With this tool, users can conveniently manage and activate licenses directly from their mobile devices, ensuring a seamless and efficient process for Kyocera printer setups."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printcenter}
              isBlog={true}
              title="Kyocera Print Center"
              description="Effortlessly discover and monitor KYOCERA printers with this versatile tool. It enables you to scan documents, capture images, and extract text using Optical Character Recognition (OCR). You can also select or create lined templates for printing and configure advanced print settings tailored for KYOCERA printers. Additionally, the app allows you to specify folders in the Driver Library, granting advanced print settings access to watermark images, driver profile files, and saved printouts, ensuring a streamlined and customizable printing experience."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goldenher}
              isBlog={false}
              title="Golden Her"
              description="As a freelance full stack developer, I designed and developed a web-based point of sale (POS) system for Golden Her Resort. This application also includes an integrated inventory management system. The project was built using HTML, CSS, and the Bootstrap framework for a responsive user interface, with MySQL serving as the database for efficient data management."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eplete}
              isBlog={false}
              title="E-Plete"
              description="As a full stack developer, I developed a contactless payment application designed to facilitate safer transactions during the pandemic. This web and mobile-based application was conceived to minimize physical contact for people traveling from one place to another. After brainstorming the idea, one of our clients decided to bring it to life. The web application was built using HTML, CSS, JavaScript, and the Bootstrap framework, with SQL handling the database operations. For the mobile version, I utilized Java to ensure a seamless user experience across devices."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={onebarangay}
              isBlog={false}
              title="One Barangay"
              description="As part of my freelance work as a full stack developer, I developed a web application designed to streamline village management. The application enables the admin user to manage village operations, including viewing reports, updating the latest news, adding staff, and most importantly, handling contactless requests from residents. This feature allows villagers to submit and receive official documents without needing to visit the village hall, provided their identity is verified. The application was built using HTML, CSS, Java, and JavaScript, with SQL managing the back-end queries and data handling."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
