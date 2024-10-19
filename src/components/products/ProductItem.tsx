import { ProductProps } from "../../types/Product";

const ProductItem = ({nama,warna='Black',harga,imageURL}:ProductProps) => {
	return (
		<div className='group relative'>
			<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
				<img
					src={imageURL}
					alt='Front of men&#039;s Basic Tee in black.'
					className='h-full w-full object-cover object-center lg:h-full lg:w-full'
				/>
			</div>
			<div className='mt-4 flex justify-between'>
				<div>
					<h3 className='text-sm text-gray-700'>
						<a href='#'>
							<span
								aria-hidden='true'
								className='absolute inset-0'></span>
							{nama}
						</a>
					</h3>
					<p className='mt-1 text-sm text-gray-500'>{warna}</p>
				</div>
				<p className='text-sm font-medium text-gray-900'>${harga}</p>
			</div>
		</div>
	);
};

export default ProductItem;
