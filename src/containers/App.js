import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';


const App = () =>  {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, [])



    const  onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if (!robots.length) {
        return <h1 style={{textAlign: "center"}}>Loading</h1>
    } else{
        return(
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobot}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
    
}


export default App;