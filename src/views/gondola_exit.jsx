import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import gondola from "../mock-gondola.json";

const Gondola_Exit = () => {
	const [products, setProduct] = useState(gondola);

	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">SAÍDA GONDOLA</p>
				<span>
					<Link to="/home">
						<div className="container-button-return-menu">
							<button className="button-return-menu" type="button">
								Voltar ao Menu
							</button>
						</div>
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
			<div className="container-father-list-products">
				<div className="margins">
					<table className="table-father">
						<tbody>
							{products.map((product) => (
								<>
									<tr key={product.toString()}>
										<td className="table-name">{product.name}</td>
										<td className="table-quantity">{product.quantity}</td>
										<td className="table-input">
											<input
												className="input-number"
												type="number"
												maxLength={3}
												min="0"
											/>
										</td>
									</tr>
								</>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Gondola_Exit;
