import React, {Component} from 'react';
import './App.css';

import  AddItem from './AddItem';
import  ItemsList from './ItemsList';
import swal from 'sweetalert';
import {Container,Row,Col} from 'reactstrap';

const products =[{name:'Swimming',
key:123,completed_status:false},{name:'Assignment',key:1234,completed_status:false}];

localStorage.setItem('products',JSON.stringify(products));
const reversed = products.reverse();
class App extends Component {
constructor(props) {    
    super(props);
    this.state ={products:JSON.parse(localStorage.getItem('products'))};
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit =this.onEditSubmit.bind(this);
}
    componentWillMount() {
        const products = this.getProduct();
        this.setState({products});
    }

    getProduct(){
        return this.state.products;
    }

    onAdd(name){
        // crossItem.map()
        swal("Item added successfully!", "Thank you!", "success");
        const products = this.getProduct();
        products.push({name});
        this.setState({products});

    //     event.preventDefault();
    //     const crossItem = this.completed_status;
    //     console.log(crossItem);
    //     if(crossItem.event !== ""){
    //         let crossItem = this.completed_status.products;
    //         let counter =0;

    //         crossItem.map(cross=>{
    //             if(cross.completed_status === true){
    //                 counter++;
    //             }
    //         })
    //         if(counter >0){
    //             let crossPending = crossItem.length-counter;
    //             let array2 = new Array();
    //             console.log('passed');
    //             for(let i = 0; i <counter;i++){
    //                 array2[i]= crossItem[crossPending+i];
    //             }
    //             let array1 = new Array();
    //             for(let i =crossPending; i>=0; --i){
    //                 array1[i]=crossItem[i];
    //             }
    //             array1[crossPending] = crossItem;
    //             console.log('array1'+ array1);
    //             const rArray = array1.reverse();
    //             const uArray = rArray.concat(array2);
    //             this.completed_status({
    //                 products:uArray,
    //                 crossItem:{
    //                     text:'',
    //                     key:'',
    //                     completed_status:false
    //                 }
    //             });
    //         }
    //         else{
    //             crossItem[crossItem.length] = crossItem;
    //             const rArray= crossItem.reverse();
    //             this.setState({
    //                 products:rArray,
    //                 crossItem:{
    //                     text:'',
    //                     key:'',
    //                     completed_status:false
    //                 }
    //             });
    //             console.log("This is the array "+ this.completed_status.products);
    //         }
    //     } 
    // }

    // setCompleted(completedItem){
    //     let fItems = this.completed_status.products.filter(cross=>cross.key!==completedItem.key);
    //     completedItem.completed_status=true;
    //     fItems[fItems.length]=completedItem;
    //     this.setState({
    //         products:fItems
    //     })
    // }
    }

    onDelete(name){
        swal("Item Deleted!", "", "error");
          
        const products =this.getProduct();
        const filteredProducts = products.filter(product =>{
            return product.name !== name;
        });
        this.setState({products:filteredProducts});
    }

    onEditSubmit(name,originalName){
        swal("Item updated successfully!", "Thank you!", "success");
        let products = this.getProduct();
        products = products.map(product =>{
            if(product.name === originalName){
                product.name = name;
            }
            return product;
        });
        this.setState({products});
    }

  render() {
    return (
        <div>
            <header className="IT18040654_header">
            <Container>
                <div className="IT18040654_background">
                <Row>
                    <Col>
                       <h1 className="IT18040654_title">TODO APP</h1>
                    </Col>
                </Row>

                <Row>
                    <Col className="IT18040654_description">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.</p>
                    </Col>
                </Row>
                </div>

                <Row>
                    <Col style={{marginBottom : 70}}></Col>
                </Row>
                <Row>
                    <Col>
                        <AddItem onAdd={this.onAdd} />
                    </Col>
                    <Col sm="1" ></Col>

                    <Col>
                        <h5 className="IT18040654_list">Items List</h5>
                        {
                        this.state.products.reverse().map(product => {
                            return (
                                <ItemsList
                                    key={product.name}
                                    // {...console.log('Key : ' + product.name)}
                                    {...product}
                                    onDelete={this.onDelete}
                                    onEditSubmit={this.onEditSubmit}
                                />
                            );
                        })
                    }
                    </Col>
                </Row>

            </Container>
            </header>
            

        </div>

    );
  }
}
export default App;
