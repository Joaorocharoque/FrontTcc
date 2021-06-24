import { useState } from 'react';


function CadastroCliente() {
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
                <h1>Cadastro Cliente</h1>
            </div>

            <br></br>

            <div align="center">
                <input type="text" name="name" placeholder="Nome Completo:" onChange={handleInputChange} value={formValues.name || ''} />
                <br></br>
                <input type="number" name="idade" placeholder="Idade do Animal:" onChange={handleInputChange} value={formValues.idade || ''} />
                <br></br>
                <input type="text" name="animalname" placeholder="Nome do Animal:" onChange={handleInputChange} value={formValues.animalname || ''} />
                <br></br>
                <input type="text" name="email" placeholder="Email:" onChange={handleInputChange} value={formValues.email || ''} />
                <br></br>
                <input type="password" name="password" placeholder="Senha:" onChange={handleInputChange} value={formValues.password || ''} />
            </div>
            
            <br></br>
            <div align="center" class="wrapper">
                <button class="button" type="submit">Enviar</button>
            </div>

            <br></br>
        </form>
    );
}

export default CadastroCliente;