import React from "react";
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000)
        
    }
    render() {
        return (
            <div>
    <h1 className='titre'>{this.props.pro.fullName}</h1>
    <h1 className='bio'>{this.props.pro.bio}</h1>
    <img className="image"src={this.props.pro.imgSrc} alt="pictur"/>
    <h1 className='pro'>{this.props.pro.profession}</h1>
   <h1 className="cnt">COUNT: {this.state.count}{" "}seconds</h1>
            </div>
        )
    }
}

export default Profile;