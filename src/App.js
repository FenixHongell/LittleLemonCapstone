import "./App.css";
import logo from "./logo.svg";
import {
  Button,
  Card,
  Navbar,
  Container,
  Nav,
  Image,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./colors.css";
import headImage from "./headImage.jpg";
import menuImage from "./menuImage.jpg";
import tableImage from "./tablesImage.jpg";
import menuSide from "./menuSide.jpg";
function App() {
  return (
    <div>
      <Navbar fixed="top" className="lemon-primary" variant="dark">
        <Container className="bodoni">
          <Navbar.Brand href="#main">
            <img
              alt="logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#Tables">Tables</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Image id="main" src={headImage} fluid={true}></Image>
      <Container className="center m-top-25 m-bottom-25">
        <Card className="mx-auto bt">
          <Card.Body>
            <Card.Title id="About" className="bodoni-bold">
              About
            </Card.Title>
            <Card.Text className="bodoni">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              laoreet iaculis convallis. Donec id orci ornare, lobortis orci
              vel, maximus urna. Integer ut est non nisl semper venenatis. In
              auctor interdum ex a tincidunt. Maecenas vulputate, quam quis
              blandit sodales, dolor mi maximus nunc, vitae ultricies libero leo
              id dui. Donec ut ipsum turpis. Suspendisse venenatis nunc in orci
              elementum, at convallis nulla accumsan. Quisque nec tellus
              tristique magna congue viverra.
              <br></br>
              <br></br>
              Pellentesque venenatis pharetra aliquam. Pellentesque suscipit
              turpis et urna porttitor, non pretium tortor dictum. Ut ut tortor
              viverra, sagittis elit id, viverra lectus. Duis neque dolor,
              rutrum et porttitor quis, posuere non erat. Aenean vitae venenatis
              turpis. Cras in nisi aliquet, pharetra metus ac, viverra turpis.
              Donec sollicitudin felis vitae ipsum pharetra, sit amet feugiat
              velit convallis. Ut egestas iaculis tempus. Nullam at pulvinar
              lectus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vivamus malesuada, urna non
              pellentesque porta, nulla lacus aliquet sem, non pulvinar mi urna
              sit amet quam. Fusce nisl est, vehicula eu quam et, efficitur
              luctus massa. Duis libero metus, efficitur non ullamcorper et,
              imperdiet sit amet sapien.
              <br></br>
              <br></br>
              Vestibulum ultrices lectus felis, quis dictum magna ultricies a.
              Aliquam iaculis lorem consequat felis tristique pellentesque.
              Vivamus tellus est, eleifend non est sed, consectetur tristique
              libero. Phasellus sodales, erat a vulputate faucibus, ex enim
              consectetur dolor, eget rhoncus nibh ex id eros. Mauris ut rhoncus
              felis. Donec finibus eros sed nisi efficitur, suscipit vehicula
              orci ultrices. Integer tincidunt volutpat urna id luctus.
              Phasellus tincidunt lectus vel viverra viverra. Sed posuere dolor
              sit amet risus blandit, id bibendum justo facilisis. In sodales
              est vitae metus lacinia malesuada. Sed volutpat mollis lorem, at
              gravida nibh. Etiam dictum blandit ligula, nec pulvinar lorem
              fringilla in. Suspendisse non pulvinar dui.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Image id="Menu" src={menuImage} fluid={true}></Image>
      <Container className=" bodoni center m-top-25 aic df">
        <Row>
          <Col>
            <Card className="w-100 mx-auto br">
              <Card.Body>
                <p className="bold">Dish 1</p>
                <p>some more text</p>
                <p className="bold">Dish 2</p>
                <p>some more text</p>
                <p className="bold">Dish 3</p>
                <p>some more text</p>
                <p className="bold">Dish 4</p>
                <p>some more text</p>
                <p className="bold">Dish 5</p>
                <p>some more text</p>
                <p className="bold">Dish 6</p>
                <p>some more text</p>
                <p className="bold">Dish 7</p>
                <p>some more text</p>
                <p className="bold">Dish 8</p>
                <p>some more text</p>
                <p className="bold">Dish 9</p>
                <p>some more text</p>
                <p className="bold">Dish 10</p>
                <p>some more text</p>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-none d-lg-block">
            <Image src={menuSide} fluid={true}></Image>
          </Col>
        </Row>
      </Container>
      <Image
        className="m-top-25"
        id="Tables"
        src={tableImage}
        fluid={true}
      ></Image>
      <Container className=" bodoni center m-top-25 m-bottom-25">
        <Card className="mx-auto bt ">
          <Card.Body>
            <Card.Title className="bodoni-bold">Tables</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nec fringilla purus. Donec justo nunc, malesuada elementum dapibus
              vel, sollicitudin vel velit. Suspendisse elementum vehicula.
            </Card.Text>
            <Form className="m-top-25">
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We will contact you with a confirmation.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Date" />
                    <Form.Text className="date-muted">
                      What day you are planning on comming.
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                      Use this name to get seated.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>No. Seats</Form.Label>
                    <Form.Control type="number" placeholder="Number of seats" />
                    <Form.Text className="numbers-muted">
                      Number of seats at the table
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Button className="lemon-secondary shadow btn mx-auto m-top-25 ">
                Book a table
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
