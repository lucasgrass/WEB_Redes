import { Link } from "react-router-dom";

function Gondola_Entry() {
	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">ENTRADA GONDOLA</p>
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
					Mover para a Gondula
				</button>
			</div>
			<div>
				<span className="container-title-list">
					<p>Nome</p>
					<p>Em estoque</p>
					<p>Quantidade</p>
				</span>
			</div>
			<div className="container-list-products">
				<span className="container-products">
					<p>lalas</p>
					<p>teste</p>
					<p>aaaaa</p>
					<p>fudeu</p>
				</span>
			</div>
		</div>
	);
}

export default Gondola_Entry;
