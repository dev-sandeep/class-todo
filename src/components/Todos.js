import React from "react";

export default class Todos extends React.Component {
    
    render() {
        return (
            <>
                {this.props.list.map(el => (
                    <>
                        <div className="list">{el.text}</div>
                        <button onClick={()=>{this.props.delete(el.id)}}>X</button>
                    </>
                ))}
            </>
        );
    };
} 