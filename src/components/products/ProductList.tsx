/** @format */

import ProductItem from './ProductItem';
import { Products } from '../../types/Product';

const products: Products = {
	data: [
		{
			nama: 'Kaos Itam',
			warna: 'Black',
			imageURL:
				'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg',
			harga: 40,
		},
		{
			nama: 'Kaos Putih',
			warna: 'White',
			imageURL:
				'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg',
			harga: 42,
		},
		{
			nama: 'Kaos Abu',
			warna: 'Grey',
			imageURL:
				'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg',
			harga: 49,
		},
		{
			nama: 'Kaos Dot',
			warna: 'White',
			imageURL:
				'https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-04.jpg',
			harga: 38,
		},
	]
};

const ProductList = () => {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
					{products.data.map((product, index) => {
						return (
							<ProductItem
								key={index}
								nama={product.nama}
								warna={product.warna}
								imageURL={product.imageURL}
								harga={product.harga}
							/>
						);
					})}
					{/* <ProductItem
						nama='Kaos Itam'
						warna='black'
						imageURL='https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg'
						harga={35}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default ProductList;
