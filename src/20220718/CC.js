import { Component } from "react";

class CC extends Component {
    constructor() {
        super();
        this.state = { total: 0 };
        console.log("CC - constructor");
    }

    componentDidMount() {
        console.log("CC - componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            "CC - componentDidUpdate",
            "total =",
            this.state.total,
            "previous total = ",
            prevState.total
        );
    }

    componentWillUnmount() {
        console.log("CC - componentWillUnmount");
    }

    render() {
        console.log("CC - render");
        return (
            <>
                <h1>CC</h1>
                <h1
                    onClick={() => {
                        this.setState({ total: this.state.total + 1 });
                    }}
                >
                    {this.state.total}
                </h1>
            </>
        );
    }
}

export default CC;
