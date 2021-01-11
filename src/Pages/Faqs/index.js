import React, { Component } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import "./style.css";

class CollapsePage extends Component {
  state = {
    collapseID: "false"
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBContainer id='cont-faqs'>
        <MDBContainer
          id='cont-accordion'
          className='accordion md-accordion accordion-3 z-depth-1-half'
        >
          <h2 class='text-center text-uppercase red-text py-4 px-3'>
            Preguntas Frecuentes
          </h2>

          <hr class='mb-0' />

          <MDBCard className='faqQuestion'>
            <h5>Horario de check in-out</h5>
            <MDBIcon
              icon={
                this.state.collapseID === "collapse1"
                  ? "angle-up"
                  : "angle-down"
              }
              className='red-text'
              size='2x'
              onClick={this.toggleCollapse("collapse1")}
            />
            <MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
          
          <MDBCard className='faqQuestion'>
              <h5>¿Cómo hago para reservar?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse2"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse2")}
              />
            <MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Quién me espera para darme las llaves?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse3"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse3")}
              />
            <MDBCollapse id='collapse3' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Puedo ingresar antes/después del horario?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse4"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse4")}
              />
            <MDBCollapse id='collapse4' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Puedo retirarme antes/después del horario?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse5"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse5")}
              />
            <MDBCollapse id='collapse5' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Qué incluye el departamento?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse6"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse6")}
              />
            <MDBCollapse id='collapse6' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Con cuánto tiempo de anticipación debo reservar?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse7"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse7")}
              />
            <MDBCollapse id='collapse7' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Por cuánto tiempo puedo alquilar?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse8"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse8")}
              />
            <MDBCollapse id='collapse8' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Cuáles son los medios de pago?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse9"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse9")}
              />
            <MDBCollapse id='collapse9' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Qué sucede si no puedo presentarme?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse10"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse10")}
              />
            <MDBCollapse id='collapse10' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Cómo puedo cancelar y con cuánto tiempo se devuelve la seña?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse11"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse11")}
              />
            <MDBCollapse id='collapse11' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Qué sucede si me olvido una pertenencia?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse12"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse12")}
              />
            <MDBCollapse id='collapse12' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h5>¿Qué debo llevar al departamento?</h5>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse13"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse13")}
              />
            <MDBCollapse id='collapse13' isOpen={this.state.collapseID}>
              <MDBCardBody class='pt-0'>
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default CollapsePage;
