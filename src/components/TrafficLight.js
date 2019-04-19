import React, { Component } from 'react';

//import classnames
import classNames from 'classnames';

import './TrafficLight.css';

// 3 trang thai
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
// state luu cac gia tri noi tai cua component
// duoc phep get truc tiep
// khong duoc set truc tiep ma su dung setState
// cai props va state thay doi thi render dc goi tu dong
// state la gia tri noi tai khong the truy cap tu ben ngoai
class TrafficLight extends Component{
    // constructor(){
    //     super();
    //     this.state= {
    //         curentColor: RED
    //     };

    //     setInterval(() => {
    //         this.setState({
    //             curentColor: this.getNextColor(this.state.curentColor)
    //         });
    //     }, 1000);
    // }

    // lay trang thai tiep
    // getNextColor(color){
    //     switch(color){
    //         case RED:
    //             return ORANGE;
    //         case ORANGE:
    //             return GREEN;
    //         default:
    //             return RED;
    //     }
    // }

    render(){
        const {curentColor} =this.props;
        return (
            
            <div className = "TrafficLight">
                <div className = {classNames("bulb", "red", {active: curentColor=== RED})}></div>
                <div className = {classNames("bulb", "orange", {active: curentColor=== ORANGE})}></div>
                <div className = {classNames("bulb", "green", {active: curentColor=== GREEN})}></div>
            </div>
        );
    }
}

export default TrafficLight;