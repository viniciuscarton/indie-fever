import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import './gameTags.css';

export default function GameTags() {
  return (
    <Row className='Tags-blocks'>
      <Col md='2' className='block'>
        <p>arcade</p>
      </Col>
      <Col md='2' className='block'>
        <p>simulation</p>
      </Col>
      <Col md='2' className='block'>
        <p>point n click</p>
      </Col>
      <Col md='2' className='block'>
        <p>rpg</p>
      </Col>
      <Col md='2' className='block'>
        <p>horror</p>
      </Col>
      <Col md='2' className='block'>
        <p>adventure</p>
      </Col>
      <Col md='2' className='block'>
        <p>on-line</p>
      </Col>
    </Row>
  );
}
