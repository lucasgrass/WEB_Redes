import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import stock from "../mock-stock.json";
import { fetchApi } from "../api/axios";

var flag = false;

const Gondola_Entry = () => {
	const [products, setProducts] = useState(stock);
	const [addProductStock, setAddProductStock] = useState();

	const teste = async () => {
		try {
			const response = await fetchApi.get('/int_stock');
			return response
		} catch (error) {

		}
	}

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

		if (addProductStock == undefined) {
			alert(
				"Algum produto deve ter sua quantidade modificada para mover para a Gondula."
			);
		} else {
			Object.keys(addProductStock).map((code) => {
				let aux_verify = products.find((x) => x.id == code);

				if (addProductStock[code] > aux_verify.quantity) {
					alert(
						aux_verify.name + " com quantidade insuficientes! Tente novamente."
					);
					flag = true;
					window.location.href = "http://localhost:3000/home";
				}
			});

			if (!flag) {
				// Feito pelo VITOR CONTI CEO do JavaScript e dono da MBlabs
				const json = Object.keys(addProductStock).map((code) => ({
					prod_id: parseInt(code),
					prod_qnt: parseInt(addProductStock[code]),
				}));
				// Feito pelo DIAS E VITOR CONTI CEO do JavaScript e dono da MBlabs
				var dict = {};
				dict["items"] = json;
				const json_format = JSON.stringify(dict, null, 4);
				console.log(json_format);
				alert("OS PRODUTOS FORAM ENVIADOS COM SUCESSO!");
				window.location.href = "http://localhost:3000/home";
			}
		}
	};

	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">ENTRADA GONDOLA</p>
				<span>
					<div className="container-button-return-menu">
						<Link to="/home">
							<button className="button-return-menu" type="submit">
								Voltar ao Menu
							</button>
						</Link>
					</div>
				</span>
			</div>
			<div className="button-move">
				<button className="button-gondola" type="submit" onClick={addQuantity}>
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
