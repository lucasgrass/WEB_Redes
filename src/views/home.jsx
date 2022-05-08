import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="flex-container">
			<div className="container-father">
				<div className="container-button">
					<Link to="/gondola_entry">
						<button className="button" type="submit">
							Entrada na Gondula
						</button>
					</Link>
				</div>
				<div className="container-button">
					<Link to="/gondola_exit">
						<button className="button" type="button">
							Saida da Gondula
						</button>
					</Link>
				</div>
				<div className="container-button">
					<Link to="/gondola_consult">
						<button className="button">Consultar Gondula</button>
					</Link>
				</div>
				<div className="container-exit">
					<Link to="">
						<button className="button-exit">Sair</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
