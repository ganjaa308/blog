import { Container, Row, Col, Navbar, Nav, Modal, Image, Card, Carousel } from "react-bootstrap"
import MyNavbar from "../components/my-navbar"

export default function Home() {
  return (
    <Container>
      <MyNavbar/>
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            {/* <Media className="mb-4 admin-intro">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="logo.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5 className="font-weight-bold mb-0">
                  1234.mn - Онлайн видео сургалт
                </h5>
                <p className="welcome-text">
                  Бид програмчлалыэн технологий чиглэлээр төрөл бүрийн
                  сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
                </p>
              </Media.Body>
            </Media> */}
            <div className="d-flex flex-row">
              <Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="logo.jpg"
                alt="Generic placeholder"
              />
              <div>
                <h5 className="font-weight-bold mb-0">
                  1234.mn - Онлайн видео сургалт
                </h5>
                <p className="welcome-text">
                  Бид програмчлалыэн технологий чиглэлээр төрөл бүрийн
                  сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Carousel>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1638459472395-e17f31ab879a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="First slide"
              // width="100%"
              // height={500}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Second slide"
              // width="100%"
              // height={500}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1638393630000-e0c2201e1465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        <hr/>

        <div className={'page-wrapper'}>
          <Row className="mb-5">
            <Col md="10">
              <Card className={'fj-card fj-card-list'}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 12 сарын 3
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      JAMstack архитектурын тухай
                    </Card.Title>
                    <Card.Text>
                      Статик сайт
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            
            <Col md="4">
              <Card className={'fj-card'}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 12 сарын 3
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190726/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>
                      Вэб технологи
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={'fj-card'}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 12 сарын 3
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190726/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>
                      Вэб технологи
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={'fj-card'}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 12 сарын 3
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190726/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>
                      Вэб технологи
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className={'fj-card'}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle mr-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 12 сарын 3
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190726/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>
                      Вэб технологи
                    </Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div> 
      <footer className="page-footer">
        <div>
          <a href="#">Нүүр</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">Фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  )
}