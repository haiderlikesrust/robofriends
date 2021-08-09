import React from 'react';

const alertThanks = () => {
    alert('Thanks :)')
}

const Button = () => {
    return (
        <div>
            <button type="button" style={{backgroundColor : "blue", border: "10px solid blue", borderRadius: "300px"}} onClick={alertThanks}>You Liked it?</button>
        </div>
    )
}

export default Button;