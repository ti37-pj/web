type Produto = {
    id: number;
    nome: string;
    descricao: string;
    id_categoria: number;
    imagem_url: string;
};

type Variacao = {
    id: number;
    descricao: string;
    id_produto?: number;
}

export default Produto;
export type {Variacao,};
