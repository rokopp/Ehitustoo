import React from "react";
// reactstrap components
import {
    Button,
    Modal,
    Row,
    Col
} from "reactstrap";
import Carousel from "../Carousel/Carousel";

class Modals extends React.Component {
    state = {
        defaultModal: false
    };
    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };
    render() {
        return (
            <>
                <Row>
                    <Col md="4">
                        <Button
                            block
                            className="mb-3"
                            color="primary"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal")}
                        >
                            Default
                        </Button>
                        <Modal
                            className="modal-dialog-centered"
                            isOpen={this.state.defaultModal}
                            toggle={() => this.toggleModal("defaultModal")}
                        >
                            <div className="modal-header">
                                <h6 className="modal-title" id="modal-title-default">
                                    Tehtud tööd
                                </h6>
                                <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() => this.toggleModal("defaultModal")}
                                >
                                    <span aria-hidden={true}>×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Carousel/>
                            </div>
                        </Modal>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Modals;