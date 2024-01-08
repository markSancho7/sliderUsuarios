import { useState } from 'react';
import User from './components/User/User';
import { USERS } from './constants/users';

const App = () => {
	const [counter, setCounter] = useState(0);
	return (
		<>
			<User {...USERS[counter]} />
			<button
				disabled={counter <= 0}
				onClick={() => clickPrev(counter, setCounter)}
			>
				clickPrev
			</button>
			<button
				disabled={counter === USERS.length - 1}
				onClick={() => clickNext(counter, setCounter)}
			>
				clickNext
			</button>
		</>
	);
};
const clickPrev = (counter, setCounter) => {
	setCounter(counter - 1);
};
const clickNext = (counter, setCounter) => {
	setCounter(counter + 1);
};
export default App;
