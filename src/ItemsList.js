import React, {Component} from 'react';
import {Button, Col, Input,InputGroup,InputGroupAddon,InputGroupText} from "reactstrap";

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
const styles = {
    button: {
        width: 24, height: 24,
        padding: 0,
        marginLeft:5,
        marginRight:5
    },
    icon: {
        width: 24, height: 24,
    },
};
class ItemsList extends Component{
    constructor(props) {
        super(props);

        this.state={isEdit:false};
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onDelete(){
        const {onDelete,name,completed_status}=this.props;
        //console.log('props are' + this.props.e );
        console.log('original prop' + this.props.name);
        console.log('original prop2' + this.props.completed_status);
        // console.log('Keys' + this.props.key);
        //this.props.onDelete(this.props.name);
        onDelete(name);
    }

    onEdit(){
        this.setState({isEdit:true});
    }

    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(this.nameInput.value, this.props.name);
        this.setState({isEdit:false});
    }
    render() {
        const {name,price} = this.props;

        return (
            <div>{
                this.state.isEdit
                    ?(
                        <div>
                            <form onSubmit={this.onEditSubmit}>
                                <InputGroup>
                                    <Input style={{fontFamily:"Arial, Helvetica, sans-serif"}} innerRef={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                                    <InputGroupAddon addonType="append">
                                        <Button color="dark">Save</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </form>
                        </div>
                    ):(
                        <div style={{
                            display: "flex",
                            backgroundColor: "white",
                            borderRadius : 5,
                            padding : 4.5,
                            margin : 4
                        }}>
                            <Col style={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "left",
                                fontFamily:"Arial, Helvetica, sans-serif"
                            }} > <span>{name}</span>
                            </Col>



                            <IconButton style={styles.button} iconStyle={styles.icon} aria-label="delete" onClick={this.onDelete}>
                                <DeleteIcon />
                            </IconButton>


                            <IconButton style={styles.button} iconStyle={styles.icon} aria-label="edit" onClick={this.onEdit}>
                                <EditIcon />
                            </IconButton>




                        </div>
                    )
            }
            </div>
        );
    }
}

export default ItemsList;