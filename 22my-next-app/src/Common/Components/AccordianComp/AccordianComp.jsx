'use client'
import React from "react";
import { Accordion } from "react-bootstrap";

const AccordianComp = ({data}) => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        {
            data?.map(({heading, body}, ind)=>{
                return <Accordion.Item key={`acc_head_${ind}`} eventKey={ind}>
                <Accordion.Header>{heading}</Accordion.Header>
                <Accordion.Body>
                  {body}
                </Accordion.Body>
              </Accordion.Item>
            })
        }
        
      </Accordion>
    </div>
  );
};

export default AccordianComp;
