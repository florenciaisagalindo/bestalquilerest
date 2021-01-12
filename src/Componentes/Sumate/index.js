import React, { useState } from "react";
import "./style.css";
import ReactPlayer from "react-player";
import { Modal, Form, Button } from "react-bootstrap";

const Sumate = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='contenedor-sumate'>
      <div className='video-sumate'>
        <ReactPlayer
          url={
            "https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/videos%2Fprueba.mp4?alt=media&token=61c50fc5-9e67-4d1a-b458-5d01fe8a6f88"
          }
          width='100%'
          height='100%'
          controls
          playing
          muted
          loop
        />
      </div>
      <div className='cont-sumate'>
        <div className='span-sumate'></div>
        <h2 className='titulo-suma'>Sumá tu propiedad</h2>
        <div className='span-sumate'></div>
        <h3 className='texto-suma'>
          {" "}
          ¿Tenés un depto o una casa de campo pero no tenés tiempo para
          gestionarlos? <br /> Sumalo a Best y nosotros nos encargamos de todo.{" "}
        </h3>
        <button className='saber-mas' onClick={handleShow}>
          SUMA TU PROPIEDAD
        </button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Dejanos tus datos y te contactamos</Modal.Title>
          </Modal.Header>
          <div className='sumate-formulario'>
            <Form>
              <Form.Group controlId='direccion'>
                <Form.Control
                  type='text'
                  placeholder='Dirección del inmueble'
                />
              </Form.Group>
              <Form.Group controlId='barrio'>
                <Form.Control type='text' placeholder='Barrio' />
              </Form.Group>
              <Form.Group controlId='provincia'>
                <Form.Control type='text' placeholder='Provincia' />
              </Form.Group>
              <Form.Group controlId='plataformas-select'>
                <Form.Label>Plataformas en las que está publicada:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ej.: Airbnb, Booking, etc.'
                />
              </Form.Group>
              <Form.Group controlId='fotos-profesionales'>
                <Form.Label>¿Tenés fotos profesionales?</Form.Label>
                <Form.Check
                  label='Sí'
                  type='radio'
                  name='fotos'
                  id='fotos-afirmativo'
                />
                <Form.Check
                  label='No'
                  type='radio'
                  name='fotos'
                  id='fotos-negativo'
                />
              </Form.Group>
              <Form.Group controlId='descripción-departamento'>
                <textarea
                  class='form-control'
                  type='text'
                  placeholder='Danos una breve descripción de los espacios y
        amoblamientos de tu inmueble...'
                  rows='5'
                ></textarea>
              </Form.Group>
              <Form.Group controlId='antecedentes'>
                <Form.Label>
                  ¿Recibiste huéspedes anteriormente o sos nuevo en esto?
                </Form.Label>
                <Form.Check
                  label='Sí'
                  type='radio'
                  name='huespedes'
                  id='antecedentes-afirmativo'
                />
                <Form.Check
                  label='No'
                  type='radio'
                  name='huespedes'
                  id='antecedentes-negativo'
                />
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Control type='email' placeholder='Email' />
              </Form.Group>
              <Form.Group controlId='telefono'>
                <Form.Control type='text' placeholder='Teléfono de contacto' />
              </Form.Group>
            </Form>
          </div>
          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              Enviar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Sumate;
