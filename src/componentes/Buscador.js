import {useNavigate}from 'react-router-dom'
import swal from "sweetalert";

function Buscador() {
  const navegacion = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const keyword= e.currentTarget.keyword.value.trim()
        
        if(keyword.length === 0){
           swal(<h5>Tiene que escribir una palabra</h5>)
        }else if (keyword.length <4){
            swal(<h5>Tiene que escribir mas de 4 caracteres</h5>)
        }else{
          e.currentTarget.keyword.value='';
          navegacion(`/resultados?keyword=${keyword}`)
        }
    }
  return (


    <form className="d-flex alig-items-center" onSubmit={submitHandler}>

      <label className="form-label mb-0 mx-4 my-2">
        <input className="form-control" type="text" name="keyword" placeholder="Buscar.."/>
      </label>
        <button type="submit" className="btn btn-success  mx-3">Buscar</button>
      
    </form>
  );
}

export default Buscador;
