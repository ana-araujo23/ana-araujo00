import Produto from '../models/produtos.js'

export const getProdutos = async (_, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os produtos.' });
    }
};

export const addProduto = async (req, res) => {
    try {
        const info = req.body;
        console.log(info)
        const novoProduto = await Produto.create(info);
        res.status(201).json(novoProduto);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao adicionar o produto.' });
    }
};


export const updateProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            nomeProduto,
            precoProduto,
            descricaoProduto,
            categoriaProduto,
            subcategoriaProduto,
            tamanhoProduto
        } = req.body;

        const produto = await Produto.findOne({ where: { id } });

        if (!produto) {
            return res.status(404).json({ message: "Nenhum produto encontrado" });
        }

        await Produto.update(
            {
                nomeProduto,
                precoProduto,
                descricaoProduto,
                categoriaProduto,
                subcategoriaProduto,
                tamanhoProduto
            },
            { where: { id } }
        );

        res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao atualizar o produto.' });
    }
};

export const deleteProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findOne({ where: { id } });

        if (!produto) {
            return res.status(404).json({ message: "Nenhum produto encontrado" });
        }

        await Produto.destroy({ where: { id } });

        res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocorreu um erro ao excluir o produto.' });
    }
};
