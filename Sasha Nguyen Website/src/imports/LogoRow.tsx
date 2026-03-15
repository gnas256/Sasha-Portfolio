import imgEzyHouseLogo1 from "../assets/f181fc7e8c7aee49a4a283f4a0a6e8a117a8a37b.png";
import imgImage167 from "../assets/e3d1b9c47b1c3d034045512ba0df8922bc39bb6e.png";
import imgImage168 from "../assets/c28ad6b484cc3209cae6fa9becb18cc358855e31.png";
import imgImage166 from "../assets/992451366a5d0e92fdab24705683b4d2c8691205.png";
import imgImage170 from "../assets/b76f953817cbd88775688c2bffa2d25cc71bc782.png";
import imgImage185 from "../assets/d2169fb65ea01c2dc7f2634ef58b4e02db30d9e1.png";
import imgImage184 from "../assets/c8f94bbe370c2e65fe333315ef391f4c950293f6.png";
import imgImage171 from "../assets/811065802d482c0d461cb3009f43a2281ee5221f.png";
import { imgImage169 } from "./svg-t7u5t";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="col-1 h-[90.855px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[33.919px_18.777px] mask-size-[53.302px_53.302px] ml-[-33.92px] mt-[-18.78px] relative row-1 w-[121.14px]" data-name="image 169" style={{ maskImage: `url('${imgImage169}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage170} />
      </div>
    </div>
  );
}

export default function LogoRow() {
  return (
    <div className="content-center flex flex-wrap gap-[20px_40px] items-center justify-center mix-blend-luminosity relative size-full" data-name="Logo Row">
      <div className="relative rounded-[5px] shrink-0 size-[56px]" data-name="Ezy House Logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgEzyHouseLogo1} />
      </div>
      <div className="h-[49px] relative shrink-0 w-[48px]" data-name="image 167">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage167} />
      </div>
      <div className="h-[49px] relative shrink-0 w-[56px]" data-name="image 168">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.24%] left-0 max-w-none top-[-0.12%] w-[406.8%]" src={imgImage168} />
        </div>
      </div>
      <div className="h-[50px] relative shrink-0 w-[51px]" data-name="image 166">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage166} />
      </div>
      <MaskGroup />
      <div className="h-[66px] relative shrink-0 w-[181px]" data-name="image 185">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage185} />
      </div>
      <div className="relative shrink-0 size-[67px]" data-name="image 184">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage184} />
      </div>
      <div className="relative shrink-0 size-[53px]" data-name="image 170">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage171} />
      </div>
    </div>
  );
}