import { useState } from 'react';


function CadastroSec() {
    const [formValues, setFormValues] = useState({});
//secname
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
                <h1>Cadastro Secretaria</h1>
            </div>

            <br></br>

            <div align="center">
                <input type="text" name="secname" placeholder="Nome Completo:" onChange={handleInputChange} value={formValues.secname || ''} />
                <br></br>
                <input type="number" name="seccpf" placeholder="CPF:" onChange={handleInputChange} value={formValues.seccpf || ''} />
                <br></br>
                <input type="email" name="secemail" placeholder="Email:" onChange={handleInputChange} value={formValues.secemail || ''} />
                <br></br>
                <input type="password" name="secpassword" placeholder="Senha:" onChange={handleInputChange} value={formValues.secpassword || ''} />
            </div>
            
            <br></br>

            <div align="center" class="wrapper">
                <button class="button" type="submit">Enviar</button>
            </div>
        </form>
    );
}

export default CadastroSec;