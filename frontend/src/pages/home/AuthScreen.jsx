import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const AuthScreen = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

	return (
		<div className='hero-bg relative'>
			{/* Navbar */}
			<header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
				<img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 md:w-52' />
				<Link to={"/login"} className='flex items-center'>
            <img 
                src='/user.png' 
                alt='Profile Icon' 
                className='w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white cursor-pointer'
            />
        </Link>
			</header>

			{/* hero section */}
			<div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
			

				<form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
					
					
				</form>
			</div>

			{/* separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 1st section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Trải nghiệm trên TV</h2>
						<p className='text-lg md:text-xl'>
						Tận hưởng kho Phim, Show, Thể thao, Truyền hình cực đỉnh
						</p>
					</div>
					{/* right side */}
					<div className='flex-1 relative'>
						<img src='/phim.png' alt='Tv image' className='mt-4 z-20 relative' />
						
					</div>
				</div>
			</div>

			{/* separator */}
			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 2nd section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 relative'>
						<div className='relative'>
							<img src='/stranger-things-lg.png' alt='Stranger Things img' className='mt-4' />

							<div
								className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black
              w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2
              '
							>
								<img src='/phim1.png' alt='image' className='h-full' />
								<div className=' flex justify-between items-center w-full'>
									<div className='flex flex-col gap-0'>
										<span className='text-md lg:text-lg font-bold'>Quang Vinh</span>
										<span className='text-sm text-blue-500'>Tải xuống...</span>
									</div>

									<img src='/download-icon.gif' alt='' className='h-12' />
								</div>
							</div>
						</div>
					</div>
					{/* right side */}

					<div className='flex-1 md:text-left text-center'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
						Tải chương trình của bạn xuống để xem ngoại tuyến
											</h2>
						<p className='text-lg md:text-xl'>
						Lưu chương trình yêu thích của bạn một cách dễ dàng và luôn có thứ gì đó để xem.	
						</p>
					</div>
				</div>
			</div>

			{/* separator */}

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 3rd section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Xem ở mọi nơi</h2>
						<p className='text-lg md:text-xl'>
						Truyền phát phim và chương trình truyền hình không giới hạn trên điện thoại, máy tính bảng, máy tính xách tay và TV của bạn.
						</p>
					</div>

					{/* right side */}
					<div className='flex-1 relative overflow-hidden'>
						<img src='/device-pile.png' alt='Device image' className='mt-4 z-20 relative' />
						<video
							className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10
               max-w-[63%] 
              '
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source src='/video-devices.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 4th section*/}
			<div className='py-10 bg-black text-white'>
				<div
					className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row
           px-4 md:px-2
        '
				>
					{/* left */}
					<div className='flex-1 relative'>
						<img src='/kids.png' alt='Enjoy on your TV' className='mt-4' />
					</div>
					{/* right */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Đăng ký là thành viên vip</h2>
						<p className='text-lg md:text-xl'>
							Trải nghiệm thêm nhiều bộ phim nói không với quảng cáo.
						</p>
					</div>
					
				</div>
				
			</div>
			<footer className="bg-black text-white py-10">
    <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            {/* About Section */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Giới thiệu VieON</h3>
                <p className="text-lg">
                    VieON là nền tảng giải trí hàng đầu Việt Nam, cung cấp hàng nghìn nội dung chất lượng cao bao gồm phim,
                    show truyền hình, thể thao và nhiều hơn nữa.
                </p>
            </div>
            {/* Quick Links Section */}
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Liên kết nhanh</h3>
                <ul className="space-y-2">
                    <li>
                        <Link to="/about" className="text-lg hover:underline">
                            Về chúng tôi
                        </Link>
                    </li>
                    <li>
                        <Link to="/privacy-policy" className="text-lg hover:underline">
                            Chính sách bảo mật
                        </Link>
                    </li>
                    <li>
                        <Link to="/terms" className="text-lg hover:underline">
                            Điều khoản sử dụng
                        </Link>
                    </li>
                    <li>
                        <Link to="/support" className="text-lg hover:underline">
                            Hỗ trợ khách hàng
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

        {/* Separator */}
        <div className="h-1 w-full bg-gray-700 my-8" aria-hidden="true" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} VieON. Bản quyền thuộc về Công ty Cổ phần VieON.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-start">
                <Link to="https://facebook.com/vieon" target="_blank">
                    <img src="/face.png" alt="Facebook" className="w-6 h-6" />
                </Link>
                <Link to="https://instagram.com/vieon" target="_blank">
                    <img src="/ins.png" alt="Instagram" className="w-6 h-6" />
                </Link>
                <Link to="https://youtube.com/vieon" target="_blank">
                    <img src="/you.png" alt="YouTube" className="w-6 h-6" />
                </Link>
            </div>
        </div>
    </div>
</footer>

		</div>
		
	);
	
};



export default AuthScreen;

	  