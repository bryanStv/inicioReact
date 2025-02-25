import {Component} from "react";
import emoji from '../emoji.svg';

export default class Componente extends Component {
    render(){
        return(
            <>
                <p>Componente 1</p>
                <img className="ImagenEmoji" src={emoji} alt="emoji" />
            </>
        )
    }
}