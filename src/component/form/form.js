import useForm from '../../hooks/form.js';
import {SettingsContext} from '../../context/settings.js';
import {useContext} from 'react';
import { Switch } from "@blueprintjs/core";

export default function Form(props){
    const { handleChange, handleSubmit } = useForm(props.addItem);
    const setting = useContext(SettingsContext);
    const handleClick = () => {
        setting.setDisplaySettings(!setting.displaySettings);
        console.log(setting.displaySettings);
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <span>  :   </span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>
        <br></br>
        <br></br>

        <label>
          <span>Assigned To</span>
          <span>  :   </span>

          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>
        <br></br>
        <br></br>

        <label>
          <span>Difficulty</span>
          <span>  :   </span>

          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>
        <br></br>
        <br></br>

        <label>
          <button type="submit" className="btn">Add Item</button>
          
        </label>
      </form>
      <br></br>

        <button onClick={props.handleSort} className='sortB'>Sort by Difficulty</button>
        <Switch checked={setting.displaySettings} onClick={handleClick}>Display completed Items</Switch>
        </div>
    )
}
