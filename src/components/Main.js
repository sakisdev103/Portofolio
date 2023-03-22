import React from 'react';
import ProjectList from './ProjectList';

const Main = () => {
  return (
    <>
        <main>
            <div className="intro-container">
                <span>Hi, my name is</span>
                <h1>Trentsios Athanasios.</h1>
                <h2>I build things for the web.</h2>
                <p>I’m a junior software developer specializing in front end and occasionally in back end. Currently, i am working improving my skills.</p>
            </div>
            <div className="about" id="about">
                <div className="me">
                    <h3><span>01.</span>About Me</h3>
                    <p>My name is Trentsios Athanasios, i am a junior front end developer based in Serres , Greece. I was born in 2001 in Serres , Greece and from young age i knew i wanted to be a programmer. In 2019 i went to my local university to study engeeniring of informatics, i stayed there for 2 years and then i left from the university and started to build apps. In 2021 i started my own company and in April of 2022 i sold it to a bigger company in my country. For the future i want to work as front end web developer and continue to make apps.</p>    
                </div>
                <div id="skills">
                    <h3>My Skills</h3>
                    <div className="skills">
                        <div>
                            <h5>Front End Development</h5>
                            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='icon'/>
                            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt='icon'/>
                            <img src="https://img.icons8.com/color/48/000000/css3.png" alt='icon'/>
                        </div>
                        <div>
                            <h5>Back End Development</h5>
                            <img src="https://img.icons8.com/officel/48/000000/php-logo.png" alt='icon'/>
                            {/* <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='icon'/> */}
                        </div>
                    </div>
                    <div className="learning-now">
                        <h3>Frameworks</h3>
                        <div>
                            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png" alt='icon'/>
                            <img src="https://img.icons8.com/plasticine/48/000000/react.png" alt='icon'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="work" id="work">
                <h3><span>02.</span>Work</h3>
                <ProjectList/>
            </div>
            <div className="contact" id="contact">
                <h3><span>03.</span>Contact</h3>
                <div className="contact-container">
                    <h1>Get In Touch</h1>
                    <p>I’m interested in freelance opportunities and job offerings . However, if you have other request or question, don’t hesitate to ask me.</p>
                    <a href="mailto:thanostrentsios103@gmail.com">Say Hello</a>
                </div>
            </div>
        </main>
    </>
  )
}

export default Main