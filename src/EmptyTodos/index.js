import React from "react";
import logo from '../Picture/box.png';
import './EmptyTodos.css';

function EmptyTodos(){
    return (        
        <div className="EmptyTodo-container">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            
            <div>
                <h1>Oh, no tienes ningún TODOs</h1>
                <h4>Utiliza el correspodiente botón para añadir</h4>
            </div>
            
        </div>
    );

}

export { EmptyTodos };