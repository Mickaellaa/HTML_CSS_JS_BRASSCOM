	import { Component } from 'react';  
	import PropTypes from 'prop-types';  
	  
	export class Header extends Component {  
	    render() {  
	        return (  
	            <div>  
	                <h1>Olá, {this.props.nome}, seja bem-vindo!</h1>  
	            </div>  
	        );  
	    }  
	}  
	  
	Header.defaultProps = {  
	    nome: 'Nome padrão',  
	};  
	  
	Header.propTypes = {  
	    nome: PropTypes.string,  
	};  
	  
