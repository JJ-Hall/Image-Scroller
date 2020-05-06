import React from 'react'
import { Link } from 'gatsby'
import '../styles/ImageCard.css'

class ImageCard extends React.Component {
    render() {
        return (
            <div className="imageCard-div">

                <img src= {this.props.url}></img>

                {/* <div className="imageCard-body">
                    <h2>{this.props.author}</h2>
                </div> */}

            </div>
        )
    }
}

export default ImageCard