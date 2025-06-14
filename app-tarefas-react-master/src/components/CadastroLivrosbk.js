import { useState } from "react";

const FormularioLivros = ({ adicionarLivro }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [capa, setCapa] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo.trim()) return;
        adicionarLivro({
            titulo: titulo.trim(),
            descricao: descricao.trim(),
            capa: capa.trim()
        });
        setTitulo('');
        setDescricao('');
        setCapa('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Título do livro"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Descrição do livro"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="URL da capa do livro"
                    value={capa}
                    onChange={(e) => setCapa(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Adicionar Livro</button>
        </form>
    );
};

export default FormularioLivros;