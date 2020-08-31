import React from 'react';
import '../Faqs/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';




const Faqs = () => {
    return ( 
        <>
            <div className="container-acordeon">
                <div className="acordeon">

                    <div className="acordeon-item" id="question1">
                        <a className= "acordeon-link"href="#question1">
                        ¿Cómo hago para reservar un departamento?

                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question2">
                        <a className= "acordeon-link"href="#question2">
                        ¿Cuál es el horario de check in y check out?

                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question3">
                        <a className= "acordeon-link"href="#question3">
                            ¿Quién me espera en el departamento?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question4">
                        <a className= "acordeon-link"href="#question4">
                            ¿Qué debo llevar ese día?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question5">
                        <a className= "acordeon-link"href="#question5">
                            ¿Qué servicios incluye el alquiler?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question6">
                        <a className= "acordeon-link"href="#question6">
                            ¿Con cuánto tiempo de anticipación debo reservar?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question7">
                        <a className= "acordeon-link"href="#question7">
                            ¿Puedo ingresar antes o después?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question8">
                        <a className= "acordeon-link"href="#question8">
                        ¿Puedo retirarme antes o después?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question9">
                        <a className= "acordeon-link"href="#question9">
                            ¿Por cuánto tiempo puedo alquilar?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question10">
                        <a className= "acordeon-link"href="#question10">
                            ¿Cuáles son los medios de pago?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question11">
                        <a className= "acordeon-link"href="#question11">
                            ¿Qué sucede si no puedo presentarme?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question12">
                        <a className= "acordeon-link"href="#question12">
                            ¿Cómo puedo cancelar mi reserva?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>
                    <div className="acordeon-item" id="question13">
                        <a className= "acordeon-link"href="#question13">
                            ¿Qué sucede si me olvido una pertenencia?
                            <FontAwesomeIcon icon={faPlusCircle} className="i" id="add"/>
                            <FontAwesomeIcon icon={faMinusCircle} className="i" id="remove" />
                        </a>
                        <div className="answer">
                            <p>lorem</p>
                        </div>
                    </div>




                </div>
            </div>
        </>


     );
}
 
export default Faqs;