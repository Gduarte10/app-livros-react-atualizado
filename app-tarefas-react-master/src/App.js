import { useState, useEffect } from "react";
import FormularioLivros from "./components/FormularioLivros";
import ListaLivros from "./components/ListaLivros";
import supabase from "./api/supabase";

const App = () => {
  const [livros, setLivros] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [editTitulo, setEditTitulo] = useState('');
  const [editDescricao, setEditDescricao] = useState('');
  const [editCapa, setEditCapa] = useState('');

  // Buscar livros do Supabase
  const buscarLivros = async () => {
    const { data, error } = await supabase.from("livros").select("*");
    if (error) {
      console.error("Erro ao buscar livros:", error.message);
      return;
    }
    setLivros(data || []);
  };

  useEffect(() => {
    buscarLivros();
  }, []);

  // Adicionar livro
  const adicionarLivro = async (livro) => {
    const { error } = await supabase.from("livros").insert([livro]);
    if (error) {
      console.error("Erro ao adicionar livro:", error.message);
      return;
    }
    // Atualiza a lista
    buscarLivros();
  };

  // Remover livro
  const removerLivro = async (id) => {
    const { error } = await supabase.from("livros").delete().eq('id', id);
    if (error) {
      console.error("Erro ao remover livro:", error.message);
      return;
    }
    buscarLivros();
  };

  // Iniciar edição
  const iniciarEdicao = (id) => {
    setEditandoId(id);
    const livro = livros.find((l) => l.id === id);
    if (livro) {
      setEditTitulo(livro.titulo);
      setEditDescricao(livro.descricao);
      setEditCapa(livro.capa);
    }
  };

  // Cancelar edição
  const cancelarEdicao = () => {
    setEditandoId(null);
    setEditTitulo('');
    setEditDescricao('');
    setEditCapa('');
  };

  // Salvar edição
  const salvarEdicao = async (id) => {
    const atualizacao = {
      titulo: editTitulo,
      descricao: editDescricao,
      capa: editCapa,
    };

    const { error } = await supabase.from("livros").update(atualizacao).eq('id', id);
    if (error) {
      console.error("Erro ao editar livro:", error.message);
      return;
    }

    cancelarEdicao();
    buscarLivros();
  };

  return (
    <div className="container mt-4">
      <h1>Lista de livros</h1>
      <FormularioLivros adicionarLivro={adicionarLivro} />
      <ListaLivros
        livros={livros}
        removerLivro={removerLivro}
        editandoId={editandoId}
        iniciarEdicao={iniciarEdicao}
        cancelarEdicao={cancelarEdicao}
        salvarEdicao={salvarEdicao}
        editTitulo={editTitulo}
        setEditTitulo={setEditTitulo}
        editDescricao={editDescricao}
        setEditDescricao={setEditDescricao}
        editCapa={editCapa}
        setEditCapa={setEditCapa}
      />
    </div>
  );
};

export default App;
