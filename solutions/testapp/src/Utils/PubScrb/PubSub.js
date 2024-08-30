import EventEmitter from 'eventemitter3';
import { useState,useEffect } from 'react';
const emitter = new EventEmitter();

function Publisher() {

  const [text,setText]=useState('');

  const handleChange=(event)=>{
    setText(event.target.value);
  };


  const handleClick = (event) => {
    emitter.emit('update', text);
  };

  return (
        <div>
          <h2>Publisher</h2>
           <input type="text" value={text} onChange={handleChange}/>
            <button onClick={handleClick}>Publish Data</button>
        </div>
)
};


function Subscriber() {
    const [data, setData] = useState('');
  
    useEffect(() => {

      const handleUpdate = (newData) => {
        setData(newData);
      };
  
      emitter.on('update', handleUpdate);
  
      return () => {
        emitter.off('update', handleUpdate);
      };
    }, []);
  
    return (
            <div>
              <h2>Consumer</h2>
              <p>{data}</p>
            </div>
    ) ;
  }
  

  
function PubScrbContainer() {
  return (
    <div>
      <h1>Two Component Communication</h1>
      <hr/>
      <table>
        <tr>
          <td><Publisher/></td>
          <td><Subscriber/></td>
        </tr>
      </table>
    </div>
  );
}

export default PubScrbContainer;

