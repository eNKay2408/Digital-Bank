import styles from "../style";
import { discount, robot } from "../assets";

import GetStarted from "./GetStarted";

const Hero = () => (
	<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
		>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img src={discount} alt="discount" className="w-[32px] h-[32px]" />
				<p className={`${styles.paragraph} ml-2`}>
					<span className="text-white">20% </span>
					Giảm giá
					<span className="text-white"> cho </span>
					tài khoản
					<span className="text-white"> 1 tháng</span>
				</p>
			</div>

			<div className="flex flex-row justify-between items-center w-full">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[60px]">
					Phương Thức Thanh Toán
					<br className="sm:block hidden" />
					<span className="text-gradient ss:text-[70px] text-[60px] tracking-wider">
						{" "}
						Thế Hệ Mới
					</span>
				</h1>

				<div className="ss:flex hidden md:mr-4 mr-0">
					<GetStarted />
				</div>
			</div>

			<p className={`${styles.paragraph} max-w-[500px] mt-5`}>
				Đội ngũ chuyên gia của chúng tôi sử dụng một phương pháp để xác định
				những thẻ có khả năng phù hợp nhất với nhu cầu của bạn. Chúng tôi xem
				xét lãi suất phần trăm hàng năm và các khoản phí hàng năm.
			</p>
		</div>

		<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
			<img
				src={robot}
				alt="billing"
				className="w-[100%] h-[100%] relative z-[5]"
			/>
			<div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
			<div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
			<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
		</div>

		<div className={`ss:hidden ${styles.flexCenter}`}>
			<GetStarted />
		</div>
	</section>
);

export default Hero;
