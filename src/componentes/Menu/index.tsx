import styles from './styles.module.css'

const Menu = () => {
	return (
		<div >
			<nav className={styles.menu}>
				<a href="#inicio">Início</a> 
				<a href="#cardapio">Cardápio</a> 
				<a href="#contato">Contato e Localização</a>
				<a href='#baixaaplicativo'>Baixar app </a>
	    	</nav>
		</div>

	)
}

export default Menu