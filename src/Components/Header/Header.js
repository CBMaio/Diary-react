import { Row, Col } from "react-bootstrap";
import { memo } from 'react';
import './header.css';

const Header = memo(({ title }) => {
  console.log('hi')
  return (
    <Row className="mb-3 header-container">
      <Col>
        <h1 className="text-center title"> {title} </h1>
      </Col>
    </Row>
  );
});

export default Header;
