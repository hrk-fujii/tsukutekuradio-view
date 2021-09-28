import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import PageHeader from './header/index';
import PageTop from './contents/index/index'
import PageFooter from './footer/index'

function App() {
  return (
    <Container style={{"max-width": "720px"}}>
      <header>
        <Row>
          <PageHeader />
        </Row>
      </header>
      <Row>
        <PageTop />
      </Row>
      <footer>
        <Row>
          <PageFooter />
        </Row>
      </footer>
    </Container>
  );
}

export default App;
