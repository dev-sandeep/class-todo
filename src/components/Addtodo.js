import React from "react";
import { Row, Col, Container, InputGroup, Form, Button } from "react-bootstrap"

export default class Todo extends React.Component {
    state = {
        currentValue: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            currentValue: ''
        }
        this.inputref = React.createRef();
    }

    addTodo = (e) => {
        this.setState({
            currentValue: e.target.value
        })
    }

    saveTodo = () => {
        this.props.save(this.state.currentValue);
        this.clear();
    }

    clear = () => {
        this.setState({
            currentValue: ''
        });
        this.inputref.current.value = '';
    }

    render() {
        return (
            <section className="outer-section">
                <h3>My Todo List</h3>
                <Container>
                    <Row className="lg-10">
                        <Col>
                            <input placeholder="Add todo"
                                onChange={this.addTodo}
                                ref={this.inputref}
                                defaultValue={this.state.currentValue}
                                currentValue={this.state.currentValue} 
                                type="text" />

                            <Button variant="outline-secondary" id="button-addon1" onClick={this.clear}>
                                Clear
                            </Button>
                            <Button variant="outline-secondary" id="button-addon2" onClick={this.saveTodo}>
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}