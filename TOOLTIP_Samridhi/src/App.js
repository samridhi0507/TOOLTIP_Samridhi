import React, { useState } from 'react';
import './App.css';
import Button from './Button';
function App() {

  const [tooltipData, setTooltipData] = useState({
    targetElement: 'btn3',
    position: 'top',
    style: {},
    tooltiptext: 'Tooltip text goes here',
    textsize: '16',
    padding: '4',
    color: '#fff',
    bgcolor: '#000',
    radius: '4',
    width: '146',
    arrowWidth: '13',
    arrowHeight:'8',
  });

  const handleInputChange = (event) => {
    // form image we cann access using file Object
    const { name, value } = event.target;
    const updatedData = { ...tooltipData };
      updatedData[name] = value;
    setTooltipData(updatedData);
  };

  return (
    <div className="App">
      <div className='Tooltip-form-container'>
        <div className='Tooltip-form-wrap'>
        <div className='Btn-input Tooltip-label'>
          <label for="inputbtn">TragetElement:</label>
            <select  className='Tooltip-input select-input' id="btn" name="targetElement" onChange={handleInputChange}>
              <option value="btn1">Button1</option>
              <option value="btn2">Button2</option>
              <option value="btn3" selected="selected">Button3</option>
              <option value="btn4">Button4</option>
              <option value="btn5">Button5</option>
            </select>
        </div>

        <div className="Tooltip-text Tooltip-label">
          <label>
              TooltipText:
          </label>
            <input type="text" className='Tooltip-input'
              placeholder={tooltipData.tooltiptext}
              name="tooltiptext" onChange={handleInputChange} />
          
        </div>

        <div className="Tooltip-size-and-padding ">
          <div className='Tooltip-text-size Tooltip-label'>
                 <label>
                  Text Size:
                </label>
              <input className='Tooltip-input text-size' type="text"
                placeholder={tooltipData.textsize}
                name="textsize" onChange={handleInputChange} />
          </div>

          <div className="Tooltip-padding Tooltip-label">
                <label>
                Padding:
                </label>
              <input type="text" className='Tooltip-input text-size'
                placeholder={tooltipData.padding}
                name="padding" onChange={handleInputChange} />
          
          </div>

        </div>

        <div className="Tooltip-setting-color Tooltip-label">
          <label>
              Text Color:
          </label>
            <input type="text" className='Tooltip-input'  placeholder={tooltipData.color} name="color" onChange={handleInputChange} />
          
        </div>

        <div className="Tooltip-bg-color Tooltip-label">
          <label>
              Background color:
          </label>
            <input type="text" className='Tooltip-input' 
             placeholder={tooltipData.bgcolor} name="bgcolor" onChange={handleInputChange} />
        </div>

      
        <div className="Tooltip-setting Tooltip-size-and-padding">
          <div className='Tooltip-cornor-radius Tooltip-label'>
              <label>
                Corner radius:
                </label>
              <input type="text" className='Tooltip-input text-size'
                placeholder={tooltipData.radius} name="radius" onChange={handleInputChange} />
              
          </div>

          <div className="Tooltip-width Tooltip-label">
           <label>
                Tooltip width:
            </label>
              <input type="text" className='Tooltip-input text-size'
                placeholder={tooltipData.width}
                name="width" onChange={handleInputChange} />
          
          </div>


          <div className="Tooltip-arrow-width Tooltip-label">
           <label>
                Arrow width:
            </label>
              <input type="text" className='Tooltip-input text-size'
                placeholder={tooltipData.arrowWidth}
                name="arrowwidth" onChange={handleInputChange} />
           
          </div>

          <div className="Tooltip-arrow-height Tooltip-label">
           <label>
                Arrow Height:
                </label>
              <input type="text" className='Tooltip-input text-size'
                 placeholder={tooltipData.arrowHeight}
                name="arrowheight" onChange={handleInputChange} />  
          </div>
        </div>
        </div>
        </div>


      <div className='Mobile-view-container'>
        <div className='Mobiile-view-wrapper'>
          <div className='Btn-wrapper'>
            <Button id="btn1" tooltipData={tooltipData}>Button 1</Button>
            <Button id="btn2" tooltipData={tooltipData}>Button 2</Button>
          </div>

          <div className='Btn-wrapper'>
          <Button id="btn3" tooltipData={tooltipData}>Button 3</Button>
            {/* <Tooltip text="Btn1" position="top" /> */}
          </div>

          <div className='Btn-wrapper'>
            <Button id="btn4" tooltipData={tooltipData}>Button 4</Button>
            <Button id="btn5" tooltipData={tooltipData}>Button 5</Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
