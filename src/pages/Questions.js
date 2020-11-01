import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader } from "mdbreact";
import './Home.css'

class CollapsePage extends Component {
state={
  collapseID: "collapse3"
}

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

render() {
const { collapseID } = this.state;
  return (
    <div className="questions">
    <MDBContainer className="que">
      <h2 className="text-center">Частые вопросы</h2>
      <MDBContainer className="mt-5">
        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse1")}>
            <h4>Collapsible Group Item #1</h4>
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              Pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
              bird on it squid single-origin coffee nulla assumenda shoreditch
              et. Nihil anim keffiyeh helvetica, craft beer labore wes
              anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
              butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven&apos;t
              heard of them accusamus labore sustainable VHS.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse2")}>
          <h4>Collapsible Group Item #2</h4>
            <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute,
              non cupidatat skateboard dolor brunch. Food truck quinoa
              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
              put a bird on it squid single-origin coffee nulla assumenda
              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan
              excepteur butcher vice lomo. Leggings occaecat craft beer
              farm-to-table, raw denim aesthetic synth nesciunt you probably
              haven&apos;t heard of them accusamus labore sustainable VHS.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard className="mt-3 mb-3">
          <div onClick={this.toggleCollapse("collapse3")}>
          <h4>Collapsible Group Item #3</h4>
            <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
          </div>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute,
              non cupidatat skateboard dolor brunch. Food truck quinoa
              nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
              put a bird on it squid single-origin coffee nulla assumenda
              shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
              wes anderson cred nesciunt sapiente ea proident. Ad vegan
              excepteur butcher vice lomo. Leggings occaecat craft beer
              farm-to-table, raw denim aesthetic synth nesciunt you probably
              haven&apos;t heard of them accusamus labore sustainable VHS.
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
    </div>
    );
  }
}

export default CollapsePage;