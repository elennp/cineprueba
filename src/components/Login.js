import axios from "axios";
import Swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navegacion = useNavigate();
   console.log(navegacion)

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // console.log(regexEmail.test(email));

    if (email === "" || password === "") {
      Swal(<h2> los campos no pueden estar vacios</h2>);

      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      Swal(
        <h2> Debes escribir una direccion de correo electronico valida</h2>
      );

      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      Swal(<h2> Credenciales invalidas</h2>);

      return;
    }

    axios
      .post("http://localhost:3000/", { email, password })
      .then((res) => {
        Swal(<h2> Perfecto , Ingresaste Correctamente</h2>);
        const tokenRecibido = res.data.token;
        
        sessionStorage.setItem("token", tokenRecibido);
        
        navegacion("/listado");
      });

     
        
   
  };

  
  //  let token =sessionStorage.getItem('token');
  return (
    <>
    {/* {token && <Link to="/listado"/> } */}
      <div className="container ">
        <div className="row justify-content-end">
          <div className="col-8">
            <h2 className="titulo-login">Formulario de login</h2>
            <form className="row g-4" onSubmit={submitHandler}>
              <label className="form-label">
                <span className="correoE">Correo electrónico:</span>
                <br />
                <input className="correoe" type="text" name="email" />
                <br />
              </label>
              <br />
              <label>
                <span className="contrasena">Contraseña:</span>
                <br />
                <input className="correoe" type="password" name="password" />
                <br />
              </label>
              <br />
              <div className="d-grid gap-2 d-md-block">
                <button type="submit" className="btn btn-dark">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;