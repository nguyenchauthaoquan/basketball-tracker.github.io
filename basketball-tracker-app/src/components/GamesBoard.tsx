import {GameBoardProps} from "../common/interfaces/props";
import React from "react";

const GamesBoard = ({games, open} : GameBoardProps) => {
    console.log(games);
    
   return (
       <>
           {
               open && (
                   <h1>Games board</h1>
               )
           }
       </>
   )
}

export default GamesBoard;