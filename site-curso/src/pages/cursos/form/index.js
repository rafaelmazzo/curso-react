import React from 'react'
export default class CursoForm extends React.Component {
    render() {
        return (
            <div>
                <h4>Incluir Curso</h4>
                <form>
                    <div class="form-group">
                        <label for="codigoCurso">Código do curso</label>
                        <input
                            type="number"
                            class="form-control"
                            id="codigoCurso"                            
                            placeholder="Código do curso" />
                    </div>
                    <div class="form-group">
                        <label for="descricaoCurso">Descrição do curso</label>
                        <input
                            type="text"
                            class="form-control"
                            id="descricaoCurso"
                            placeholder="Descrição do curso" />
                    </div>
                    <div class="form-group">
                        <label for="cargaHorariaCurso">Carga horária</label>
                        <input
                            type="text"
                            class="form-control"
                            id="cargaHorariaCurso"
                            placeholder="Carga horária do curso" />
                    </div>
                    <div class="form-group">
                        <label for="valorCurso">Valor</label>
                        <input
                            type="text"
                            class="form-control"
                            id="valorCurso"
                            placeholder="Valor do curso" />
                    </div>
                    <div class="form-group">
                        <label for="categoriaCurso">Example select</label>
                        <select class="form-control" id="categoriaCurso">
                            <option value=''>Selecione</option>
                            <option value='1'>Informática</option>
                            <option value='2'>Engenharia</option>
                            <option value='3'>Administração</option>
                            <option value='4'>Redes</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}