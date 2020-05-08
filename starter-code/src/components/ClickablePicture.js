import React, {Component} from "react";

class ClickablePicture extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            clicked: false
        }
    }
    clickedHandler = () => {
        this.setState({clicked: !this.state.clicked})
    }



    
    render (){
                let clickedImage = " ";
                if (this.state.clicked){
                    clickedImage = this.props.img
                }else {
                    clickedImage = this.props.imgClicked
                }
        return(
            <div>
                <img src={clickedImage} onClick={this.clickedHandler}/>
            </div>
        )
    }
}


export default ClickablePicture;