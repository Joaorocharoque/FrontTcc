import { useState } from 'react';


function CadastroVet() {
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

        <form onSubmit={handleSubmit}>

            <div align="center" class="title">
                <h1>Cadastro Veterinario</h1>
            </div>

            <br></br>

            <div align="center">
                <input type="text" name="vetname" placeholder="Nome Completo:" onChange={handleInputChange} value={formValues.vetname || ''} />
                <br></br>
                <input type="number" name="vetcrmv" placeholder="CRMV:" onChange={handleInputChange} value={formValues.vetcrmv || ''} />
                <br></br>
                <input type="email" name="vetemail" placeholder="Email:" onChange={handleInputChange} value={formValues.vetemail || ''} />
                <br></br>
                <input type="password" name="vetpassword" placeholder="Senha:" onChange={handleInputChange} value={formValues.vetpassword || ''} />
            </div>
            
            <br></br>

            <div align="center" class="wrapper">
                <button class="button" type="submit">Enviar</button>
            </div>
        </form>
    );
}

export default CadastroVet;