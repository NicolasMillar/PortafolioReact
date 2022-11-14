import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const imagenes = [
    "https://picsum.photos/id/1020/200/400",
    "https://picsum.photos/id/1025/200/400",
    "https://picsum.photos/id/1029/200/400",
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
                                        <img key={index} src={imagen} alt="imagen"/>
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