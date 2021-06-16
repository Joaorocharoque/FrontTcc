import Button from '@material-ui/core/Button';
import '../login/style.css';

export default function LoginForm(props) {

  return (
      <div class='loginForm' onSubmit={props.submit}>
          <form>
                <h1>Product System</h1>
                <h4>Sign-in</h4>

                <input placeholder="Username" onChange={(event) => {props.inputUsername(event.target.value);}}></input>
                <br></br>
                <br></br>
                <input type="password" placeholder="Password" onChange={(event) => {props.inputPassword(event.target.value);}}></input>
                <br></br>
                <br></br>

                <Button type="submit">Enter</Button> 
          </form>
      </div>
  );
}