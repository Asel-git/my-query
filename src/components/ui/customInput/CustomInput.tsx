import { FC, InputHTMLAttributes, ChangeEvent } from 'react';

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	label?: string;
	width: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	errorMessage?: string;
}

const Input: FC<InputProps> = ({ label, width, onChange, ...rest }) => {
	return (
		<div>
			{label && <label>{label}</label>}
			<input onChange={onChange} style={{ width, height: '30px' }} {...rest} />
		</div>
	);
};

export default Input;
