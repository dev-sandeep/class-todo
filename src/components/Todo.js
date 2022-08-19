import React from "react";
import Addtodo from "./Addtodo"
import Todos from "./Todos"
import { Row, Col, Container, InputGroup, Form, Button } from "react-bootstrap"

export default class Todo extends React.Component {
    constructor(){
        super();
        this.state = {
            list: []
        }
    }

    saveTodo = (item)=>{
        //imp
        const newList = [...this.state.list, {
            id: this.generateRandomNum(),
            text: item
        }]
        this.setState({list: newList});
    }

    delete = (id)=>{
        let newList  = [];
        for(let i = 0; i < this.state.list.length; i++){
            if(id !== this.state.list[i].id){
                newList.push(this.state.list[i]);
            }
        }

        this.setState({list:newList});
    }

    //imp
    generateRandomNum = ()=>Math.floor(Math.random()*1000)
    
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Addtodo save={this.saveTodo} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <Todos delete={this.delete} list={this.state.list} />
                    </Col>
                </Row>
            </Container>
        );
    }
}