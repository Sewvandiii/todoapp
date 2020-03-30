import React, {Component} from 'react';
import {Button, Input} from "reactstrap";

class AddProduct extends Component{
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        this.props.onAdd(this.nameInput.value);
        this.nameInput.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h5 className ="IT18040654_add">Add Item</h5>
                    <Input style={{marginBottom:10,fontFamily:"Arial, Helvetica, sans-serif"}} innerRef={nameInput => this.nameInput = nameInput}/>
                    <Button color="dark">Submit</Button>
                </form>
            </div>
        );
    }
}

export default AddProduct;