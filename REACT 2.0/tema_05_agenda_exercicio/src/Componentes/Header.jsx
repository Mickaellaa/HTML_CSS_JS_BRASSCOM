	import PropTypes from 'prop-types';  
	import Button from './button';    
	  
	const Header = ({ title }) => {  
	    const onClick = () => {  
	        // alert('Clicou');  
let elemento = document.createElement('p')
elemento.innerHTML = ' teste '
    let container = document.querySelector('.container');
    container.appendChild(elemento)
	    };  

	    return (  
	        <header className="header">  
	            <h1>Agenda de {title}</h1>  
	            <Button bgColor="green" text="Add" onClick={onClick} />  
	        </header>  
	    );  
	};  
	  
	  Header.defaultProps = {  
	    title: 'IOS',  
	};  
	  
	Header.propTypes = {  
	    title: PropTypes.string.isRequired,  
	};  
	  
	export default Header;  
