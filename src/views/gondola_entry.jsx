function Gondola_Entry() {
    return (
      <div className="flex-container">
          <div className="container-header">
                <p id="title-a">PRODUTOS</p>
                <span>
                    <button id="button-return-menu" type="button">Voltar ao Menu</button>
                </span>
          </div>
          <div className="button-move">
            <button id="button-move-stock" type="button">Mover para a Gondula</button>
          </div>
          <div>
              <span className="container-title-list">
                <input type="checkbox" disabled/>
                <p>Nome</p>
                <p>Em estoque</p>
                <p>Mover</p>
              </span>
          </div>
      </div>
    )
  }
  
  export default Gondola_Entry
  