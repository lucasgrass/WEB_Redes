import { Link } from "react-router-dom";
import React, { useState } from "react";
import gondola from "../mock-gondola.json";

const Gondola_Exit = () => {
	const [products, setProducts] = useState(gondola);
	const [addProductGondola, setAddProductGondola] = useState();

	const getQuantity = (event) => {
		event.preventDefault();

		const id = event.target.getAttribute("id");
		const quantity = event.target.value;

		const remove = { ...addProductGondola };
		remove[id] = quantity;

		setAddProductGondola(remove);
	};

	const addQuantity = (event) => {
		event.preventDefault();

		// Feito pelo VITOR CONTI CEO do JavaScript e dono da MBlabs
		const teste = Object.keys(addProductGondola).map((code) => ({
			prod_id: code,
			prod_qnt: addProductGondola[code],
		}));
		// Feito pelo VITOR CONTI CEO do JavaScript e dono da MBlabs

		console.log(JSON.stringify(teste, null, 4));
	};

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
				<button className="button-gondola" onClick={addQuantity}>
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
								<tr key={product.id}>
									<td className="table-name">{product.name}</td>
									<td className="table-quantity">{product.quantity}</td>
									<td className="table-input">
										<input
											id={product.id}
											className="input-number"
											name="quantity"
											type="number"
											maxLength={3}
											min="0"
											placeholder="0"
											onChange={getQuantity}
										/>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Gondola_Exit;
