
const ListaLivros = ({
  livros = [],
  removerLivro,
  editandoId,
  iniciarEdicao,
  cancelarEdicao,
  salvarEdicao,
  editTitulo,
  setEditTitulo,
  editDescricao,
  setEditDescricao,
  editCapa,
  setEditCapa,
}) => {
  return (
    <ul className="list-group">
      {livros.map((livro) => (
        <li key={livro.id} className="list-group-item">
          {editandoId === livro.id ? (
            <div className="d-flex flex-column gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Título"
                value={editTitulo}
                onChange={(e) => setEditTitulo(e.target.value)}
              />
              <textarea
                rows={3}
                className="form-control"
                placeholder="Descrição"
                value={editDescricao}
                onChange={(e) => setEditDescricao(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="URL da Capa"
                value={editCapa}
                onChange={(e) => setEditCapa(e.target.value)}
              />
              <div className="mt-2 d-flex gap-2">
                <button
                  className="btn btn-sm btn-success"
                  onClick={() => salvarEdicao(livro.id)}
                >
                  Salvar
                </button>
                <button className="btn btn-sm btn-secondary" onClick={cancelarEdicao}>
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex gap-3 align-items-center">
                <img
                  src={livro.capa}
                  alt={livro.titulo}
                  style={{ width: "70px", height: "90px", objectFit: "cover" }}
                />
                <div>
                  <h5 className="mb-1">{livro.titulo}</h5>
                  <p className="mb-0">{livro.descricao || "Sem descrição"}</p>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => iniciarEdicao(livro.id)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removerLivro(livro.id)}
                >
                   <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListaLivros;

