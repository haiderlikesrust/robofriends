import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots : users}))
    }

    onSearchChange= (event) => {
        this.setState( {searchField : event.target.value} )
        console.log(event.target.value);
        // const filteredRobot = this.state.robots.filter(robots => {
        //     return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        // })
    }

    render() {
        const { robots, searchField } = this.state
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!robots.length) {
            return <h1>Loading</h1>
        } else{
            return(
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}


export default App;