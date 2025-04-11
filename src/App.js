import './App.css';
import {Button} from "antd";

function App() {
    return (
        <div className="w-full h-[100vh] flex justify-center items-center bg-pink-300 flex-col">
            <h1 className="text-white text-[50px]">Hello Linkie!</h1>
            <Button size={'large'} type="primary">Click here!!</Button>
        </div>
    );
}

export default App;
