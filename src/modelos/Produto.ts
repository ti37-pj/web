enum Categoria {
    Bebidas = 'BEBIDAS',
    Comidas = 'COMIDAS',
    Petiscos = 'PETISCOS',
    Sobremesas = 'SOBREMESAS',
};

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    categoria: Categoria;
};

export default Produto;
export {
    Categoria,
};