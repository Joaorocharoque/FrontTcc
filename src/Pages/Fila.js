import React, { useState } from 'react';
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

function Fila() {
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
    };

    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
        setInterval(UpdateTime, 1000)
    };

    return (
        <form onSubmit={handleSubmit}>

            <div align="center" class="title">
                <h1>Fila</h1>
                <br></br>
            </div>

            <div align="center">
                <input type="text" name="name" placeholder="Cliente:" onChange={handleInputChange} value={formValues.name || ''} />
            </div>

            <br></br>

            <div align="center">
                <select>
                    <option value="name">Eduardo</option>
                    <option value="name">Carlos</option>
                    <option value="name">Fabia</option>
                    <option value="name">Vagner</option>
                </select>
            </div>

            <div align="center">
                <DateTimePickerComponent
                    placeholder="Escolha Data e horário"
                    format={"dd/MM/yyyy"}
                    minDate={new Date()}>
                </DateTimePickerComponent>
            </div>

            <div align="center">
                <h2 > {ctime} </h2>
            </div>
        </form>
    );
}

export default Fila;