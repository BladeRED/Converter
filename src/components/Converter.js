import Button from 'react-bootstrap/Button';
import '../styles/Converter.css'


function Converter() { 
    
    return (
        <div className="container my-5">
          <h3 className="text-center"> Conversion de patates en mètre</h3>
          
         <p className="text-center">Choississez le nombre de patates à convertir:</p>
         <form className="text-center " method="post">

          <input type="number" className="numberConvert text-center" min="1" step="1"></input>
          <Button variant="success" className="ms-5">Convertir</Button>{''}
          
         </form>
        </div>
      );



}

export default Converter