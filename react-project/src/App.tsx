import { useEffect, useReducer } from "react";
import './App.css'
import logo from './images/logo.png';

let language = "TypeScript";
let moon = "🌙";

function Header({name, year}: {name: string, year: number}) {
	return (
		<header>
			<h1>{name}'s Kitchen</h1>
			<h4>Trademarked and Copyrighted as of {year}</h4>
		</header>
	)
}

const dishes = [
	"Pizza Rolls",
	"Guy's Burgers",
	"Fazoli's Pizza",
]

const dishObjects = dishes.map((dish, id) => ({
	name: dish,
	id: id
}));

function Main({ dishes, openStatus, onStatus }: { dishes: { name: string, id: number }[], openStatus: boolean, onStatus: (status: boolean) => void }) {
	return (
		<>
			<h2>My Dishes ({" "}{openStatus ? "hot and ready!" : "still frozen"}):</h2>
			<ul>
				{dishes.map((dish) => (
					<li key={dish.id} style={{ listStyleType: "none" }}>{dish.name}</li>
				))}
			</ul>
			<button onClick={() => onStatus(true)}>Force Open!</button>
		</>
	);
}

function App() {
	// const [status, setStatus] = useState(true);
	// console.log(status);
	const [status, toggle] = useReducer((status) => !status, true);
	useEffect(() => {
		console.log(`The kitchen is ${status ? "open" : "closed"}.`);
	}, [status]);
	return (
		<>
			<h1>Nathan's Kitchen is currently {status ? "open" : "closed"}</h1>
			<img src={logo} alt="Nathan Parker's Logo" />
			<Header name="Nathan" year={new Date().getFullYear()} />
			<Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
			<button onClick={toggle}>{status ? "Close" : "Open"} Kitchen</button>
		</>
	)
}

export default App
