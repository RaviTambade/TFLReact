import EventEmitter from 'eventemitter3';
import {useState,useEffect } from 'react';

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
          <lable>Publisher</lable>
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
              <lable>Subscriber</lable>
              <p>Received Data ={data}</p>
            </div>
    ) ;
  }
  
 
function PubScrbContainer() {
  return (
    <div>
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

