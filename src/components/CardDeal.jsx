import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
	<section className={layout.section}>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Tìm kiếm thẻ tín dụng tốt
				<br className="sm:block hidden" /> chỉ với vài bước đơn giản
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Tìm thẻ tín dụng phù hợp cho bạn thật dễ dàng với vài bước đơn giản.
				Khám phá các lựa chọn tốt nhất và tối ưu hóa lợi ích tài chính của bạn.
			</p>
			<Button styles="mt-10" />
		</div>

		<div className={layout.sectionImg}>
			<img src={card} alt="card" className="w-[100%] h-[100%]" />
		</div>
	</section>
);

export default CardDeal;
