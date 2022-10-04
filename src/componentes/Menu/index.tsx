import { useState } from 'react';
import styles from './styles.module.css'

const Menu = () => {
	const [hash, setHash] = useState('');

	// Chamado sempre que o endereço hash do navegador mudar
	window.addEventListener('hashchange', function() {
		setHash(window.location.hash);
	})

	return (
		<nav className={styles.menu}>
			<a href="#inicio" className={hash === '#inicio' || hash === '' ? styles.active : ''}>Início</a> 
			<a href="#cardapio" className={hash === '#cardapio' ? styles.active : ''}>Cardápio</a> 
			<a href="#contato" className={hash === '#contato' ? styles.active : ''}>Contato e Localização</a>
			<a href='#baixaaplicativo' className={hash === '#baixaaplicativo' ? styles.active : ''}>Baixar app </a>
		</nav>
	)
}

export default Menu