import { Link } from "react-router-dom";
import React, { useState } from "react";
import stock from "../mock-stock.json";

const Gondola_Entry = () => {
	const [products, setProducts] = useState(stock);
	const [addProductStock, setAddProductStock] = useState({
		id: "",
		name: "",
		quantity: "",
	});

	const getQuantity = (event) => {
		event.preventDefault();

		const id = event.target.getAttribute("id");
		const quantity = event.target.value;

		console.log(addProductStock);

		const remove = { ...addProductStock };
		remove[id] = quantity;

		console.log(remove);

		setAddProductStock(remove);
	};

	const addQuantity = (event) => {
		event.prevent.Default();

		const newQuantity = {
			id: setAddProductStock.id,
			name: setAddProductStock.name,
			quantity: products[id].quantity - setAddProductStock.quantity,
		};

		const newStock = products.find((product) => product.id == newQuantity.id);

		newStock.quantity = newQuantity.quantity;

		const aux = newStock.id;

		setProducts[aux] = newStock;
	};
	//window.location.reload();
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
				<button className="button-gondola" type="submit" onSubmit={addQuantity}>
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
								<>
									<tr key={product.toString()}>
										<td className="table-name">{product.name}</td>
										<td className="table-quantity">{product.quantity}</td>
										<td className="table-input">
											<input
												className="input-number"
												name="quantity"
												type="number"
												maxLength={3}
												min="0"
												onChange={getQuantity}
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

export default Gondola_Entry;
