import {Container, Row, Col} from 'react-bootstrap';
import ClassApi from './components/ClassApi';
import FunctionApi from './components/FunctionApi';
import AxiosClassApi from './components/AxiosClassApi';
import AxiosFunctionApi from './components/AxiosFunctionApi';

function App() {
  return (
    <Container>
      <Row>
        <Col md="3">
          <ClassApi/>
        </Col>
        <br/>
        <Col md="3">
          <FunctionApi/>
        </Col>
        <br/>
        <Col md="3">
          <AxiosClassApi/>
        </Col>
        <br/>
        <Col md="3">
          <AxiosFunctionApi/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
