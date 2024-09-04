import styles from "../style";
import { arrowUp } from "../assets/";

const GetStarted = () => (
	<div
		className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
	>
		<div
			className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
		>
			<p className="font-roboto font-medium text-[22px] leading-[30px] mt-3">
				<span className="text-gradient">Bắt Đầu</span>
			</p>
			<img
				src={arrowUp}
				alt="arrow"
				className="w-[30px] h-[30px] object-contain"
			/>
		</div>
	</div>
);

export default GetStarted;
