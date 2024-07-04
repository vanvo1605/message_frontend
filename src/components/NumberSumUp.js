import React, {useState} from 'react';
import axios from "axios";

function NumberSumUp(props) {
    const [startNum, setStartNum] = useState(0)
    const [endNumber, setEndNumber] = useState(0)
    const [result, setResult] = useState(0)

    function start_num_handler(e) {
        setStartNum(e.target.value)
    }

    function end_numb_handler(e) {
        setEndNumber(e.target.value)
    }

    function cal() {
        let data = JSON.stringify({
            "start_num": {startNum},
            "end_num": {endNumber}
        });
        console.log("==========-> ", data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://ssim-lemon.vercel.app//api/sum_numbers/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setResult(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <p>Start Number: <input type={"number"} id={'start'} onChange={start_num_handler}/></p>
            <p>End Number: <input type={"number"} id={'end'} onChange={end_numb_handler}/></p>
            <p>
                <button id={'calbtn'} onClick={cal}>Calculate</button>
            </p>
            <p>Result: {result}</p>
        </div>
    );
}

export default NumberSumUp;