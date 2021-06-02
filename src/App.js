import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     const formData = new FormData(e.target);
     const data = Object.fromEntries(formData);

     console.log('*** handleSubmit', data);
  };
   console.log('***** formValues', formValues)
  return(

 <form onSubmit={handleSubmit}>
   <div class="title">
       <h1>QueueVet</h1>
    </div><br></br>
    <input type="text" name="name" placeholder="Nome:" onChange={handleInputChange} value={formValues.name || ''}/>
    <input type="number" name="cpf" placeholder="CPF:" onChange={handleInputChange} value={formValues.cpf || ''}/>
    <input type="text" name="email" placeholder="Email:" onChange={handleInputChange} value={formValues.email || ''}/>
    <input type="password" name="numero" placeholder="Senha:" onChange={handleInputChange} value={formValues.senha || ''}/>

  <div class="wrapper">
    <button class="button" type="submit">Enviar</button>
  </div>
  </form>
  );
}

export default App;