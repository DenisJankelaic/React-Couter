import * as React from "react";
import * as ReactDOM from "react-dom";

interface State {
    count: number
}

interface Props {

}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    protected plusOne: React.MouseEventHandler<HTMLDivElement>=() => {
        this.setState({
            count: this.state.count + 1
        });
    }

    protected minusOne: React.MouseEventHandler<HTMLDivElement>=() =>  {
        this.setState({
            count: this.state.count - 1
        });
    }

    protected resetCounter: React.MouseEventHandler<HTMLDivElement>=() =>  {
        this.setState({
            count: 0
        });
    }

    protected setCounter(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            count: Number(event.target.value)
        });
    }

    public render(): JSX.Element {
        return (
            <div>
                <div>Counter: <input onChange= {(event: React.ChangeEvent<HTMLInputElement>) => this.setCounter(event)} type="number" value={this.state.count}/></div>
                <div onClick={this.plusOne}> Plus </div>
                <div onClick={this.minusOne}> Minus </div>
                <div onClick={this.resetCounter}> Reset </div>

            </div>

        );
    }
}

ReactDOM.render(<App />, document.getElementById("react-app"));
