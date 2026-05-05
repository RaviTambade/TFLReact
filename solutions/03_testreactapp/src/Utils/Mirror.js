import React, { useState } from 'react';

const MirrorTextboxes = () => {
  // State to hold the text value
  const [text, setText] = useState('');

  // Handler to update the state
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <div>
                  <textarea type="text" value={text} onChange={handleChange}  />
            </div>
          </td>
          <td>
            <div>
                  <textarea type="text" value={text} onChange={handleChange} />
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MirrorTextboxes;
