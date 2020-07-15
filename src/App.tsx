import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from "./pages/About"
import Post from "./pages/Post"
import Home from "./pages/Home"

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <h1>Pinterest Jobs</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/post/:id" children={<Post />} />
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
