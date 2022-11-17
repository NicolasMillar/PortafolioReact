import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import pudu from '../../assets/images/pudu.png';
import guia from '../../assets/images/guia2.png';
import intranet from '../../assets/images/intranet.png';

const imagenes = [
    pudu,
    guia,
    guia,
    intranet,
];

const titulos = [
    "Pudu",
    "Java developer–LABCIM ",
    "Full Stack Developer–LABCIM ",
    "Intranet for a schoool",
];

const Descripcion = [
    "Pudu is MVP of an App that tells nutrition value and environment impact of foods, \nhelping you reach your fitness goals while taking care of the planet. This App was \ndeveloped for a IBM Call For Code 2022 in team whit two Software Engineer.",
    "I developed computer vision programs in Java using the OpenCV library, and then \ntransferred them to a Scorbot robotic arm, making it perform automated tasks with the \nhelp of number and symbol recognition. I developed educational guides and \ndocumentation for future developers.",
    "I developed the frontend of a web application, where I mainly used JavaScript, HTML, CSS and Bootstrap.\nSome of the functionalities I developed are: PDF generator from data received by Django Rest Framework, \na tool that displays dynamic graphics and some frontend views.",
    "this intranet specializes in facilitating the processes of registering/reviewing their annotations/ratings \nto users in a faster, more efficient and orderly manner."
];


const Portafolio = () => {

    const [iamgenActual, setImagenActual]= useState(0);
    const cantidad=imagenes.length;

    const next=() =>{
        setImagenActual(iamgenActual === cantidad-1 ? 0: iamgenActual+1);
    }

    const previus=() =>{
        setImagenActual(iamgenActual === 0?  cantidad-1 :iamgenActual-1);
    } 

    return(
        <>
            <div className='container portafolio-page'>
                <div className='text-zone'>
                    <div className='image'>
                        <button onClick={previus}><FontAwesomeIcon  icon={faArrowLeft} color="#ffd700" size='3x' /></button>
                        {imagenes.map((imagen,index) => {
                            return (
                                <div>
                                    { iamgenActual === index && (
                                       <h1>{titulos[index]}</h1>
                                    )}
                                    <div >
                                        { iamgenActual === index && (
                                            <img key={index} src={imagen} alt="imagen"/>
                                        )} 
                                    </div>
                                    { iamgenActual === index && (
                                       <p className="parrafo" >{Descripcion[index]} </p>
                                    )}
                                    
                                </div>
                            );
                        })}
                        <button onClick={next} className="leftbutton"><FontAwesomeIcon  icon={faArrowRight} color="#ffd700"  size='3x' /></button> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portafolio