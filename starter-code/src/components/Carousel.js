import React, {Component} from 'react'; 

class Carousel extends Component {
    state={
        currentIndex:0, 
    }; 
    goToPrevSlide = ()=> {
        this.setState({
            index: this.state.index-1, 
        }); 
    }; 
    goToNextSlide = ()=>{
        this.setState({
            index: this.state.index+1, 
        }); 
    }; 
    render() {
        return (
            <div className="container">
                <button onClick={this.goToPrevSlide}>Left</button>
                <img src={this.props.imgs[this.state.currentIndex]} alt="pic"/>
                <button onClick={this.goToNextSlide}>Right</button>
            </div>
        )
    }
}


export default Carousel; 