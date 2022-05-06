import { Link } from "react-router-dom";

function Gondola_Consult() {
	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">CONSULTAR GONDOLA</p>
				<span>
					<Link to="/home">
						<button className="button-return-menu" type="button">
							Voltar ao Menu
						</button>
					</Link>
				</span>
			</div>
			<div>
				<span className="container-title-list">
					<p>Nome</p>
					<p>Em estoque</p>
				</span>
			</div>
		</div>
	);
}

export default Gondola_Consult;
