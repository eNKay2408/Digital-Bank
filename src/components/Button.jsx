const Button = ({ styles }) => {
	return (
		<button
			type="button"
			className={`py-3 px-6 bg-blue-gradient font-roboto font-semibold text-[20px] text-primary outline-none ${styles} rounded-[10px]`}
		>
			Bắt Đầu
		</button>
	);
};

export default Button;
