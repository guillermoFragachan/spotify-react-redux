import React from "react"
import {Container, Row, Col, ListGroupItem, ListGroup } from "react-bootstrap"
import {BsSuitHeartFill} from "react-icons/bs"
import {connect} from "react-redux"
import { removeFromLikes } from "../store/actions"

const mapDispatchToProps = (dispatch) => ({
    removeFromLikes: (l) => {
        dispatch(removeFromLikes(l))
    }
})

class Likes extends React.Component {
    render() {
        return(
            <Container>
                <Row>
                    <ListGroup>
                    {this.props.likes.elements.map((l) => (
                        <ListGroupItem>
                            <BsSuitHeartFill onClick={() => this.props.removeFromLikes(l)} />
                            <span>{l}</span>
                        </ListGroupItem>
                    ))}
                    </ListGroup>
                </Row>
            </Container>
        )
    }
}

export default connect((s) => s, mapDispatchToProps)(Likes)