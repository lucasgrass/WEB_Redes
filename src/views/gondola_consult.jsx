import { Link } from "react-router-dom";
import React, { useState } from "react";
import gondola from "../mock-gondola.json";

const Gondola_Consult = () => {
	const [products, setProduct] = useState(gondola);

	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">CONSULTAR GONDOLA</p>
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
			<div>
				<span className="container-title-list">
					<p>Nome</p>
					<p>Em Estoque</p>
				</span>
			</div>
			<div className="container-father-list-products">
				<div className="margins">
					<table className="table-father">
						<tbody>
							{products.map((product) => (
								<>
									<tr key={product.id}>
										<td className="table-name">{product.name}</td>
										<td className="table-quantity-1">{product.quantity}</td>
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

export default Gondola_Consult;
