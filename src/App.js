import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import PageHeader from './header/index';
import PageTop from './body/index/index'
import PageFooter from './footer/index'

function App() {
  return (
    <Container>
      <header>
        <Row>
          <PageHeader />
        </Row>
      </header>
      <body>
        <Row>
          <PageTop />
        </Row>
      </body>
      <footer>
        <Row>
          <PageFooter />
        </Row>
      </footer>
    </Container>
  );
}

export default App;
