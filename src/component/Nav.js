import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../ducks/reducers/reducer'



function Nav (props){
    let match = this.props.match;
            return(
            <div>
                <Link to="/Dashboard"><button>Home</button></Link>
                <Link to="/new"><button>New Post</button></Link>
                {props.user ? <Link to="/" onClick={props.logout}>logout</Link> : <Link to="/">login</Link>}
            </div>

        )
    }

    let mapStateToProps = state => {
        return{
            user: state.user.data
        
        }
    }

export default connect(mapStateToProps, {logout})(Nav);
