import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import gondola from "../mock-gondola.json";
import api from "../api/axios";

var flag = false;

const Gondola_Exit = () => {
	const [products, setProducts] = useState(gondola);
	const [addProductStock, setAddProductStock] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/shelf");
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
				"Algum produto deve ter sua quantidade modificada para mover sair da Gondola."
			);
		} else {
			Object.keys(addProductStock).map((code) => {
				let aux_verify = products.find((x) => x.prod_id == code);

				if (addProductStock[code] > aux_verify.shelve_qnt) {
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
					prod_qnt: parseInt(addProductStock[code]),
				}));
				var dict = {};
				dict["items"] = json;
				console.log(JSON.stringify(dict))
				
				try {
					const response = await api.post('/remove_shelf', dict)
				} catch (error) {
					console.log(`Error: ${error.message}`)
				}

				alert("OS PRODUTOS FORAM RETIRADOS COM SUCESSO!");
				window.location.href = "http://localhost:3000/home";
			}
		}
	};

	return (
		<div className="flex-container">
			<div className="container-header">
				<p className="title-a">CAIXA</p>
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
					<p>Dispon??vel em Gondola</p>
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
									<td className="table-quantity">{product.shelve_qnt}</td>
									<td className="table-input">
										<input
											id={product.prod_id}
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
