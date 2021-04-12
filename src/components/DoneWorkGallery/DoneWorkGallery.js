import React from "react";

import doneWork from "../../assets/tehtudtood/too_1/neat-tiling-work.png";
import doneWork2 from "../../assets/tehtudtood/too_1/vannituba_1.jpg";
import Lightbox from "react-image-lightbox";
import {Col, Container, Row} from "reactstrap";

const images = [
    doneWork,
    doneWork2,
    doneWork,
    doneWork2,
    doneWork,
    doneWork2,
    doneWork,
    doneWork2,
    doneWork,
];
class DoneWorkGallery extends React.Component {
    constructor(){
        super();
        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render(){

        const { photoIndex, isOpen } = this.state;


        return(
            <Container>
                <Row>
                    <Col>
                        <img className='pt-1' src={doneWork} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                        <img className='pt-1' src={doneWork2} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />
                        <img className='pt-1' src={doneWork} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    </Col>
                    <Col>
                        <img className='pt-1' src={doneWork2} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                        <img className='pt-1' src={doneWork} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                        <img className='pt-1' src={doneWork2} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    </Col>
                    <Col>
                        <img className='pt-1' src={doneWork} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
                        <img className='pt-1' src={doneWork2} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
                        <img className='pt-1' src={doneWork} height={200} width={300} onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
                    </Col>
                </Row>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </Container>
        )
    };
}

export default DoneWorkGallery;