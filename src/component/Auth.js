import React,{Component} from 'react'
import { connect } from 'react-redux'


class Auth extends Component{
    constructor() {
        super()
        this.state = {
            id: '',
            username: '',
            pasword: '',
            profile_pic: '',
        }
    this.login = this.login.bind(this);
    }
    
    login ()  {
        let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`
        let clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
        let scope = encodeURIComponent('openid profile email')
        let redirectUri = encodeURIComponent(`${window.location.origin}/auth/callback`)
    
        let location = `${auth0domain}/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=code`
    
        window.location = location
      }

    render(){
        return(
            <div>
                Auth
                {this.props.user ? <h1>Aloha, {this.props.user.name}</h1> :
                <button onClick={this.login}>Login</button>}
                {/* <button>Register</button> */}
            </div>

        )
    }

}

let mapStateToProps = state => {
    
    //let { data } = state.user

    return {
        user: state.user.data
    }
}

export default connect(mapStateToProps)(Auth) 