import { useGetProductsQuery } from '../../../redux/api/product';
import scss from './Welcome.module.scss';

const Welcome = () => {
	const { data, isLoading } = useGetProductsQuery();

	return (
		<>
			<section className={scss.Welcome}>
				<div className="container">
					<div className={scss.content}>
						<h1>Welcome Developer!</h1>
						<div>
							{isLoading ? (
								<h1>Loading...</h1>
							) : (
								<>
									{data?.results.map((item) => (
										<div key={item.id} className={scss.product}>
											<h2>{item.title}</h2>
											<p>Цена: {item.price}</p>
											<p>Количество: {item.quantity}</p>
											<img
												className={scss.product_img}
												src={item.photo}
												alt={item.title}
											/>
											<p>{item.createdAt}</p>
											<div className={scss.vendor}>
												<h3>{item.vendor.name}</h3>
												<p>{item.vendor.login}</p>
												<img
													className={scss.vendor_img}
													src={item.vendor.photo}
													alt={item.vendor.name}
												/>
											</div>
										</div>
									))}
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Welcome;
