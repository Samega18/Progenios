import React, { useState } from 'react';
import './HomeDropStyle.css';
import { Link } from 'react-router-dom';

class DropdownP extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <a className="dropdown" style = {{background:"#242424",width:"90px",}}>
         <a className="button" href="/projetos" >Projetos</a>
         <div className="button2" onClick={this.showDropdownMenu}></div>

          { this.state.displayMenu ? (
          <ul>
         <li><a href="/projetos/progenios" ><a>Progenios</a></a></li>
          </ul>
        ):
        (
          null
        )
        }

       </a>

    );
  }
}

export default DropdownP;