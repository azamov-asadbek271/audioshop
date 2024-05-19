import imgp from "../assets/shared/desktop/image-best-gear.jpg"
function PeopleCard() {
  return (
    <div className="con-align flex  mt-10">
      <div className="p-20 mt-20">
        <h2 className="h2-sty capitalize">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h2>
        <p className="para-sty mt-10">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={imgp} alt="" className="rounded-xl w-full" />
    </div>
  );
}

export default PeopleCard