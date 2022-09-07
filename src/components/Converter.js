import Button from 'react-bootstrap/Button';
import '../styles/Converter.css'


function Converter() { 

  let number = 84;
  let patate = 0.2;
  

  let convert = (patate * number).toFixed(2)
    
    return (
        <div className="container my-5">
          <h3 className="text-center"> Conversion de patates en mètre</h3>
          
         <p className="text-center">Choississez le nombre de patates à convertir:</p>
         <form className="text-center " method="post">

          <input type="number" className="numberConvert text-center" min="1" step="1"></input>
          <Button variant="success" className="ms-5">Convertir</Button>{''}

          {patate} {convert}

          <p> Il faut {number} patates pour faire {convert} mètre</p>
          
         </form>
        </div>
      );



}

export default Converter