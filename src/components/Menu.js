import React from 'react';
import { connect } from 'react-redux';
import './styles/Menu.css';
import { toggleMenu } from '../actions';




const Menu = (props) => {

  const { menuActive } = props;
  const menuItems = document.querySelectorAll('.Sidebar--item')
  const button = document.querySelector('.Sidebar--button')



  const handleMenu = () => {
    props.toggleMenu()
  }
  

  if(menuItems && button){
    if(menuActive){
      console.log("Active");
      menuItems.forEach(elements =>{
        elements.style.transform = 'translateY(-100vh)'
      })
      button.innerHTML = '☰';
    }
    else{
      console.log("Not Active");
      button.innerHTML = 'X';
      /* display.style.width = '3rem'; */
    }
  }
  

  return(
    <div className="Sidebar">
      
      <button onClick={handleMenu} className="Sidebar--button">X</button>
      <a className="Sidebar--item" href="">Home</a>
      <a className="Sidebar--item" href="">Featured</a>
      <a className="Sidebar--item" href="">Details</a>
      <a className="Sidebar--item" href="">About Project</a>
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