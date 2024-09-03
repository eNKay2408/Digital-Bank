import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
	<section id="product" className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img
				src={bill}
				alt="billing"
				className="w-[100%] h-[100%] relative z-[5]"
			/>
			<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
			<div className="absolute z-[1] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
		</div>

		<div className={`${layout.sectionInfo} md:ml-10`}>
			<h2 className={styles.heading2}>
				Dễ dàng kiểm soát
				<br className="sm:block hidden" /> thanh toán và hóa đơn
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Chỉ cần vài bước đơn giản, bạn có thể theo dõi và xử lý mọi giao dịch
				nhanh chóng, tiết kiệm thời gian và công sức, giúp công việc tài chính
				trở nên suôn sẻ.
			</p>

			<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
				<img
					src={apple}
					alt="apple_store"
					className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
				/>
				<img
					src={google}
					alt="google_play"
					className="w-[128px] h-[42px] object-contain cursor-pointer"
				/>
			</div>
		</div>
	</section>
);

export default Billing;
