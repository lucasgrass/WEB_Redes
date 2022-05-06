import { Link } from "react-router-dom";

function Gondola_Exit() {
	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">SAÍDA GONDOLA</p>
				<span>
					<Link to="/home">
						<button className="button-return-menu" type="button">
							Voltar ao Menu
						</button>
					</Link>
				</span>
			</div>
			<div className="button-move">
				<button className="button-gondola" type="button">
					Retirar da Gondola
				</button>
			</div>
			<div>
				<span className="container-title-list">
					<p>Nome</p>
					<p>Disponível em Gondola</p>
					<p>Quantidade</p>
				</span>
			</div>
		</div>
	);
}

export default Gondola_Exit;
