import React from "react";
import "./intro.css";
import bg1 from "../../assets/bg1.png";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

// Import the PDF file
import myResumePDF from "../../assets/anuda_esarith.pdf";

const Intro = () => {
    const handleDownloadPDF = () => {
        const link = document.createElement("a");
        link.href = myResumePDF;
        link.download = "Anuda_Esarith_Intern.pdf"; // Specify the desired file name
        link.click();
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText"> I'm <span className="introName">Anuda </span><br/><span style={{fontSize:'2rem'}}>MLOps / Data Engineering / Data Science<br/></span></span>
                <p className="introPara">Welcome to my professional portfolio! I'm passionate about turning <br/>data into actionable insights and innovative solutions<br/>with a keen eye for detail and a love for solving complex problems,<br/> I bring unique and impactful AI concepts to action<br/>specialy I know every steps of data projects <br/>from webscraping to ML deployment and BI analytics</p>
                <button className="btn" style={{ display: 'flex', alignItems: 'center' }} onClick={handleDownloadPDF}>
                    <FileDownloadIcon style={{ marginRight: '8px' }} />
                    Download my CV
                </button>
            </div>
            <div className="dp">
                <img src={bg1} alt="Portfolio" className="bg"/>
            </div>
        </section>
    );
}

export default Intro;
