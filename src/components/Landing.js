/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import MainNavbar from "./Navbars/MainNavbar.js";
import DoneWorkGallery from "./DoneWorkGallery/DoneWorkGallery";
import portrait from "../assets/portrait/portait.jpg";
import BasicFooter from "./Footers/CardsFooter";

class Landing extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }
    render() {
        return (
            <>
                <MainNavbar />
                <main ref="main">
                    <div className="position-relative">
                        <section className="section section-lg bg-gradient-default pb-300">
                            <Container className="py-lg-md d-flex pt-200">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="12">
                                            <h1 className="display-3 text-white">
                                                Remlak Ehitus OÜ{" "}
                                            </h1>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                    </div>
                    {/*Done Work*/}
                    <section className="section section-lg" id='tehtudtood'>
                        <Container className="pt-lg">
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3">Tehtud tööd</h2>
                                </Col>
                                <Col>
                                    <DoneWorkGallery/>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/*About Me*/}
                    <section className="section section-lg" id='minust'>
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-default shadow border-0">
                                        <CardImg
                                            alt="..."
                                            src={portrait}
                                            top
                                        />
                                        <blockquote className="card-blockquote">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="svg-bg"
                                                preserveAspectRatio="none"
                                                viewBox="0 0 583 95"
                                            >
                                                <polygon
                                                    className="fill-default"
                                                    points="0,52 583,95 0,95"
                                                />
                                                <polygon
                                                    className="fill-default"
                                                    opacity=".2"
                                                    points="0,42 583,95 683,0 0,95"
                                                />
                                            </svg>
                                            <h4 className="display-3 font-weight-bold text-white">
                                                Kalmer Koppa
                                            </h4>
                                            {/*<p className="lead text-italic text-white">*/}
                                            {/*    The Arctic Ocean freezes every winter and much of the*/}
                                            {/*    sea-ice then thaws every summer, and that process will*/}
                                            {/*    continue whatever happens.*/}
                                            {/*</p>*/}
                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="pl-md-5">
                                        <h3>Minust</h3>
                                        <p className="lead">
                                            Plaatimis kogemust üle 30 aasta
                                        </p>
                                        {/*<p>*/}
                                        {/*    The kit comes with three pre-built pages to help you get*/}
                                        {/*    started faster. You can change the text and images and*/}
                                        {/*    you're good to go.*/}
                                        {/*</p>*/}
                                        {/*<p>*/}
                                        {/*    The kit comes with three pre-built pages to help you get*/}
                                        {/*    started faster. You can change the text and images and*/}
                                        {/*    you're good to go.*/}
                                        {/*</p>*/}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/*Contact*/}
                    <section className="section section-lg bg-gradient-default" id='kontakt'>
                        <Container className="pt-lg pb-300">
                            <Row className="text-center justify-content-center">
                                <Col lg="10">
                                    <h2 className="display-3 text-white">Soovite plaatimisteenust</h2>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    {/*Email Me*/}
                    <section className="section section-lg pt-lg-0 section-contact-us">
                        <Container>
                            <Row className="justify-content-center mt--300">
                                <Col lg="8">
                                    <Card className="bg-gradient-secondary shadow">
                                        <CardBody className="p-lg-5">
                                            <h4 className="mb-1">Võtke minuga ühendust</h4>
                                            <p className="mt-0">
                                                Lepime aja kokku ja tulen vaatan üle
                                            </p>
                                            <FormGroup
                                                className={classnames("mt-5", {
                                                    focused: this.state.nameFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-user-run" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Sinu nimi"
                                                        type="text"
                                                        onFocus={e => this.setState({ nameFocused: true })}
                                                        onBlur={e => this.setState({ nameFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup
                                                className={classnames({
                                                    focused: this.state.emailFocused
                                                })}
                                            >
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Email aaddress"
                                                        type="email"
                                                        onFocus={e => this.setState({ emailFocused: true })}
                                                        onBlur={e => this.setState({ emailFocused: false })}
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="name"
                                                    placeholder="Töö kirjeldus...."
                                                    rows="4"
                                                    type="textarea"
                                                />
                                            </FormGroup>
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="button"
                                                >
                                                    Saada
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <BasicFooter />
            </>
        );
    }
}

export default Landing;
