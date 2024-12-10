import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import WithState from './WithState';
import WithoutState from './WithoutState';
import './App.css';
import Footer2 from './Footer2';
import Calculator from './Calculator';
import { useState } from 'react';

// Home component
const Home = () => (
    <div>
        <h2>Welcome to Our App</h2>
        <p>This is the home page of our application.</p>
    </div>
);

const ReactApp = () => (
    <div>
        <h1>This is a header for this page </h1>
        <p>This is p tag for this page </p>
    </div>
);

// About component
const About = () => (
    <div>
        <h2>About Us</h2>
        <p>Learn more about our application and its features.</p>
    </div>
);

const Header = () => <header><h2>This is the Header</h2></header>;


function App() {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const theme = {
        light: {
            background: '#f5f5dc',
            text: '#333333',
            border: '#ccc',
            buttonBg: '#4CAF50',
            buttonText: 'white',
            inputBg: '#ffffff',
            inputBorder: '#ccc',
            navBg: '#f5f5dc',
            navText: '#333',
            navHoverBg: '#e9ecef',
            navHoverText: '#000'
        },
        dark: {
            background: '#2f4f4f',
            text: '#ffffff',
            border: '#555555',
            buttonBg: '#1a8a1f',
            buttonText: '#ffffff',
            inputBg: '#444444',
            inputBorder: '#666666',
            navBg: '#2f4f4f',
            navText: '#f8f9fa',
            navHoverBg: '#495057',
            navHoverText: '#ffffff'
        }
    };

    const currentTheme = isDarkTheme ? theme.dark : theme.light;

    return (
        <div
            style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.text,
                minHeight: '100vh',
                transition: 'all 0.3s ease'
            }}
        >
            <Router>
                <div className="App">
                    <nav
                        style={{
                            backgroundColor: currentTheme.navBg,
                            padding: '1rem',
                            marginBottom: '2rem',
                            transition: 'all 0.3s ease',
                            border: `1px solid ${currentTheme.border}`,
                        }}
                    >
                        <ul
                            style={{
                                listStyleType: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '2rem'
                            }}
                        >
                            <li>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: currentTheme.navText || 'black',
                                        fontWeight: 10000,
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        transition: 'background-color 0.5s, color 0.5s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = currentTheme.navHoverBg;
                                        e.target.style.color = currentTheme.navHoverText;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = currentTheme.nav;
                                    }}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    style={{
                                        textDecoration: 'none',
                                        color: currentTheme.navText,
                                        fontWeight: 500,
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = currentTheme.navHoverBg;
                                        e.target.style.color = currentTheme.navHoverText;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = currentTheme.navText;
                                    }}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/ReactApp"
                                    style={{
                                        textDecoration: 'none',
                                        color: currentTheme.navText,
                                        fontWeight: 500,
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = currentTheme.navHoverBg;
                                        e.target.style.color = currentTheme.navHoverText;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = currentTheme.navText;
                                    }}
                                >
                                    ReactApp
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/state-example"
                                    style={{
                                        textDecoration: 'none',
                                        color: currentTheme.navText,
                                        fontWeight: 500,
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        transition: 'background-color 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = currentTheme.navHoverBg;
                                        e.target.style.color = currentTheme.navHoverText;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'transparent';
                                        e.target.style.color = currentTheme.navText;
                                    }}
                                >
                                    State Example
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    
                    <button
                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                        style={{
                            position: 'absolute', 
                            top: '20px',          
                            right: '200px',        
                            padding: '8px 15px',
                            backgroundColor: currentTheme.buttonBg,
                            color: currentTheme.buttonText,
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        {isDarkTheme ? '🌞 Light' : '🌙 Dark'}
                    </button>


                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/ReactApp" element={<ReactApp />} />
                        <Route
                            path="/state-example"
                            element={
                                <div>
                                    <Header />
                                    <Footer />
                                    <h1>Understanding State in React</h1>
                                    <WithState />
                                    <WithoutState />
                                    <Calculator />
                                </div>
                            }
                        />

                    </Routes>
                    <Footer2 />
                </div>
            </Router>
        </div>
    );
}

export default App;