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
                <input type="text" name="name" placeholder="Nome Completo:" onChange={handleInputChange} value={formValues.vetname || ''} />
                <br></br>
                <input type="number" name="crmv" placeholder="CRMV:" onChange={handleInputChange} value={formValues.cpf || ''} />
                <br></br>
                <input type="text" name="email" placeholder="Email:" onChange={handleInputChange} value={formValues.vetemail || ''} />
                <br></br>
                <input type="password" name="password" placeholder="Senha:" onChange={handleInputChange} value={formValues.password || ''} />
            </div>
            
            <br></br>

            <div align="center" class="wrapper">
                <button class="button" type="submit">Enviar</button>
            </div>

            <br></br>

            <footer className="footer">
                <p align="center" className="footer__copyright"></p>
            </footer>
        </form>
    );
}

export default CadastroVet;