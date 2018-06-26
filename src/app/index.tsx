import * as React from "react";
import * as ReactDOM from "react-dom";

interface State {
    count: number;
    name: string;
}

interface Props {
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 1,
            name: ""
        };
    }

    protected plusOne: React.MouseEventHandler<HTMLDivElement> = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    protected minusOne: React.MouseEventHandler<HTMLDivElement> = () => {
        if (this.state.count <= 0) {
            count: 0;
        }
        else {
            this.setState(state =>({
                count: state.count - 1
            }));
        }

    }

    protected resetCounter: React.MouseEventHandler<HTMLDivElement> = () => {
        this.setState({
            count: 0
        });
    }

    protected setCounter: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (this.state.count <= 0) {
            count: 0;
        }
        this.setState({
            count: Number(event.target.value)
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <div>Counter: {this.state.count}</div>
                <div><input onChange={this.setCounter} type="text" value={this.state.count} /></div>
                <div onClick={this.plusOne}> Plus </div>
                <div onClick={this.minusOne}> Minus </div>
                <div onClick={this.resetCounter}> Reset </div>

            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
