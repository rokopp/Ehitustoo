import React from "react";

import {Col, Row, UncontrolledCarousel} from "reactstrap";
import doneWork from "../../assets/tehtudtood/too_1/neat-tiling-work.png";
import doneWork2 from "../../assets/tehtudtood/too_1/vannituba_1.jpg";


const items = [
    {
        src: doneWork2,
        altText: '',
        caption: '',
        header: ''
    },
    {
        src: doneWork,
        altText: '',
        caption: '',
        header: ''
    }
];

class Carousels extends React.Component {
    render() {
        return (
            <Row>
                <Col className='h-50'>
                    <UncontrolledCarousel items={items}/>
                </Col>
            </Row>
        );
    }
}

export default Carousels;