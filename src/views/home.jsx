function Home() {
	return (
		<div className="flex-container">
			<div className="container-img">{/* <img src={"/montanha.png"}/> */}</div>
			<div className="container-button">
				{/* <form action="https://www.google.com/">
					<button className="button" type="submit">
						Entrada na Gondula
					</button>
				</form> */}
				<button className="button" type="submit">
					Entrada na Gondula
				</button>
			</div>
			<div className="container-button">
				<button className="button" type="button">
					Saida da Gondula
				</button>
			</div>
			<div className="container-button">
				<button className="button">Consultar Gondula</button>
			</div>
			<div className="container-exit">
				<button className="button-exit">Sair</button>
			</div>
		</div>
	);
}

export default Home;
