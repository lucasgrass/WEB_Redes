import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import stock from "../mock-stock.json";
// import { fetchApi } from "../api/axios";
import api from "../api/axios";

var flag = false;

const Gondola_Entry = () => {
	const [products, setProducts] = useState(stock);
	const [addProductStock, setAddProductStock] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/int_stock");
				setProducts(response.data.Products);
			} catch (error) {
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			}
		};

		fetchData();
	}, []);

	const getQuantity = (event) => {
		event.preventDefault();

		const id = event.target.getAttribute("id");
		const quantity = event.target.value;

		const remove = { ...addProductStock };
		remove[id] = quantity;

		setAddProductStock(remove);
	};

	const addQuantity = async (event) => {
		event.preventDefault();

		if (addProductStock == undefined) {
			alert(
				"Algum produto deve ter sua quantidade modificada para mover para a Gondula."
			);
		} else {
			Object.keys(addProductStock).map((code) => {
				let aux_verify = products.find((x) => x.prod_id == code);

				if (addProductStock[code] > aux_verify.stock_qnt) {
					alert(
						aux_verify.prod_name +
							" com quantidade insuficientes! Tente novamente."
					);
					flag = true;
					window.location.href = "http://localhost:3000/home";
				}
			});

			if (!flag) {
				const json = Object.keys(addProductStock).map((code) => ({
					prod_id: parseInt(code),
					prod_qnt: parseInt(addProductStock[code])
				}));
				var dict = {};
				dict["items"] = json;

				try {
					const response = await api.post('/insert_shelf', dict)
					console.log(response)
				} catch (error) {
					console.log(`Error: ${error.message}`)
				}
			
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
								<tr key={product.prod_id}>
									<td className="table-name">{product.prod_name}</td>
									<td className="table-quantity">{product.stock_qnt}</td>
									<td className="table-input">
										<input
											id={product.prod_id}
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
