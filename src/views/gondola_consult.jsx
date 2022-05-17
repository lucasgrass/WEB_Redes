import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import gondola from "../mock-gondola.json";
import api from "../api/axios";

const Gondola_Consult = () => {
	const [products, setProducts] = useState(gondola);

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
								<tr key={product.prod_id}>
									<td className="table-name">{product.prod_name}</td>
									<td className="table-quantity-1">{product.prod_qnt}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Gondola_Consult;
