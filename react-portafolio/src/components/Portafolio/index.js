import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import pudu from '../../assets/images/pudu.png';

const imagenes = [
    pudu,
    "https://picsum.photos/id/1025/200/400",
    "https://picsum.photos/id/1029/200/400",
];

const titulos = [
    "Pudu",
    "Titulo 2",
    "Titulo 3",
];

const Descripcion = [
    "An app that tells nutrition value and environment impact of foods, \nhelping you reach your fitness goals while taking care of the planet.",
    "Descripcion 2",
    "Descripcion 3",
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
                        <button onClick={previus}><FontAwesomeIcon  icon={faArrowLeft} color="#4d4d4e" /></button>
                        {imagenes.map((imagen,index) => {
                            return (
                                <div>
                                    { iamgenActual === index && (
                                       <h1>{titulos[index]}</h1>
                                    )}
                                    { iamgenActual === index && (
                                        <img key={index} src={imagen} alt="imagen"/>
                                    )}
                                    { iamgenActual === index && (
                                       <p className="parrafo" >{Descripcion[index]} </p>
                                    )}
                                    
                                </div>
                            );
                        })}
                        <button onClick={next}><FontAwesomeIcon  icon={faArrowRight} color="#4d4d4e" /></button> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portafolio