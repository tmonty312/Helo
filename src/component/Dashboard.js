import React,{Component} from 'react'


class Dashboard extends Component{
    constructor(){
    super()
    this.state = {
        posts: []
    }

    }

    render(){
        return(
            <div>
                <input>Search</input>
                <button>Search</button>
                <button>Reset</button>

             Dashboard
            </div>

        )
    }

}

export default Dashboard;
