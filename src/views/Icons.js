
import React from "react";
import AllComplains from "../components/AllComplains"
// reactstrap components
import "./style.css"
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";



function Icons() {
  

    return (
    <>
    
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <AllComplains />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
