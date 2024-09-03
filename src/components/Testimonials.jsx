import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
	<section
		id="clients"
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
	>
		<div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

		<div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
			<h1 className={`${styles.heading2}`}>
				Những gì mọi người
				<br className="sm:block hidden" /> đang nói về chúng tôi
			</h1>
			<div className="w-full md:mt-0 mt-6 flex justify-center">
				<p className={`${styles.paragraph} text-left max-w-[500px]`}>
					Dưới đây là những chia sẻ từ các nhà sáng lập về quan điểm tài chính
					và cách họ sử dụng tiền bạc như một công cụ hỗ trợ trong hành trình
					thành công của mình.
				</p>
			</div>
		</div>

		<div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1]">
			{feedback.map((card) => (
				<FeedbackCard key={card.id} {...card} />
			))}
		</div>
	</section>
);

export default Testimonials;
