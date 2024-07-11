import { ICounter } from './Counter.interface';

const Counter = ({ count, className }: ICounter) => {
	return <div>{count}</div>;
};

export default Counter;
