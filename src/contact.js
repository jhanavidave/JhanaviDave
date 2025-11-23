import React from 'react';
import github from './images/github.png';
import gmail from './images/gmail.png';
import hackkerrank from './images/hackerrank.png';
import instagram from './images/instagram.jpg';
import leetcode from './images/leetcode.png';
import linkedin from './images/linkedin-short.png';
import meta from './images/meta.png';
import resume from './Jhanavi Dave Resume.pdf';

function Contact() {
    return (
        <div>
            <p id="res-head">
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=jhanavi.dave.01@gmail.com'><img src={gmail} alt='Gmail: jhanavi.dave.01@gmail.com' height='30px' width='40px' /></a>
                <a href={resume} download="Jhanavi Dave Resume.pdf"><button class="download-resume">Download Resume</button></a>
                <a href='https://github.com/jhanavidave' ><img src={github} alt='GitHub: https://github.com/jhanavidave' height='100px' width='100px' /></a>
                <a href='https://www.linkedin.com/in/jhanavi-dave/' ><img src={linkedin} alt='Linkedin: https://www.linkedin.com/in/jhanavi-dave/' height='100px' width='100px' /></a>
                <a href='https://leetcode.com/u/JhanaviDave/' ><img src={leetcode} alt='Leetcode: https://leetcode.com/u/JhanaviDave/' height='100px' width='100px' /></a>
                <a href='https://www.hackerrank.com/profile/jhanavi_dave_01' ><img src={hackkerrank} alt='HackkerRank: https://www.hackerrank.com/profile/jhanavi_dave_01' height='100px' width='100px' /></a>
                <a href='https://www.metacareers.com/profile/jhanavi-dave'><img src={meta} alt='Meta: https://www.metacareers.com/profile/jhanavi-dave' height='100px' width='150px' /></a>
                <a href='https://www.instagram.com/girl_from_outerspace/'><img src={instagram} alt='Instagram: https://www.instagram.com/girl_from_outerspace/' height='100px' width='100px' /></a>
            </p>

            <div style={{ width: '100%', justifyContent: 'space-evenly', display: 'flex', flexWrap: 'wrap', }}>
                
            </div>

        </div>
    );
}

export default Contact;