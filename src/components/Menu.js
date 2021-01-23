import React from 'react';
import { connect } from 'react-redux';
import './styles/Menu.css';
import { toggleMenu } from '../actions';
import {Link} from 'react-router-dom';



const Menu = (props) => {

  const { menuActive } = props;
  const menuItems = document.querySelectorAll('.Sidebar--item')
  const button = document.querySelector('.Sidebar--button')
  const menu = document.querySelector('.Sidebar')


  const handleMenu = () => {
    props.toggleMenu()
  }
  

  if(menuItems && button){
    if(!menuActive){
     
      menuItems.forEach(elements =>{
        elements.style.transform = 'translateX(-100vw)'
      })
      menu.style.height = '1rem';
      menu.style.width = '10rem';
      button.innerHTML = '☰';
    }
    else{
     
      button.innerHTML = 'X';
      menuItems.forEach(elements =>{
        elements.style.transform = 'translateX(0)'
      })
      menu.style.height = '100vh';
      menu.style.width = '25vw';
      /* display.style.width = '3rem'; */
    }
  }
  

  return(
    <div className="Sidebar">
      
      <button onClick={handleMenu} className="Sidebar--button">X</button>
      <Link className="Sidebar--item" to="/">Home</Link>
      <Link className="Sidebar--item" to="/">Featured</Link>
      <Link className="Sidebar--item" to="/">Details</Link>
      <Link className="Sidebar--item" to="/">About Project</Link>
    </div>
  );

}

const mapStateToProps = (state, props) => (
  {
    menuActive: state.menuActive
  });

const mapDispatchToProps = {
  toggleMenu,
}



export default connect(
  mapStateToProps, mapDispatchToProps
)(Menu);