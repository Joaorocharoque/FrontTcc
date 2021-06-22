import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



function Fila() {
    const [selectedDate, setSelecteDate] = useState(null)
    const [startDate, setStartDate] = useState(new Date());

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

    return (
<form>
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

            <br></br>

            <div align="center">
            <label>Escolha a sua Data:</label>
            </div>

            <div align="center">
             
            <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      format={"dd/MM/yyyy"}
      locale="pt-BR"
      showTimeSelect
      timeFormat="p"
      timeIntervals={15}
      dateFormat="Pp"
    />
            </div>


            <br></br>
            <div align="center" class="wrapper">
                <button class="button" type="submit">Confirmar</button>
            </div>
            
            </form>

        
      
    );
}

export default Fila;