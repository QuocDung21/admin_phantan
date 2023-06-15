
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `blog` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `idcateblog` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT 'Admin',
  `images` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `blog` (`id`, `title`, `description`, `idcateblog`, `author`, `images`) VALUES
('647814908d0bb968f92c5da4', 'Dân công sở trải lòng về lần đầu săn GWP Lixibox: Trích 1/7 tháng lương để có được hộp quà 3 triệu liệu có đáng?', 'Ấn tượng ban đầu của mình hơi hụt hẫng xíu vì “ngoại hình” của hộp quà tặng kèm lần này không đẹp, không ấn tượng như các đợt trước...', '64781019796e0fa619ca3f99', 'Admin', '[{\"public_id\": \"123213\", \"url\": \"https://upload.lixibox.com/system/blogs/covers/000/001/753/original/1685523296.webp\"}]'),
('647814e48d0bb968f92c5da6', 'Vì sao bạn nhất định không được bỏ lỡ cơ hội săn quà GWP 3 triệu có 1-0-2 này của Luxubu?', 'Khi nhắc đến GWP, người ta không thể không nhắc đến Lixibox. Bởi tại nền tảng mua sắm này, GWP là chương trình hấp dẫn thường niên...', '64781019796e0fa619ca3f99', 'Admin', '[{\"public_id\": \"123213\", \"url\": \"https://upload.lixibox.com/system/blogs/covers/000/001/739/original/1684838387.webp\"}]'),
('647816378d0bb968f92c5da8', 'Mỹ phẩm không hợp da thì làm gì để không lãng phí? Bạn sẽ tiết kiệm chục triệu mỗi năm nếu áp dụng cách này!', 'Bạn hẳn đã có vài lần gặp trường hợp mỹ phẩm mua về dùng không phù hợp với da - có thể vì kích ứng hoặc có thể vì...', '64781032796e0fa619ca3f9b', 'Admin', '[{\"public_id\": \"123213\", \"url\": \"https://upload.lixibox.com/system/blogs/covers/000/001/733/original/1684394138.webp\"}]'),
('647816f8deaaa09712e4c201', 'Song Tử thích được tặng quà sinh nhật gì? Muốn biết câu trả lời thì xem ngay 6 gợi ý đang được lòng cả nam và nữ!', 'Bạn có người yêu hay người thân, bạn bè thuộc cung Song Tử không nè? Nếu có thì đừng bỏ qua bài viết này nha...', '647810a4796e0fa619ca3f9f', 'Admin', '[{\"public_id\": \"123213\", \"url\": \"https://upload.lixibox.com/system/blogs/covers/000/001/736/original/1684294762.webp\"}]');

CREATE TABLE `brands` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `brands` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
('644f3cfee0cd356a8638f55d', 'NIVEA', '2023-05-01 04:15:58', '2023-05-01 04:15:58'),
('644f3d27e0cd356a8638f564', 'VICHY', '2023-05-01 04:16:39', '2023-05-01 04:16:39'),
('644f3d32e0cd356a8638f568', 'Bioré', '2023-05-01 04:16:50', '2023-05-01 04:16:50'),
('644f3d3ce0cd356a8638f56c', 'ANESSA', '2023-05-01 04:17:00', '2023-05-01 04:17:00');

CREATE TABLE `cateblog` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `cateblog` (`id`, `name`) VALUES
('64781019796e0fa619ca3f99', 'Tin nổi bật'),
('64781032796e0fa619ca3f9b', 'Hướng dẫn'),
('64781097796e0fa619ca3f9d', 'Quảng cáo'),
('647810a4796e0fa619ca3f9f', 'Khuyến mãi');


CREATE TABLE `categories` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `categories` (`id`, `title`, `createdAt`, `updatedAt`) VALUES
('644f3bd7e366ff065b6a1be1', 'Sữa Rửa Mặt', '2023-05-01 04:11:03', '2023-05-01 04:11:03'),
('644f3be1e366ff065b6a1be5', 'Tẩy Tế Bào Chết Da Mặt', '2023-05-01 04:11:13', '2023-05-01 04:11:13'),
('644f3beae366ff065b6a1be9', 'Mặt Nạ', '2023-05-01 04:11:22', '2023-05-01 04:11:22'),
('644f3bf6e366ff065b6a1bed', 'Xịt Khoáng', '2023-05-01 04:11:34', '2023-05-01 04:11:34'),
('644f3c01e366ff065b6a1bf1', 'Kem Dưỡng / Dầu Dưỡng', '2023-05-01 04:11:45', '2023-05-01 04:11:45'),
('64521d5301826ab4b609437c', 'Tẩy tế bào', '2023-05-03 08:37:39', '2023-05-03 08:37:48'),
('646095d8d0189f261fc461ca', 'clothing', '2023-05-14 08:03:36', '2023-05-14 08:03:36');


CREATE TABLE `contacts` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `message` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `contacts` (`id`, `name`, `email`, `phone`, `message`) VALUES
(1, 'John Doe', 'johndoe@example.com', '1234567890', 'Hello, I have a question.'),
(2, 'Jane Smith', 'janesmith@example.com', '9876543210', 'Hi, I would like to inquire about your products.'),
(3, 'Michael Johnson', 'michaeljohnson@example.com', '5555555555', 'Greetings, I need assistance with an order.'),
(4, 'Emily Davis', 'emilydavis@example.com', '1111111111', 'Good dayIm interested in your services.'),
(5, 'Robert Wilson', 'robertwilson@example.com', '9999999999', 'Hi there, I have a feedback for your website.'),
(6, 'Sarah Brown', 'sarahbrown@example.com', '4444444444', 'Hello, I would like to schedule a meeting.'),
(7, 'David Thompson', 'davidthompson@example.com', '7777777777', 'Good morning, I need help with a technical issue.'),
(8, 'Olivia Harris', 'oliviaharris@example.com', '2222222222', 'Hi, Im having trouble accessing my account.'),
(9, 'Daniel Clark', 'danielclark@example.com', '8888888888', 'Greetings, Im interested in becoming a partner.'),
(10, 'Sophia Lee', 'sophialee@example.com', '3333333333', 'Hello, Im experiencing difficulties during checkout.');


CREATE TABLE `images` (
  `id` int NOT NULL,
  `url` varchar(255) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `public_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `images` (`id`, `url`, `product_id`, `public_id`) VALUES
(64643, 'https://upload.lixibox.com/system/pictures/files/000/084/054/large/1683686600.webp?v=2', '64630b7fab5eced149e25b19', '123'),
(64644, 'https://upload.lixibox.com/system/pictures/files/000/082/791/large/1679971806.webp?v=2', '64630b7fab5eced149e25b19', '123'),
(64645, 'https://upload.lixibox.com/system/pictures/files/000/082/943/large/1680244270.webp?v=2', '64630b7fab5eced149e25b19', '123'),
(64646, 'https://upload.lixibox.com/system/pictures/files/000/072/558/large/1652931447.webp?v=2', '64630b99ab5eced149e25b1d', '123'),
(64647, 'https://upload.lixibox.com/system/pictures/files/000/072/559/large/1652931456.webp?v=2', '64630b99ab5eced149e25b1d', '123'),
(64648, 'https://upload.lixibox.com/system/pictures/files/000/072/559/large/1652931456.webp?v=2', '64630b99ab5eced149e25b1d', '123'),
(64649, 'https://upload.lixibox.com/system/pictures/files/000/073/454/large/1655460359.webp?v=2', '64630bc7ab5eced149e25b21', '123'),
(64650, 'https://upload.lixibox.com/system/pictures/files/000/073/455/large/1655460385.webp?v=2', '64630bc7ab5eced149e25b21', '123'),
(64651, 'https://upload.lixibox.com/system/pictures/files/000/073/455/large/1655460385.webp?v=2', '64630bc7ab5eced149e25b21', '123'),
(64652, 'https://upload.lixibox.com/system/pictures/files/000/068/408/large/1642752095.webp?v=2', '64630bf7ab5eced149e25b25', '123'),
(64653, 'https://upload.lixibox.com/system/pictures/files/000/079/883/large/1671419232.webp?v=2', '64630bf7ab5eced149e25b25', '123'),
(64654, 'https://upload.lixibox.com/system/pictures/files/000/079/883/large/1671419232.webp?v=2', '64630bf7ab5eced149e25b25', '123'),
(64655, 'https://upload.lixibox.com/system/pictures/files/000/068/408/large/1642752095.webp?v=2', '64630c69ab5eced149e25b2c', '123'),
(64656, 'https://upload.lixibox.com/system/pictures/files/000/079/883/large/1671419232.webp?v=2', '64630c69ab5eced149e25b2c', '123'),
(64657, 'https://upload.lixibox.com/system/pictures/files/000/079/883/large/1671419232.webp?v=2', '64630c69ab5eced149e25b2c', '123');


CREATE TABLE `order` (
  `id` varchar(255) NOT NULL,
  `paymentid` int DEFAULT NULL,
  `orderStatus` varchar(255) DEFAULT NULL,
  `totalPrice` decimal(10,2) DEFAULT NULL,
  `orderby` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO `order` (`id`, `paymentid`, `orderStatus`, `totalPrice`, `orderby`, `createdAt`, `updatedAt`) VALUES
('646f31ba0b770363835f8cba', 13, 'Đang vận chuyển', 190000.00, '64495c3ab906584b8bebf308', '2023-05-25 10:00:26', '2023-05-27 06:29:45'),
('646f34bb0e546b6166dcb42e', 13, 'Đang xử lý', 1540000.00, '644f3aa4e366ff065b6a1bbf', '2023-05-25 10:13:15', '2023-05-27 06:44:17'),
('646f35010464c14b7385cbe1', 13, 'Đang xử lý', 130000.00, '64495c3ab906584b8bebf308', '2023-05-25 10:14:25', '2023-05-25 10:14:25'),
('646f3570fb4966e653f453ab', 11, 'Đang vận chuyển', 185000.00, '644f3aa4e366ff065b6a1bbf', '2023-05-25 10:16:16', '2023-05-25 10:16:16'),
('647037f04fc73eff30cd278c', 13, 'Đang vận chuyển', 190000.00, '644f3aa4e366ff065b6a1bbf', '2023-05-26 04:39:12', '2023-05-26 04:39:12'),
('64703fbfc15ad2228a7cdf0c', 13, 'Đang vận chuyển', 1540000.00, '644f3aa4e366ff065b6a1bbf', '2023-05-26 05:12:31', '2023-05-26 05:12:31'),
('64704b53bbbd21c02e87edf2', 12, 'Đang xử lý', 1535000.00, '6450e35d5a904a736c1137ec', '2023-05-26 06:01:55', '2023-05-26 06:01:55'),
('64704e509eb298dad753038a', 12, 'Đang xử lý', 1535000.00, '6450e35d5a904a736c1137ec', '2023-05-26 06:14:40', '2023-05-26 06:14:40');


CREATE TABLE `orderdetail` (
  `id` int NOT NULL,
  `orderid` varchar(255) NOT NULL,
  `productid` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



INSERT INTO `orderdetail` (`id`, `orderid`, `productid`, `quantity`) VALUES
(1, '646f31ba0b770363835f8cba', '64630b7fab5eced149e25b19', 1),
(2, '646f31ba0b770363835f8cba', '64630b99ab5eced149e25b1d', 2),
(3, '646f31ba0b770363835f8cba', '64630bf7ab5eced149e25b25', 3),
(4, '646f31ba0b770363835f8cba', '64630bc7ab5eced149e25b21', 4),
(5, '646f31ba0b770363835f8cba', '64630c69ab5eced149e25b2c', 5),
(6, '646f34bb0e546b6166dcb42e', '64630b7fab5eced149e25b19', 2),
(7, '646f34bb0e546b6166dcb42e', '64630b99ab5eced149e25b1d', 3),
(8, '646f34bb0e546b6166dcb42e', '64630bf7ab5eced149e25b25', 1),
(9, '646f34bb0e546b6166dcb42e', '64630bc7ab5eced149e25b21', 2),
(10, '646f34bb0e546b6166dcb42e', '64630c69ab5eced149e25b2c', 3),
(11, '64703fbfc15ad2228a7cdf0c', '64630c69ab5eced149e25b2c', 3),
(12, '647037f04fc73eff30cd278c', '64630bf7ab5eced149e25b25', 3),
(13, '646f3570fb4966e653f453ab', '64630bf7ab5eced149e25b25', 3),
(14, '646f3570fb4966e653f453ab', '64630b99ab5eced149e25b1d', 3);

CREATE TABLE `payments` (
  `id` int NOT NULL,
  `method_name` varchar(255) DEFAULT NULL,
  `credit_card_number` varchar(16) DEFAULT NULL,
  `expiration_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `payments` (`id`, `method_name`, `credit_card_number`, `expiration_date`) VALUES
(1, 'Visa', '1234567890123456', '2023-12-31'),
(2, 'Mastercard', '9876543210987654', '2024-06-30'),
(3, 'American Express', '5678901234567890', '2022-09-30'),
(4, 'Discover', '0987654321098765', '2023-04-30'),
(5, 'PayPal', '2345678901234567', '2024-02-28'),
(6, 'Diners Club', '7890123456789012', '2022-11-30'),
(7, 'JCB', '3456789012345678', '2023-08-31'),
(8, 'Maestro', '4567890123456789', '2024-01-31'),
(9, 'UnionPay', '9012345678901234', '2022-10-31'),
(10, 'Apple Pay', '0123456789012345', '2023-07-31'),
(11, 'Nhận tiền giao hàng', NULL, NULL),
(12, 'MoMo', NULL, NULL),
(13, 'PayPal', NULL, NULL);

CREATE TABLE `products` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `price` decimal(10,2) DEFAULT NULL,
  `category_id` varchar(255) DEFAULT NULL,
  `brand_id` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `sold` int DEFAULT NULL,
  `totalrating` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`id`, `title`, `slug`, `description`, `price`, `category_id`, `brand_id`, `quantity`, `sold`, `totalrating`, `createdAt`, `updatedAt`) VALUES
('64630b7fab5eced149e25b19', 'Tinh Chất Dưỡng Trắng Da LOreal Paris Revitalift Crystal Micro-Essence 22ml', 'tinh-chat-duong-trang-da-loreal-paris-revitalift-crystal-micro-essence-22ml', 'Muối Tắm Tẩy Tế Bào Da A Bonne Very Sexy Whitening Salt Scrub Giúp Trắng Da 120g là muối tắm giúp dưỡng da hương nước hoa với những hạt ánh nhũ giúp làn da bạn luôn lung linh, rạng rỡ cả ngày và đêm. Sản phẩm làm sạch da, giúp da trắng khoẻ. Tẩy sạch tế bào chết toàn thân giảm nếp nhăn mờ sắc tố đen cho làn da trắng sáng, cung cấp dưỡng chất cho làn da trở nên quyến rũ gợi cảm và khoẻ mạnh.', 350000.00, '644f3be1e366ff065b6a1be5', '644f3d27e0cd356a8638f564', 10, 1, 4, '2023-05-16 04:52:41', '2023-05-16 04:52:41'),
('64630b99ab5eced149e25b1d', 'Kem Dưỡng Da Ban Ngày Sâm Hàn Quốc The Face Shop Yehwadam Revitalizing Moisturizing Cream 10ml', 'kem-duong-da-ban-ngay-sam-han-quoc-the-face-shop-yehwadam-revitalizing-moisturizing-cream-10ml', 'Muối Tắm Tẩy Tế Bào Da A Bonne Very Sexy Whitening Salt Scrub Giúp Trắng Da 120g là muối tắm giúp dưỡng da hương nước hoa với những hạt ánh nhũ giúp làn da bạn luôn lung linh, rạng rỡ cả ngày và đêm. Sản phẩm làm sạch da, giúp da trắng khoẻ. Tẩy sạch tế bào chết toàn thân giảm nếp nhăn mờ sắc tố đen cho làn da trắng sáng, cung cấp dưỡng chất cho làn da trở nên quyến rũ gợi cảm và khoẻ mạnh.', 250000.00, '644f3be1e366ff065b6a1be5', '644f3d27e0cd356a8638f564', 10, 1, 5, '2023-05-16 04:52:57', '2023-05-16 04:52:57'),
('64630bc7ab5eced149e25b21', 'Xịt Dưỡng Tóc Tresemme Botanique Detox & Restore 125ml', 'xit-duong-toc-tresemme-botanique-detox-restore-125ml', 'Muối Tắm Tẩy Tế Bào Da A Bonne Very Sexy Whitening Salt Scrub Giúp Trắng Da 120g là muối tắm giúp dưỡng da hương nước hoa với những hạt ánh nhũ giúp làn da bạn luôn lung linh, rạng rỡ cả ngày và đêm. Sản phẩm làm sạch da, giúp da trắng khoẻ. Tẩy sạch tế bào chết toàn thân giảm nếp nhăn mờ sắc tố đen cho làn da trắng sáng, cung cấp dưỡng chất cho làn da trở nên quyến rũ gợi cảm và khoẻ mạnh.', 130000.00, '644f3beae366ff065b6a1be9', '644f3d27e0cd356a8638f564', 10, 1, 2, '2023-05-16 04:53:19', '2023-05-16 04:53:19'),
('64630bf7ab5eced149e25b25', 'Tẩy Da Chết Toàn Thân Papaya Treaclemoon 225ml', 'tay-da-chet-toan-than-papaya-treaclemoon-225ml', 'Muối Tắm Tẩy Tế Bào Da A Bonne Very Sexy Whitening Salt Scrub Giúp Trắng Da 120g là muối tắm giúp dưỡng da hương nước hoa với những hạt ánh nhũ giúp làn da bạn luôn lung linh, rạng rỡ cả ngày và đêm. Sản phẩm làm sạch da, giúp da trắng khoẻ. Tẩy sạch tế bào chết toàn thân giảm nếp nhăn mờ sắc tố đen cho làn da trắng sáng, cung cấp dưỡng chất cho làn da trở nên quyến rũ gợi cảm và khoẻ mạnh.', 150000.00, '644f3be1e366ff065b6a1be5', '644f3d27e0cd356a8638f564', 10, 1, 3, '2023-05-16 04:53:35', '2023-05-16 04:53:35'),
('64630c69ab5eced149e25b2c', 'Máy Uốn Tóc Tự Xoay Ion Âm Halio InstaCurl Premium Automatic Hair Styler Pearl White', 'may-uon-toc-tu-xoay-ion-am-halio-instacurl-premium-automatic-hair-styler-pearl-white', 'Muối Tắm Tẩy Tế Bào Da A Bonne Very Sexy Whitening Salt Scrub Giúp Trắng Da 120g là muối tắm giúp dưỡng da hương nước hoa với những hạt ánh nhũ giúp làn da bạn luôn lung linh, rạng rỡ cả ngày và đêm. Sản phẩm làm sạch da, giúp da trắng khoẻ. Tẩy sạch tế bào chết toàn thân giảm nếp nhăn mờ sắc tố đen cho làn da trắng sáng, cung cấp dưỡng chất cho làn da trở nên quyến rũ gợi cảm và khoẻ mạnh.', 1500000.00, '646095d8d0189f261fc461ca', '644f3d3ce0cd356a8638f56c', 10, 1, 4, '2023-05-16 04:54:01', '2023-05-16 04:54:01');


CREATE TABLE `provinces` (
  `id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `provinces` (`id`, `name`) VALUES
(1, 'Thành phố Hà Nội'),
(2, 'Tỉnh Hà Giang'),
(4, 'Tỉnh Cao Bằng'),
(6, 'Tỉnh Bắc Kạn'),
(8, 'Tỉnh Tuyên Quang'),
(10, 'Tỉnh Lào Cai'),
(11, 'Tỉnh Điện Biên'),
(12, 'Tỉnh Lai Châu'),
(14, 'Tỉnh Sơn La'),
(15, 'Tỉnh Yên Bái'),
(17, 'Tỉnh Hoà Bình'),
(19, 'Tỉnh Thái Nguyên'),
(20, 'Tỉnh Lạng Sơn'),
(22, 'Tỉnh Quảng Ninh'),
(24, 'Tỉnh Bắc Giang'),
(25, 'Tỉnh Phú Thọ'),
(26, 'Tỉnh Vĩnh Phúc'),
(27, 'Tỉnh Bắc Ninh'),
(30, 'Tỉnh Hải Dương'),
(31, 'Thành phố Hải Phòng'),
(33, 'Tỉnh Hưng Yên'),
(34, 'Tỉnh Thái Bình'),
(35, 'Tỉnh Hà Nam'),
(36, 'Tỉnh Nam Định'),
(37, 'Tỉnh Ninh Bình'),
(38, 'Tỉnh Thanh Hóa'),
(40, 'Tỉnh Nghệ An'),
(42, 'Tỉnh Hà Tĩnh'),
(44, 'Tỉnh Quảng Bình'),
(45, 'Tỉnh Quảng Trị'),
(46, 'Tỉnh Thừa Thiên Huế'),
(48, 'Thành phố Đà Nẵng'),
(49, 'Tỉnh Quảng Nam'),
(51, 'Tỉnh Quảng Ngãi'),
(52, 'Tỉnh Bình Định'),
(54, 'Tỉnh Phú Yên'),
(56, 'Tỉnh Khánh Hòa'),
(58, 'Tỉnh Ninh Thuận'),
(60, 'Tỉnh Bình Thuận'),
(62, 'Tỉnh Kon Tum'),
(64, 'Tỉnh Gia Lai'),
(66, 'Tỉnh Đắk Lắk'),
(67, 'Tỉnh Đắk Nông'),
(68, 'Tỉnh Lâm Đồng'),
(70, 'Tỉnh Bình Phước'),
(72, 'Tỉnh Tây Ninh'),
(74, 'Tỉnh Bình Dương'),
(75, 'Tỉnh Đồng Nai'),
(77, 'Tỉnh Bà Rịa - Vũng Tàu'),
(79, 'Thành phố Hồ Chí Minh'),
(80, 'Tỉnh Long An'),
(82, 'Tỉnh Tiền Giang'),
(83, 'Tỉnh Bến Tre'),
(84, 'Tỉnh Trà Vinh'),
(86, 'Tỉnh Vĩnh Long'),
(87, 'Tỉnh Đồng Tháp'),
(89, 'Tỉnh An Giang'),
(91, 'Tỉnh Kiên Giang'),
(92, 'Thành phố Cần Thơ'),
(93, 'Tỉnh Hậu Giang'),
(94, 'Tỉnh Sóc Trăng'),
(95, 'Tỉnh Bạc Liêu'),
(96, 'Tỉnh Cà Mau');


CREATE TABLE `reviews` (
  `id` varchar(255) NOT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review` text,
  `isRecommended` tinyint(1) DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `version` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `reviews` (`id`, `product_id`, `user_id`, `title`, `rating`, `review`, `isRecommended`, `status`, `created`, `version`) VALUES
('647801735aa89190e1d95ea1', '64630bf7ab5eced149e25b25', '644f3aa4e366ff065b6a1bbf', '123', 5, '123', 1, 'Approved', '2023-06-01 02:24:51', 0),
('6478087339906e234ec2aed8', '64630b99ab5eced149e25b1d', '644f3aa4e366ff065b6a1bbf', 'wasdsad', 3, 'asdasdasdasdas', 1, 'Approved', '2023-06-01 02:54:43', 0),
('647808f55aa89190e1d95ee1', '64630bc7ab5eced149e25b21', '644f3aa4e366ff065b6a1bbf', '21313', 5, '123213213', 1, 'Approved', '2023-06-01 02:56:53', 0),
('64797ada752f95a3b62c9cb7', '64630b99ab5eced149e25b1d', '64495c3ab906584b8bebf308', 'Cúc cu', 5, 'Như xịt', 1, 'Approved', '2023-06-02 05:15:06', 0),
('6479dbfd7ad2ce93d1c41102', '64630bc7ab5eced149e25b21', '64495c3ab906584b8bebf308', '123', 5, '123', 1, 'Waiting Approval', '2023-06-02 12:09:33', 0),
('6479e0597cb342c2b6fd020e', '64630bf7ab5eced149e25b25', '64495c3ab906584b8bebf308', '34t43t4et', 5, 'efewrwer', 1, 'Waiting Approval', '2023-06-02 12:28:09', 0),
('6479e2f26889cd352116a400', '64630b99ab5eced149e25b1d', '6450d8f95a904a736c1137e0', '42424', 5, '213123', 1, 'Waiting Approval', '2023-06-02 12:39:14', 0),
('6479ea67ba4210a3aa4182af', '64630bc7ab5eced149e25b21', '6450d8f95a904a736c1137e0', '123213', 5, '123213', 1, 'Waiting Approval', '2023-06-02 13:11:03', 0);



CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `isBlocked` tinyint(1) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `refreshToken` varchar(255) DEFAULT NULL,
  `idprovinces` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `mobile`, `password`, `role`, `isBlocked`, `createdAt`, `updatedAt`, `refreshToken`, `idprovinces`) VALUES
('64495c20b906584b8bebf305', 'dung32', 'quocdung32', 'admin123@gmail.com', '09188123123', '$2b$10$Wdx5gwr/MkjetlXyDYeHzuUvykSURyXX0E3WtYyIJR9poFUw.SlwK', 'admin', 0, '2023-04-26 10:15:12', '2023-06-08 02:59:56', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDk1YzIwYjkwNjU4NGI4YmViZjMwNSIsImlhdCI6MTY4NDIxOTI2MSwiZXhwIjoxNjg0NDc4NDYxfQ.YBRVNSJkqBuf_myZ8JFA2W4P33ib-gTpFLiYBZ9vvOU', 86),
('64495c3ab906584b8bebf308', 'dung', 'quocdung', 'admin1234@gmail.com', '918812312312', '$2b$10$af3grNpnoLJX3zFVZy9kFuzSLG6RTbsvhkbAv1QD68S1rkVygQwaG', 'admin', 1, '2023-04-26 10:15:38', '2023-06-03 12:31:45', NULL, 31),
('644f3aa4e366ff065b6a1bbf', 'Đỗ', 'Thuận', 'usertest@gmail.com', '0794355704', '$2b$10$Wdx5gwr/MkjetlXyDYeHzuUvykSURyXX0E3WtYyIJR9poFUw.SlwK', 'user', 0, '2023-04-30 21:05:56', '2023-06-08 04:12:20', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGYzYWE0ZTM2NmZmMDY1YjZhMWJiZiIsImlhdCI6MTY4NTY4NTk1NiwiZXhwIjoxNjg1OTQ1MTU2fQ.7goGYFe7tcl9p5-oGta4xpGK-bjHHHGUlY52nsq5DJk', 86),
('6450d5115a904a736c1137de', 'Đỗ', 'Thuận', 'thuangomvl456@gmail.com', '0794355704', '$2b$10$OIp6AZjuLcfShd5rpcop8eoc5T6KX2TsYB/.9ezqrZ6l5TV1WFrZW', 'user', 0, '2023-05-06 20:01:21', '2023-06-03 12:33:32', NULL, 86),
('6450d8f95a904a736c1137e0', 'Đỗ', 'Thuận', 'thuan02@gmail.com', '0794355704', '$2b$10$ac7Z8Z9I/yo3t5q1uyxj9.pM/d/g36k/BMZWab9.ZtAocLQ80ApxW', 'user', 0, '2023-05-06 20:16:09', '2023-06-03 12:33:27', NULL, 86),
('6450dc1d5a904a736c1137e2', 'Đỗ', 'Thuận', 'thuangomail456@gmail.com', '0794355704', '$2b$10$68T6vqz3U3PFjDCQIeF3M.A8o2Jm.JST9PjYJpBzeb5X7TToYlV9S', 'employee', 0, '2023-05-06 20:27:17', '2023-06-08 03:14:09', NULL, 91),
('6450dd635a904a736c1137e4', 'Đỗ', 'Thuận', 'tuanla01@gmail.com', '0794355704', '$2b$10$NQ86rD7L0ELzj/rhBSNcq.Hr5nSNwJ1cddrZgsNjTJ5aRQo2NcE4q', 'employee', 0, '2023-05-06 20:30:11', '2023-06-08 03:01:25', NULL, 92),
('6450dda15a904a736c1137e6', 'Đỗ', 'Thuận', 'thuangomqua@gmail.com', '0794355704', '$2b$10$xtHj7E9dyiB8FZg.7IClr.U4Yb3dSUCdzsXYhx2UQsTJZ1YQK61QK', 'employee', 0, '2023-05-06 20:31:37', '2023-06-08 03:14:23', NULL, 60),
('6450ddb95a904a736c1137e8', 'Đỗ', 'Thuận', 'thuan02@gmail.com', '0794355704', '$2b$10$dRY8M7ru2vPj65BS0sq2deHQaTJv2YAN1MDO.6ehpjMwtGoVpOFte', 'user', 0, '2023-05-06 20:31:53', '2023-06-08 03:14:43', NULL, 77),
('6450e33e5a904a736c1137ea', 'Đỗ', 'Thuận', 'thuanhanoi@gmail.com', '0794355704', '$2b$10$xO9IfyM8bgjE5t3e4xayZe6SlZnb/SI.svdhqCDyO7qdeCa2c4Mda', 'user', 0, '2023-05-06 20:51:34', '2023-06-08 03:14:35', NULL, 79),
('6450e35d5a904a736c1137ec', 'Đỗ', 'Thuận', 'thuan@gmail.com', '0794355704', '$2b$10$04IldszXCTNT6LbFwRMvNOyEvSruoR0Yf9Me4.xXg8F6pne8gmGk2', 'admin', 0, '2023-05-06 20:51:57', '2023-06-08 03:00:10', NULL, 92);

ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_blog_cateblog` (`idcateblog`);

ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `cateblog`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id` (`product_id`);


ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_user` (`orderby`),
  ADD KEY `fk_order_payment` (`paymentid`);


ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_detail` (`orderid`),
  ADD KEY `fk_order_product` (`productid`);


ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_categorys` (`category_id`),
  ADD KEY `fk_product_brands` (`brand_id`);
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_reviews_user` (`user_id`),
  ADD KEY `fk_reviews_product` (`product_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_provinces` (`idprovinces`);

ALTER TABLE `contacts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `images`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64658;

ALTER TABLE `orderdetail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

ALTER TABLE `payments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

ALTER TABLE `provinces`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

ALTER TABLE `blog`
  ADD CONSTRAINT `fk_blog_cateblog` FOREIGN KEY (`idcateblog`) REFERENCES `cateblog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `images`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `order`
  ADD CONSTRAINT `fk_order_payment` FOREIGN KEY (`paymentid`) REFERENCES `payments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_order_user` FOREIGN KEY (`orderby`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `orderdetail`
  ADD CONSTRAINT `fk_order_detail` FOREIGN KEY (`orderid`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_order_product` FOREIGN KEY (`productid`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `products`
  ADD CONSTRAINT `fk_product_brands` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_product_categorys` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `reviews`
  ADD CONSTRAINT `fk_reviews_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reviews_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `users`
  ADD CONSTRAINT `fk_user_provinces` FOREIGN KEY (`idprovinces`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
