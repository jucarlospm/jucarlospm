import React, {useState, useEffect} from 'react';
import useInstagram from "../hooks/useInstagram";


const WidgetInstagram = () => {
  
  const resultado = useInstagram();
  const [instagram, guardarInstagram] = useState([]);

  useEffect(() => {
    guardarInstagram(resultado);
  }, []);
  
  return (
    <>  
    <div>
      <div>
        <h2>Instagram</h2>
      </div>
    </div>
    <div className="no-gutters">
      {instagram.map(instagram => (
        <div xs={4} md={2} >
          <img fluid src={instagram.src}/>
        </div>
      ))}
    </div>
    </>
  );
}
 
export default WidgetInstagram;