"use client";

import { useState, useEffect } from "react";
import {
	motion,
	useScroll,
	useTransform,
	AnimatePresence,
} from "framer-motion";
import {
	Menu,
	X,
	Mail,
	Phone,
	MapPin,
	Calendar,
	Users,
	Award,
	Star,
	ChevronLeft,
	ChevronRight,
	Image as ImageIcon,
	ArrowUp,
	MessageCircle,
} from "lucide-react";

export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [selectedGalleryCategory, setSelectedGalleryCategory] = useState("all");
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const [showScrollTop, setShowScrollTop] = useState(false);

	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 20;
			const showButton = window.scrollY > 400;
			setIsScrolled(scrolled);
			setShowScrollTop(showButton);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const galleryCategories = [
		{ id: "all", name: "Tất cả" },
		{ id: "corporate", name: "Sự kiện doanh nghiệp" },
		{ id: "wedding", name: "Đám cưới" },
		{ id: "gala", name: "Tiệc gala" },
		{ id: "conference", name: "Hội thảo" },
	];

	const galleryImages = [
		{
			id: 1,
			src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "corporate",
			title: "Hội thảo công nghệ 2024",
			description: "MC cho sự kiện công nghệ với 500+ khách mời",
		},
		{
			id: 2,
			src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "wedding",
			title: "Đám cưới sang trọng",
			description: "Dẫn chương trình tiệc cưới tại resort 5 sao",
		},
		{
			id: 3,
			src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "gala",
			title: "Gala từ thiện",
			description: "Đêm gala gây quỹ cho trẻ em khuyết tật",
		},
		{
			id: 4,
			src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "conference",
			title: "Hội nghị quốc tế",
			description: "MC song ngữ cho hội nghị kinh tế ASEAN",
		},
		{
			id: 5,
			src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "corporate",
			title: "Lễ kỷ niệm thành lập công ty",
			description: "Chương trình kỷ niệm 20 năm thành lập",
		},
		{
			id: 6,
			src: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "wedding",
			title: "Lễ cưới truyền thống",
			description: "MC cho lễ cưới theo phong tục Việt Nam",
		},
		{
			id: 7,
			src: "https://images.pexels.com/photos/2608513/pexels-photo-2608513.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "gala",
			title: "Đêm nhạc từ thiện",
			description: "Dẫn chương trình đêm nhạc gây quỹ",
		},
		{
			id: 8,
			src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
			category: "conference",
			title: "Hội thảo y khoa",
			description: "MC cho hội thảo chuyên ngành y tế",
		},
	];

	const filteredImages =
		selectedGalleryCategory === "all"
			? galleryImages
			: galleryImages.filter((img) => img.category === selectedGalleryCategory);

	const fadeInUp = {
		initial: { opacity: 0, y: 60 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6, ease: "easeOut" },
	};

	const staggerContainer = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const scaleIn = {
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1 },
		transition: { duration: 0.5, ease: "easeOut" },
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className={`fixed w-full z-50 transition-all duration-300 ${
					isScrolled ? "bg-white shadow-sm" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						<motion.div
							whileHover={{ scale: 1.05 }}
							className="font-playfair text-2xl font-bold text-slate-900"
						>
							Hồ Tuấn Anh
						</motion.div>

						{/* Desktop Menu */}
						<div className="hidden md:flex space-x-12">
							{[
								"Giới thiệu",
								"Dịch vụ",
								"Thư viện ảnh",
								"Kinh nghiệm",
								"Liên hệ",
							].map((item, index) => (
								<motion.a
									key={item}
									href={`#${
										item === "Giới thiệu"
											? "about"
											: item === "Dịch vụ"
											? "services"
											: item === "Thư viện ảnh"
											? "gallery"
											: item === "Kinh nghiệm"
											? "experience"
											: "contact"
									}`}
									className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
									whileHover={{ y: -2 }}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 + 0.3 }}
								>
									{item}
								</motion.a>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden p-2 text-slate-700 hover:text-slate-900"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Menu */}
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								className="md:hidden bg-white border-t border-slate-100"
							>
								<div className="px-2 pt-2 pb-3 space-y-1">
									{[
										"Giới thiệu",
										"Dịch vụ",
										"Thư viện ảnh",
										"Kinh nghiệm",
										"Liên hệ",
									].map((item, index) => (
										<motion.a
											key={item}
											href={`#${
												item === "Giới thiệu"
													? "about"
													: item === "Dịch vụ"
													? "services"
													: item === "Thư viện ảnh"
													? "gallery"
													: item === "Kinh nghiệm"
													? "experience"
													: "contact"
											}`}
											className="block px-3 py-2 text-slate-700 hover:text-slate-900"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
										>
											{item}
										</motion.a>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.nav>

			{/* Hero Section */}
			<section className="pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
						<motion.div
							className="order-2 lg:order-1"
							initial={{ opacity: 0, x: -60 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<motion.h1
								className="font-playfair text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
							>
								MC
								<br />
								<span className="text-gray-600">Chuyên Nghiệp</span>
								<br />
								Hàng Đầu
							</motion.h1>
							<motion.p
								className="text-xl text-gray-600 mb-12 leading-relaxed"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
							>
								Mang đến sự thanh lịch, năng lượng và chuyên môn cho những sự
								kiện quan trọng nhất của bạn. Với hơn một thập kỷ kinh nghiệm,
								tôi chuyên tạo ra những khoảnh khắc đáng nhớ để lại ấn tượng sâu
								sắc với khán giả.
							</motion.p>
							<motion.div
								className="flex flex-col sm:flex-row gap-6"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
							>
								<motion.a
									href="#contact"
									className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Đặt lịch tư vấn
								</motion.a>
								<motion.a
									href="#services"
									className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Xem dịch vụ
								</motion.a>
							</motion.div>
						</motion.div>
						<motion.div
							className="order-1 lg:order-2"
							initial={{ opacity: 0, x: 60 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							<motion.div
								className="relative"
								style={{ y }}
							>
								<motion.img
									src="/images/self/self-1.jpg"
									alt="Hồ Tuấn Anh - MC Chuyên Nghiệp"
									className="w-full h-[600px] lg:h-[700px] object-cover object-center"
									initial={{ scale: 1.1 }}
									animate={{ scale: 1 }}
									transition={{ duration: 1.2, ease: "easeOut" }}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="py-24 bg-gray-50"
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
						<motion.div
							initial={{ opacity: 0, x: -60 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<motion.h2
								className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 mb-8"
								{...fadeInUp}
							>
								Về MC Tuấn Anh
							</motion.h2>
							<motion.div
								className="space-y-6 text-gray-700 leading-relaxed"
								variants={staggerContainer}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
							>
								{[
									"Với hơn 10 năm kinh nghiệm trong lĩnh vực dẫn chương trình và diễn thuyết trước công chúng, tôi mang đến sự chuyên nghiệp, ấm áp và chân thực cho mọi dịp. Nền tảng truyền thông và nghệ thuật sân khấu cung cấp nền móng hoàn hảo để thu hút các khán giả đa dạng.",
									"Tôi tin rằng mỗi sự kiện đều kể một câu chuyện, và với vai trò MC, tôi ở đây để giúp bạn kể câu chuyện của mình một cách tuyệt vời. Dù là hội nghị doanh nghiệp, lễ cưới hay tiệc gala, tôi làm việc chặt chẽ với bạn để đảm bảo mọi khoảnh khắc diễn ra suôn sẻ.",
									"Phương pháp của tôi là hợp tác và chú trọng chi tiết. Tôi dành thời gian để hiểu tầm nhìn, khán giả và mục tiêu của bạn, sau đó tạo ra trải nghiệm vượt mong đợi trong khi vẫn trung thành với phong cách độc đáo của bạn.",
								].map((text, index) => (
									<motion.p
										key={index}
										className="text-lg"
										variants={fadeInUp}
									>
										{text}
									</motion.p>
								))}
							</motion.div>
						</motion.div>
						<motion.div
							className="space-y-8"
							initial={{ opacity: 0, x: 60 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<motion.div
								className="grid grid-cols-2 gap-8"
								variants={staggerContainer}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
							>
								{[
									{ number: "10+", label: "Năm kinh nghiệm" },
									{ number: "500+", label: "Sự kiện đã dẫn" },
									{ number: "50+", label: "Khách hàng doanh nghiệp" },
									{ number: "98%", label: "Khách hàng hài lòng" },
								].map((stat, index) => (
									<motion.div
										key={index}
										className="text-center"
										variants={scaleIn}
										whileHover={{ scale: 1.05 }}
									>
										<div className="text-4xl font-bold text-slate-900 mb-2">
											{stat.number}
										</div>
										<div className="text-gray-600">{stat.label}</div>
									</motion.div>
								))}
							</motion.div>
							<motion.div
								className="pt-8"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
							>
								<h3 className="font-playfair text-2xl font-bold text-slate-900 mb-6">
									Chuyên môn & Chứng chỉ
								</h3>
								<motion.div
									className="space-y-4"
									variants={staggerContainer}
									initial="initial"
									whileInView="animate"
									viewport={{ once: true }}
								>
									{[
										"Chứng chỉ Diễn giả Chuyên nghiệp (CSP)",
										"Thạc sĩ Truyền thông",
										"Chứng chỉ Nghệ thuật Sân khấu",
										"Chuyên gia Quản lý Sự kiện",
									].map((cert, index) => (
										<motion.div
											key={index}
											className="flex items-center gap-3"
											variants={fadeInUp}
											whileHover={{ x: 10 }}
										>
											<Award
												className="text-gray-600"
												size={20}
											/>
											<span className="text-gray-700">{cert}</span>
										</motion.div>
									))}
								</motion.div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				id="services"
				className="py-24"
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
							Dịch vụ
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Dịch vụ dẫn chương trình chuyên nghiệp được thiết kế riêng cho nhu
							cầu và mục tiêu độc đáo của sự kiện bạn.
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={staggerContainer}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
					>
						{[
							{
								icon: Users,
								title: "Sự kiện Doanh nghiệp",
								description:
									"Dẫn chương trình chuyên nghiệp cho hội nghị, hội thảo, ra mắt sản phẩm và tiệc gala doanh nghiệp. Đảm bảo thông điệp kinh doanh của bạn được truyền tải rõ ràng và có tác động.",
								features: [
									"Điều phối hội nghị",
									"Lễ trao giải",
									"Ra mắt sản phẩm",
									"Tiệc gala doanh nghiệp",
								],
							},
							{
								icon: Calendar,
								title: "Đám cưới",
								description:
									"Tạo ra những khoảnh khắc kỳ diệu trong ngày đặc biệt của bạn với việc dẫn chương trình ấm áp, chuyên nghiệp tôn vinh câu chuyện tình yêu độc đáo của bạn với sự thanh lịch và niềm vui.",
								features: [
									"Điều phối lễ cưới",
									"Dẫn tiệc cưới",
									"Quản lý thời gian",
									"Thu hút khách mời",
								],
							},
							{
								icon: Star,
								title: "Sự kiện Đặc biệt",
								description:
									"Dẫn chương trình đáng nhớ cho các lễ kỷ niệm, tiệc gala từ thiện và tiệc riêng. Mang đến sự tinh tế và năng lượng cho những khoảnh khắc quan trọng nhất của bạn.",
								features: [
									"Lễ kỷ niệm",
									"Tiệc gala từ thiện",
									"Tiệc riêng",
									"Sự kiện văn hóa",
								],
							},
						].map((service, index) => (
							<motion.div
								key={index}
								className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
								variants={fadeInUp}
								whileHover={{ y: -10, transition: { duration: 0.3 } }}
							>
								<motion.div
									className="flex items-center gap-4 mb-6"
									whileHover={{ scale: 1.05 }}
								>
									<service.icon
										className="text-slate-600"
										size={32}
									/>
									<h3 className="font-playfair text-2xl font-bold text-slate-900">
										{service.title}
									</h3>
								</motion.div>
								<p className="text-gray-700 mb-6 leading-relaxed">
									{service.description}
								</p>
								<ul className="space-y-2 text-gray-600">
									{service.features.map((feature, featureIndex) => (
										<motion.li
											key={featureIndex}
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ delay: featureIndex * 0.1 }}
											viewport={{ once: true }}
										>
											• {feature}
										</motion.li>
									))}
								</ul>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Gallery Section */}
			<section
				id="gallery"
				className="py-24 bg-gray-50"
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
							Thư viện ảnh
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Khám phá những khoảnh khắc đáng nhớ từ các sự kiện tôi đã dẫn
							chương trình.
						</p>
					</motion.div>

					{/* Gallery Filter */}
					<motion.div
						className="flex flex-wrap justify-center gap-4 mb-12"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						{galleryCategories.map((category, index) => (
							<motion.button
								key={category.id}
								onClick={() => setSelectedGalleryCategory(category.id)}
								className={`px-6 py-3 font-medium transition-colors ${
									selectedGalleryCategory === category.id
										? "bg-slate-900 text-white"
										: "bg-white text-slate-700 hover:bg-slate-100"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								{category.name}
							</motion.button>
						))}
					</motion.div>

					{/* Gallery Grid */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
						layout
					>
						<AnimatePresence>
							{filteredImages.map((image, index) => (
								<motion.div
									key={image.id}
									layout
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="group cursor-pointer bg-white shadow-sm hover:shadow-md transition-all duration-300"
									onClick={() => setSelectedImage(image.src)}
									whileHover={{ y: -5 }}
								>
									<div className="relative overflow-hidden">
										<motion.img
											src={image.src}
											alt={image.title}
											className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
											whileHover={{ scale: 1.1 }}
										/>
										<motion.div
											className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center"
											whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
										>
											<ImageIcon
												className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
												size={32}
											/>
										</motion.div>
									</div>
									<motion.div
										className="p-4"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										<h3 className="font-medium text-slate-900 mb-2">
											{image.title}
										</h3>
										<p className="text-gray-600 text-sm">{image.description}</p>
									</motion.div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>
				</div>
			</section>

			{/* Image Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							className="relative max-w-4xl max-h-full"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
							>
								<X size={32} />
							</button>
							<img
								src={selectedImage}
								alt="Gallery image"
								className="max-w-full max-h-full object-contain"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Experience Section */}
			<section
				id="experience"
				className="py-24"
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
							Kinh nghiệm
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Một số sự kiện nổi bật và khách hàng mà tôi đã có vinh dự được hợp
							tác.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -60 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h3 className="font-playfair text-3xl font-bold text-slate-900 mb-8">
								Sự kiện nổi bật
							</h3>
							<motion.div
								className="space-y-8"
								variants={staggerContainer}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
							>
								{[
									{
										title: "Hội nghị Công nghệ Toàn cầu 2024",
										subtitle: "MC chính cho hội nghị quốc tế 3 ngày",
										description:
											"Dẫn chương trình các phiên thảo luận, diễn thuyết chính và sự kiện giao lưu cho hơn 2.000 người tham dự từ 40+ quốc gia, tạo điều kiện giao tiếp suôn sẻ giữa các khán giả đa dạng.",
									},
									{
										title: "Gala từ thiện cho Bệnh viện Nhi",
										subtitle: "Sự kiện gây quỹ thường niên",
										description:
											"Dẫn chương trình buổi tối gây quỹ được hơn 60 tỷ đồng cho chăm sóc nhi khoa, cân bằng giữa giải trí và thông điệp ý nghĩa về mục đích từ thiện.",
									},
									{
										title: "Lễ trao giải Công ty Fortune 500",
										subtitle: "Lễ vinh danh thường niên",
										description:
											"Dẫn chương trình lễ kỷ niệm 25 năm đổi mới của công ty, thu hút 1.500+ nhân viên và các bên liên quan trong một buổi tối đáng nhớ.",
									},
								].map((event, index) => (
									<motion.div
										key={index}
										className="border-l-4 border-gray-300 pl-6"
										variants={fadeInUp}
										whileHover={{ x: 10, transition: { duration: 0.3 } }}
									>
										<h4 className="font-bold text-slate-900 mb-2">
											{event.title}
										</h4>
										<p className="text-gray-600 mb-2">{event.subtitle}</p>
										<p className="text-gray-700">{event.description}</p>
									</motion.div>
								))}
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 60 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<h3 className="font-playfair text-3xl font-bold text-slate-900 mb-8">
								Nhận xét từ khách hàng
							</h3>
							<motion.div
								className="space-y-8"
								variants={staggerContainer}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
							>
								{[
									{
										text: "Sự chuyên nghiệp và sự ấm áp của MC Tuấn Anh đã làm cho hội nghị của chúng tôi trở nên khó quên. Cô ấy xử lý mọi chuyển đổi một cách hoàn hảo và duy trì năng lượng cao suốt chương trình.",
										author:
											"— Trần Thị Hương, Giám đốc Sự kiện, TechCorp Việt Nam",
									},
									{
										text: "Đám cưới của chúng tôi hoàn hảo nhờ sự điều phối chuyên nghiệp và sự quan tâm chân thành của MC Tuấn Anh. Cô ấy khiến chúng tôi cảm thấy rất thoải mái và khách mời đều yêu thích cô ấy.",
										author: "— Nguyễn Văn Minh & Lê Thị Mai",
									},
									{
										text: "MC Tuấn Anh đã mang đến đúng tông điệu cho gala từ thiện của chúng tôi - tinh tế nhưng đầy cảm xúc. Dòng chảy buổi tối diễn ra suôn sẻ và có tác động mạnh mẽ.",
										author: "— Phạm Đức Thành, Giám đốc Quỹ",
									},
								].map((testimonial, index) => (
									<motion.div
										key={index}
										className="bg-white p-6 shadow-sm"
										variants={scaleIn}
										whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
									>
										<div className="flex items-center gap-1 mb-4">
											{[...Array(5)].map((_, i) => (
												<motion.div
													key={i}
													initial={{ opacity: 0, scale: 0 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ delay: i * 0.1 }}
												>
													<Star
														className="text-yellow-400 fill-current"
														size={16}
													/>
												</motion.div>
											))}
										</div>
										<p className="text-gray-700 mb-4 italic">
											{testimonial.text}
										</p>
										<div className="font-medium text-slate-900">
											{testimonial.author}
										</div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-24 bg-gray-50"
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="font-playfair text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
							Hãy cùng tạo nên
							<br />
							<span className="text-gray-600">Điều đặc biệt</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Sẵn sàng thảo luận về sự kiện của bạn? Tôi rất mong được nghe về
							tầm nhìn của bạn và cách tôi có thể giúp biến nó thành hiện thực
							khó quên.
						</p>
					</motion.div>

					<motion.div
						className="max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className="font-playfair text-3xl font-bold text-slate-900 mb-8 text-center">
							Thông tin liên hệ
						</h3>
						<motion.div
							className="space-y-6"
							variants={staggerContainer}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{[
								{
									icon: Phone,
									label: "Điện thoại",
									value: "+84 901 234 567",
									href: "tel:+84901234567",
								},
								{
									icon: Mail,
									label: "Email",
									value: "minhanh@mcchuyennghiep.com",
									href: "mailto:minhanh@mcchuyennghiep.com",
								},
								{
									icon: MapPin,
									label: "Địa điểm",
									value: "TP. Hồ Chí Minh, Việt Nam",
									href: null,
								},
							].map((contact, index) => (
								<motion.div
									key={index}
									className="flex items-center gap-4 justify-center"
									variants={fadeInUp}
									whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
								>
									<div className="bg-gray-100 p-3">
										<contact.icon
											className="text-slate-600"
											size={24}
										/>
									</div>
									<div className="text-center">
										<div className="font-medium text-slate-900">
											{contact.label}
										</div>
										{contact.href ? (
											<a
												href={contact.href}
												className="text-gray-600 hover:text-slate-900 transition-colors"
											>
												{contact.value}
											</a>
										) : (
											<div className="text-gray-600">{contact.value}</div>
										)}
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* Contact Buttons */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
						>
							<motion.a
								href="tel:+84901234567"
								className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Phone size={20} />
								Gọi ngay
							</motion.a>
							<motion.a
								href="mailto:minhanh@mcchuyennghiep.com"
								className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Mail size={20} />
								Gửi email
							</motion.a>
							<motion.a
								href="https://zalo.me/0901234567"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<MessageCircle size={20} />
								Chat Zalo
							</motion.a>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<motion.footer
				className="bg-slate-900 text-white py-12"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center">
						<motion.div
							className="font-playfair text-3xl font-bold mb-4"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							Hồ Tuấn Anh
						</motion.div>
						<motion.p
							className="text-gray-400 mb-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true }}
						>
							MC Chuyên Nghiệp
						</motion.p>
						<motion.div
							className="flex justify-center gap-8 text-gray-400"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
						>
							{["LinkedIn", "Instagram", "Facebook"].map((social, index) => (
								<motion.a
									key={social}
									href="#"
									className="hover:text-white transition-colors"
									whileHover={{ scale: 1.1 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 + 0.3 }}
								>
									{social}
								</motion.a>
							))}
						</motion.div>
						<motion.div
							className="mt-8 pt-8 border-t border-gray-800 text-gray-400"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
						>
							<p>&copy; 2024 Hồ Tuấn Anh. Tất cả quyền được bảo lưu.</p>
						</motion.div>
					</div>
				</div>
			</motion.footer>

			{/* Scroll to Top Button */}
			<AnimatePresence>
				{showScrollTop && (
					<motion.button
						onClick={scrollToTop}
						className="fixed bottom-8 right-8 bg-slate-900 text-white p-3 shadow-lg hover:bg-slate-800 transition-colors z-40 border border-white"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<ArrowUp size={24} />
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
}
