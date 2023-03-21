import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import './newsTags.css';

export default function NewsTags() {
  return (
    <Row className='NewsTags-blocks'>
      <Col md='2' className='block'>
        <a href='#'> #breakingnews </a>
      </Col>
      <Col md='2' className='block'>
        <a href='#'> #review </a>
      </Col>
      <Col md='2' className='block'>
        <a href='#'> #article </a>
      </Col>
      <Col md='2' className='block'>
        <a href='#'> #opinion </a>
      </Col>
      <Col md='2' className='block'>
        <a href='#'> #pc </a>
      </Col>
      <Col md='2' className='block'>
        <a href='#'> #console </a>
      </Col>
      <Col md='2' className='block'>
        <a href='#'> #trending </a>
      </Col>
    </Row>
  );
}
