import React from "react"

export class NoneFound extends React.Component {
    render() {
        const text = "Not found"

        return (
            <div>
                <h1>{text}</h1>
            </div>
        )
    }
}
