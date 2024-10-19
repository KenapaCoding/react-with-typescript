import './App.css';
import Navbar from './components/layout/Navbar';
import ProductList from './components/products/ProductList';
import Header from './components/layout/Header';

function App() {
	return (
		<>
			<div className='min-h-full'>
				<Navbar />
				<Header>
					<h1 className='text-3xl font-bold tracking-tight text-gray-900'>
						Product List
					</h1>
				</Header>
				<main>
					<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						<ProductList />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
