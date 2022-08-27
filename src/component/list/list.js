import { useContext } from "react";
import { SettingsContext } from "../../context/settings";
import { Button, Card, Elevation } from "@blueprintjs/core";

export default function List(props){
    const settings = useContext(SettingsContext);
  if(settings.displaySettings){
    return(
        <Card elevation={Elevation.TWO} key={props.item.id} className='list-card'>
        <p>{props.item.text}</p>
        <p><small>Assigned to: {props.item.assignee}</small></p>
        <p><small>Difficulty: {props.item.difficulty}</small></p>
        <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
        <br></br>

        <Button id="upd" onClick={() => props.deleteItem(props.item.id)}>Delete </Button>
        {/* <hr /> */}
        <br></br>
                <Button id="upd" >update</Button>
      </Card>
    )
    }else{
        if(!props.item.complete) {
            return(<>
                <Card key={props.item.id}  className='list-card'>
                <p>{props.item.text}</p>
                <p><small>Assigned to: {props.item.assignee}</small></p>
                <p><small>Difficulty: {props.item.difficulty}</small></p>
                <div onClick={() => props.toggleComplete(props.item.id)}>Complete:<span className="false"> {props.item.complete.toString()}</span> </div>
                <br></br>
                <Button onClick={() => props.deleteItem(props.item.id)}>Delete </Button>

                {/* <hr /> */}
              </Card></>
            )
        }
    }

} 