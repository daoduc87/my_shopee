//
// import Slider from "react-slick";
// import { useGetCategoryQuery } from "../../services/rootApi";

// const categories = [
//   {
//     name: "Thời Trang Nam",
//     img: "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp",
//   },
//   {
//     name: "Điện Thoại & Phụ Kiện",
//     img: "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp",
//   },
//   {
//     name: "Thiết Bị Điện Tử",
//     img: "	https://down-vn.img.susercontent.com/file/978b9e4cb61c611aaaf58664fae133c5@resize_w640_nl.webp",
//   },
//   {
//     name: "Máy Tính & Laptop",
//     img: "	https://down-vn.img.susercontent.com/file/c3f3edfaa9f6dafc4825b77d8449999d@resize_w640_nl.webp",
//   },
//   {
//     name: "Máy Ảnh & Máy Quay Phim",
//     img: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w640_nl.webp",
//   },
//   {
//     name: "Đồng Hồ",
//     img: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260@resize_w640_nl.webp",
//   },
//   {
//     name: "Giày Dép Nam",
//     img: "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de@resize_w640_nl.webp",
//   },
//   {
//     name: "Thiết Bị Điện Gia Dụng",
//     img: "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857@resize_w640_nl.webp",
//   },
//   {
//     name: "Thể Thao & Du Lịch",
//     img: "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4@resize_w640_nl.webp",
//   },
//   {
//     name: "Ô Tô & Xe Máy & Xe Đạp",
//     img: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334@resize_w640_nl.webp",
//   },
//   {
//     name: "Thời Trang Nữ",
//     img: "	https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d@resize_w640_nl.webp",
//   },
//   {
//     name: "Mẹ & Bé",
//     img: "https://down-vn.img.susercontent.com/file/099edde1ab31df35bc255912bab54a5e@resize_w640_nl.webp",
//   },
//   {
//     name: "Nhà Cửa & Đời Sống",
//     img: "	https://down-vn.img.susercontent.com/file/24b194a695ea59d384768b7b471d563f@resize_w640_nl.webp",
//   },
//   {
//     name: "Sắc Đẹp",
//     img: "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72@resize_w640_nl.webp",
//   },
//   {
//     name: "Sức Khỏe",
//     img: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747@resize_w640_nl.webp",
//   },
//   {
//     name: "Giày Dép Nữ",
//     img: "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847@resize_w640_nl.webp",
//   },
//   {
//     name: "Túi Ví Nữ",
//     img: "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52@resize_w640_nl.webp",
//   },
//   {
//     name: "Phụ Kiện & Trang Sức Nữ",
//     img: "	https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e@resize_w640_nl.webp",
//   },
//   {
//     name: "Bách Hóa Online",
//     img: "	https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889@resize_w640_nl.webp",
//   },
//   {
//     name: "Nhà Sách Online",
//     img: "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139@resize_w640_nl.webp",
//   },
// ];
// const categories2 = [
//   {
//     name: "Máy Ảnh & Máy Quay Phim",
//     img: "https://down-vn.img.susercontent.com/file/ec14dd4fc238e676e43be2a911414d4d@resize_w640_nl.webp",
//   },
//   {
//     name: "Đồng Hồ",
//     img: "https://down-vn.img.susercontent.com/file/86c294aae72ca1db5f541790f7796260@resize_w640_nl.webp",
//   },
//   {
//     name: "Giày Dép Nam",
//     img: "	https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de@resize_w640_nl.webp",
//   },
//   {
//     name: "Thiết Bị Điện Gia Dụng",
//     img: "	https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857@resize_w640_nl.webp",
//   },
//   {
//     name: "Thể Thao & Du Lịch",
//     img: "https://down-vn.img.susercontent.com/file/6cb7e633f8b63757463b676bd19a50e4@resize_w640_nl.webp",
//   },
//   {
//     name: "Ô Tô & Xe Máy & Xe Đạp",
//     img: "https://down-vn.img.susercontent.com/file/3fb459e3449905545701b418e8220334@resize_w640_nl.webp",
//   },
//   {
//     name: "Balo & Túi Ví Nam",
//     img: "https://down-vn.img.susercontent.com/file/18fd9d878ad946db2f1bf4e33760c86f@resize_w640_nl.webp",
//   },
//   {
//     name: "Đồ Chơi",
//     img: "	https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684@resize_w640_nl.webp",
//   },
//   {
//     name: "Chăm Sóc Thú Cưng",
//     img: "	https://down-vn.img.susercontent.com/file/cdf21b1bf4bfff257efe29054ecea1ec@resize_w640_nl.webp",
//   },
//   {
//     name: "Dụng cụ và thiết bị tiện ích",
//     img: "https://down-vn.img.susercontent.com/file/e4fbccba5e1189d1141b9d6188af79c0@resize_w640_nl.webp",
//   },
//   {
//     name: "Sức Khỏe",
//     img: "https://down-vn.img.susercontent.com/file/49119e891a44fa135f5f6f5fd4cfc747@resize_w640_nl.webp",
//   },
//   {
//     name: "Giày Dép Nữ",
//     img: "https://down-vn.img.susercontent.com/file/48630b7c76a7b62bc070c9e227097847@resize_w640_nl.webp",
//   },
//   {
//     name: "Túi Ví Nữ",
//     img: "https://down-vn.img.susercontent.com/file/fa6ada2555e8e51f369718bbc92ccc52@resize_w640_nl.webp",
//   },
//   {
//     name: "Phụ Kiện & Trang Sức Nữ",
//     img: "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e@resize_w640_nl.webp",
//   },
//   {
//     name: "Bách Hóa Online",
//     img: "	https://down-vn.img.susercontent.com/file/c432168ee788f903f1ea024487f2c889@resize_w640_nl.webp",
//   },
//   {
//     name: "Nhà Sách Online",
//     img: "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139@resize_w640_nl.webp",
//   },
//   {
//     name: "Thời Trang Trẻ Em",
//     img: "https://down-vn.img.susercontent.com/file/4540f87aa3cbe99db739f9e8dd2cdaf0@resize_w640_nl.webp",
//   },
//   {
//     name: "Giặt Giũ & Chăm Sóc Nhà Cửa",
//     img: "https://down-vn.img.susercontent.com/file/cd8e0d2e6c14c4904058ae20821d0763@resize_w640_nl.webp",
//   },
//   {
//     name: "Voucher & Dịch Vụ",
//     img: "https://down-vn.img.susercontent.com/file/b0f78c3136d2d78d49af71dd1c3f38c1@resize_w640_nl.webp",
//   },
// ];

// export default function CategoryList() {
//   const { data } = useGetCategoryQuery();
//   console.log({ data });
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="mx-auto mt-6 max-w-screen-xl rounded bg-white px-4 py-6">
//       <h2 className="mb-4 text-xl font-semibold uppercase text-gray-700">
//         Danh Mục
//       </h2>
//       <Slider {...settings}>
//         <div>
//           <div className="mb-4 flex justify-between">
//             {categories.slice(0, 10).map((cat, idx) => (
//               <div
//                 key={idx}
//                 className="flex w-1/12 flex-col items-center text-sm"
//               >
//                 <div className="mb-2 h-16 w-16">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="h-full w-full rounded-full bg-gray-100 object-contain p-1"
//                   />
//                 </div>
//                 <span className="text-center text-xs leading-4 text-gray-700">
//                   {cat.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-between">
//             {categories.slice(10, 20).map((cat, idx) => (
//               <div
//                 key={idx}
//                 className="flex w-1/12 flex-col items-center text-sm"
//               >
//                 <div className="mb-2 h-16 w-16">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="h-full w-full rounded-full bg-gray-100 object-contain p-1"
//                   />
//                 </div>
//                 <span className="text-center text-xs leading-4 text-gray-700">
//                   {cat.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div>
//           <div className="mb-4 flex justify-between">
//             {categories2.slice(0, 10).map((cat, idx) => (
//               <div
//                 key={idx}
//                 className="flex w-1/12 flex-col items-center text-sm"
//               >
//                 <div className="mb-2 h-16 w-16">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="h-full w-full rounded-full bg-gray-100 object-contain p-1"
//                   />
//                 </div>
//                 <span className="text-center text-xs leading-4 text-gray-700">
//                   {cat.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-between">
//             {categories2.slice(10, 20).map((cat, idx) => (
//               <div
//                 key={idx}
//                 className="flex w-1/12 flex-col items-center text-sm"
//               >
//                 <div className="mb-2 h-16 w-16">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="h-full w-full rounded-full bg-gray-100 object-contain p-1"
//                   />
//                 </div>
//                 <span className="text-center text-xs leading-4 text-gray-700">
//                   {cat.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }
