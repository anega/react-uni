import React from 'react';
import Header from 'components/Header';
import './App.css';

const App = () => {
    return (
        <>
            <Header/>
            <div>

                <h1>Registration</h1>
                <p>Fill in the registration data. It will take a couple of minutes. All you need is a phone number and
                    e-mail</p>
                <form action="">
                    <div>step 1</div>
                    <div>step 2</div>
                    <div>step 3</div>
                    <div>step 4</div>
                    <div>step 5</div>
                    <div>step 6</div>
                    <button>button</button>
                </form>
            </div>
        </>
    );
};

export default App;