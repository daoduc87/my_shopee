import Slider from "react-slick";

export default function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="https://cf.shopee.vn/file/vn-11134258-820l4-mdzzdb1l8q9z77_xxhdpi"
          alt=""
          className="rounded-sm"
        />
      </div>
      <div>
        <img
          src="https://cf.shopee.vn/file/vn-11134258-820l4-mei0rb8a07iac9_xxhdpi"
          alt=""
          className="rounded-sm"
        />
      </div>
      <div>
        <img
          src="https://cf.shopee.vn/file/vn-11134258-820l4-megwwy59l4p3f9_xxhdpi"
          alt=""
          className="rounded-sm"
        />
      </div>
      <div>
        <img
          src="https://cf.shopee.vn/file/sg-11134258-824gw-megx1bhzqygy33_xxhdpi"
          alt=""
          className="rounded-sm"
        />
      </div>
      <div>
        <img
          src="https://cf.shopee.vn/file/sg-11134258-824i1-megx1gnavyth9a_xxhdpi"
          alt=""
          className="rounded-sm"
        />
      </div>
      <div>
        <img
          src="https://cf.shopee.vn/file/sg-11134258-824ha-megy3tluigw480_xxhdpi"
          alt=""
          className="rounded-sm"
        />
      </div>
    </Slider>
  );
}
