import Numbers from "../components/numbers.jsx";
export default function AboutPage() {
  return (
    <main>
      <div className="[background:linear-gradient(90deg,#0CE7AC_0%,#00543D_100%)] h-50 p-10">
        <div className="flex items-center gap-130">
          <div className="ml-25">
            <h1 className="text-5xl font-bold text-(--neutral-color)">
              ABOUT US
            </h1>
            <div className="flex items-center  gap-3 text-[#080808] text-sm font-medium  mt-5">
              <p>HOME</p>
              <img src="/image/Lineicon2.png" alt="line" className="h-3" />
              <p>GET QOUTE</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <img src="/image/anglebracket.png" alt="line" className="w-10" />
              <img src="/image/dot1.png" alt="line" className="w-5 h-5" />
              <img src="/image/dot2.png" alt="line" className="w-5 h-5" />
              <img src="/image/dot3.png" alt="line" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-20 mb-30">
        <div className="flex items-center justify-center ml-20 gap-30 ">
          <div>
            <div className="flex items-center gap-2 p-2 rounded-sm bg-(--secondary-color) w-[110px] h-[30px]">
              <img src="/image/Cdot.png" alt="cdot" />
              <p className="font-bold text-xs ">About Us </p>
              <img src="/image/Cdot.png" alt="cdot" />
            </div>
            <p className="font-medium text-sm leading-6">
              Aphamed Prints is a full-service branding, design, and printing
              company committed <br /> to bringing ideas to life through
              creativity, precision, and quality craftsmanship. <br />
              <br />
              We believe that every design tells a story , one that deserves to
              be printed with care <br /> passion, and purpose. Since our
              inception in 2018, we’ve grown from a small print <br /> Brand
              into a trusted brand known for delivering premium-quality printing
              and <br /> branding solutions across Lagos and beyond. <br />
              <br />
              We specialize in digital printing, brand design, and creative
              production, offering top- <br />
              notch services that blend modern technology with skilled
              craftsmanship. From <br /> business cards to large-format banners,
              and from corporate branding to customized <br />
              merchandise, our goal is simple; to make your brand stand out
              beautifully and <br /> professionally. <br />
              <br />
              Driven by the philosophy that “Quality is our Job,” we don’t just
              print , we partner <br /> with our clients to bring their ideas to
              life. <br />
              <br />
              Over the years, Aphamed Prints has become a one-stop solution for
              individuals, <br /> startups, and established businesses seeking
              consistent quality, timely delivery, and <br /> innovative
              results. We take pride in transforming visions into tangible
              expressions of <br />
              success because at Aphamed Prints , quality isn’t just what we do;
              it’s who we are.
            </p>
          </div>

          <div>
            <div className="w-[540px] h-[350px] relative bg-[#D9D9D9] rounded-lg ">
              <div className="w-[384px] h-[213px] bg-[#D9D9D9] border border-white rounded-lg absolute top-60 left-30"></div>
            </div>
          </div>
        </div>
      </div>

      <Numbers />

      <div className="flex items-center justify-end gap-40 mb-20">
      <div>
        <div className="flex items-center gap-2 p-2 rounded-sm bg-(--secondary-color) w-[120px] h-[30px]">
          <img src="/image/Cdot.png" alt="cdot" />
          <p className="font-bold text-[10px] ">Meet the CEO </p>
          <img src="/image/Cdot.png" alt="cdot" />
        </div>
        <p className="font-medium text-sm leading-6">
          I’ve always believed that design isn’t just about what you see it’s
          about how it makes <br /> you feel. That belief became the foundation
          of Aphamed Prints.
          <br />
          <br />
          Hi! Welcome here.
          <br />
          <br />
          I’m Ahmed Mustapha Olawale, a passionate Design, Print, and Brand
          Technologist <br /> with years of professional experience in the
          creative and printing industry. <br />
          <br />
          I’m a proud graduate of Yaba College of Technology, where I built a
          strong foundation <br /> in printing technology and creative design.
          My journey began long before Aphamed <br /> Prints officially launched
          in 2018. With hands-on experience in printing, machine <br />{" "}
          operation, and brand development from SO&L Communication to ARK
          Creative <br /> Agency, I’ve learned that true excellence is achieved
          through consistency, innovation, <br /> and teamwork. <br />
          <br />
          Through Aphamed Prints, my mission has always been to redefine what
          quality <br /> means in the print and branding space not just through{" "}
          the final result, but through <br />  the entire creative process.
          Every client we work with becomes part of our story, and <br /> every
          project is a new opportunity to raise the standard higher. <br />
          <br />
          At Aphamed Prints, quality isn’t just our job — it’s our identity.
        </p>
      </div>

      <div>
        <img src="/image/CeoImg.png" alt="Ceo-img" />
      </div>
      </div>

       <div className="bg-[#D9D9D9] p-20 block mx-auto">
        <div className="mx-auto text-center">
          
        </div>
      </div>
  
    </main>
  );
}
