import React, { Component } from 'react';

    class ClickablePicture extends Component {
        state = {
           active : false
        }
        likeHandler = () => {
            this.setState({
              active: !this.state.active
            })
          }
        render() {
            let imageDisplay = '';
            if (this.state.active) {
              imageDisplay = this.props.img
            } else {
              imageDisplay = this.props.imgClicked
            }
            // console.log(logo);
            return (
              
           <div>
            <div  className = "" >
                <img src = {imageDisplay} onClick={this.likeHandler}/>
            </div>
            </div>
            )
        }
        
      }

export default ClickablePicture;