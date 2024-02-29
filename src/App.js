import "./App.scss";
import { Navbar } from "./components";
import { About, Header } from "./container";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Header/>
            <About/>
        </div>
    );
}

export default App;
