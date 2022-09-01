import styles from './styles.module.css'

const Menu = () => {
	return (
		<nav className={styles.menu}>
            <a href="#inicio">Início</a> 
            <a href="#cardapio">Cardápio</a> 
            <a href="#contato">Contato e Localização</a>
	    </nav>
	)
}

export default Menu