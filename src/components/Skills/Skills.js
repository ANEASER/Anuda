import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What <span style={{color:"cyan"}}>I do ?</span></span>
        <span className='skillDesc'></span>
        <div className='SkillBars'>
            <div className='SkillBar' id='UI'>
                <div className='skillBarText'>
                    <h3>Data Engineering </h3>
                    <p>Ability to work with Airflow , Spark and Kafka. Have done projects and abled to Dockerize.By using shell scripts and crone jobs can automate the pipelines. </p>
                </div>
            </div>
            <div className='SkillBar'>
                <div className='skillBarText'>
                    <h3>GenAI and LLM Applcations</h3>
                    <p>Fine tuning LLMs ,Build RAG applcation, Exeprt Systems, Web Scraping and agentic solutions </p>
                </div>
            </div>
        </div>
        <div className='SkillBars'>
            <div className='SkillBar' id='UI'>
                <div className='skillBarText'>
                    <h3>Data Science / Analytics</h3>
                    <p>Good with Machine Learning, Deep Learing, Time Series Analysis,Recommendation Systems and Signal processing. In analytics able to work with PowerBI,Tableau and Looker.</p>
                </div>
            </div>
            <div className='SkillBar'>
                <div className='skillBarText'>
                    <h3>Web and Cloud Computing</h3>
                    <p>Use MVC , Server-Clientaand Microservice architectures.Springboot,ExpressJS with MySQL, PSQL, MongoDB and Cassendra and Have hands on experience with Google Cloud ( BigQuery , Bucket, Looker , VM , VertexAI, Workbench ),Azure (Data Bricks, Data Factory) and AWS ( EC2 , S3 Bucket) </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;