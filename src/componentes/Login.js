
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navegacion = useNavigate();
  

  const submitHandler = (e) => {
    e.preventDefault();
  
     
    navegacion("/listado");
   
  };

 
  return (
    <>
   
      
          <div className="container1"></div>
            <form className="boton" onSubmit={submitHandler}>
            
             
              <button type="submit" className="btn btn-light">
                  Ingresar
                </button>
                
              
            </form>
 

         
    </>
  );
}

export default Login;
