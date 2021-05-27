import './App.css';
import {useState} from "react";

function App() {
    const [fromServer, setFromServer] = useState('');

    const getFromServer = () => {
        fetch("/hello", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                setFromServer(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className="App">
            <button onClick={getFromServer}>
                Load from Server
            </button>
            <h2>
                --{fromServer}--
            </h2>
        </div>
    );
}

export default App;
