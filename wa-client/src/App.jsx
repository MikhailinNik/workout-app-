import { useState } from 'react'
import './assets/styles/index.scss'
import Layout from './components/layout/Layout'

function App() {
	const [count, setCount] = useState(0)

	return (
		<Layout>
			<div className='App'></div>
		</Layout>
	)
}

export default App
