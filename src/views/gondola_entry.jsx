import { Link } from "react-router-dom";
import React, { useState } from "react";
import stock from "../mock-stock.json";

const Gondola_Entry = () => {
	const [products, setProducts] = useState(stock);
	const [addProductStock, setAddProductStock] = useState();

	const getQuantity = (event) => {
		event.preventDefault();

		const id = event.target.getAttribute("id");
		const quantity = event.target.value;

		const remove = { ...addProductStock };
		remove[id] = quantity;

		setAddProductStock(remove);
	};

	const addQuantity = (event) => {
		event.preventDefault();

		// Feito pelo VITOR CONTI CEO do JavaScript e dono da MBlabs
		const json = Object.keys(addProductStock).map((code) => ({
			prod_id: parseInt(code),
			prod_qnt: parseInt(addProductStock[code]),
		}));
		// Feito pelo VITOR CONTI CEO do JavaScript e dono da MBlabs
		console.log(json);
		console.log(JSON.stringify(json, null, 4));
	};

	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">ENTRADA GONDOLA</p>
				<span>
					<Link to="/home">
						<div className="container-button-return-menu">
							<button className="button-return-menu" type="submit">
								Voltar ao Menu
							</button>
						</div>
					</Link>
				</span>
			</div>
			<div className="button-move">
				<button className="button-gondola" onClick={addQuantity}>
					Mover para a Gondula
				</button>
			</div>
			<div>
				<span className="container-title-list">
					<p>Nome</p>
					<p>Em Estoque</p>
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

export default Gondola_Entry;
