import './index.scss'
import AnimatedLeters from '../AnimatedLeters'
import { useEffect, useState } from 'react';
import Loader from 'react-loaders'

const About = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    
    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLeters letterClass={letterClass} strArray={['A', 'b','o','u','t',' ', 'm','e']} idx={15} />
                    </h1>
                    <p>
                        Computer Engineer with professional experience in Java, PHP, Laravel and relational database engines such as MySQL and PostgreSQL.
                        Good knowledge in HTML, CSS and JavaScript. Recently graduated in Computer Engineering from the UBB with all the competencies of 
                        the career as orientation towards collaborative work, organizational management and a permanent commitment to learning. 
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
        
    )
}

export default About