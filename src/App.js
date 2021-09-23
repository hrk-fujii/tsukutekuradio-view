import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import PageHeader from './header/index';

function App() {
  return (
    <Container>
      <header>
        <Row>
          <PageHeader />
        </Row>
      </header>
    </Container>
  );
}

export default App;
