import './App.css';
import {format, formatDistance, formatRelative, subDays} from "date-fns";

function App() {
    const today = format(new Date(), 'dd.MM.yyyy HH:mm');
    return (
        <div className="App">
            <div className="header">
                <div id="icon">
                    <h1 id="date">{today}</h1>
                </div>
            </div>
            <div className="container">
                <div className="img" id="first">
                    <h1 id="word">HEY</h1>
                </div>
                <div className="img" id="second">
                    <h1 id="word">LET'S</h1>
                </div>
                <div className="img" id="third">
                    <h1 id="word">GIVE</h1>
                </div>
                <div className="img" id="four">
                    <h1 id="word">ALL</h1>
                </div>
                <div className="img" id="five">
                    <h1 id="word">YOU CAN</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
