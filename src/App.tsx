import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom"
import About from "./pages/About"
import Post from "./pages/Post"
import Home from "./pages/Home"
import NotFound from "./pages/404"

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
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/404">
                        <NotFound />
                    </Route>
                    <Redirect to="/404" />
                </Switch>
            </div>
        </Router>
    )
}

export default App
