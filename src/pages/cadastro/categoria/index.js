import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index';

export default function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias,setCategorias] = useState(['Teste']);
  const [values,setValues] = useState(valoresIniciais);

    function setValue(chave, valor){

      // chave: nome, descrição
        setValues({
          ...values,
          [chave]: valor // nome: 'valor
        })
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const name = event.target.getAttribute('name') || ''; 
      const value = event.target.value;
  
      setValues({
        ...values,
        [name]: value,
      })
    }
    return(
      <PageDefault>
           <h1>Cadastro de Categoria: {values.nome}</h1>

              <form onSubmit={
                function handleSubmit(e){
                  e.preventDefault();
                  setCategorias([
                    ...categorias,
                    values
                  ]);

                  setValues(valoresIniciais);
                }
              }>

               <FormField 
                  labelText="Nome da categoria: "
                  type="text"
                  name="nome"
                  value={values.nome}
                  onChange={handleChange}
               />

              <FormField 
                  labelText="Descrição: "
                  type="text"
                  name="descricao"
                  value={values.descricao}
                  onChange={handleChange}
               />

              <FormField 
                  labelText="Cor: "
                  type="color"
                  name="cor"
                  value={values.cor}
                  onChange={handleChange}
               />

                    {/* Descricao
                 <div>
                    <label>
                      Descrição:
                          <textarea
                            type="text"
                            value={values.descricao}
                            onChange={function funcaoHandlerQueOErroPediu(e) {
                              setValue('descricao',e.target.value);
                            }}
                          />
                    </label>
                  </div> */}


                    {/* COR
                    <div>
                        <label>
                        Descrição:
                            <input
                              type="color"
                              value={values.cor}
                              onChange={function funcaoHandlerQueOErroPediu(e) {
                                setValue('cor',e.target.value);
                              }}
                            />
                      </label>
                    </div> */}



                <button>
                  Cadastrar
                </button>
              </form>
                      
                <ul>
                  {categorias.map((categorias,index) => {
                    return(
                      <li key={categorias}>
                        {categorias.nome}
                      </li>
                    )
                  })}
                </ul>

          <Link to="/">
               Home
          </Link>
      </PageDefault>
    )
}