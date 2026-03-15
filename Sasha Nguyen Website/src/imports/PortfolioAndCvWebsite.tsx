import svgPaths from "./svg-iugm3mk68l";
import imgBrainParticles from "figma:asset/b5aa5e40945b44af3540c047351e129da10a20b5.png";
import imgBrainParticles1 from "figma:asset/fd07ff9975419229f5dc4f135049f2ec102ecfd2.png";
import imgGridBackground from "figma:asset/2627153bd6c2747b446ab056a7520368a3177918.png";

function BrainParticles() {
  return (
    <div className="absolute h-[993px] left-0 opacity-75 top-0 w-[844.797px]" data-name="BrainParticles">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrainParticles} />
    </div>
  );
}

function BrainParticles1() {
  return (
    <div className="absolute h-[993px] left-[691.2px] opacity-75 top-0 w-[844.797px]" data-name="BrainParticles">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBrainParticles1} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[993px] left-0 top-0 w-[1536px]" data-name="Container">
      <BrainParticles />
      <BrainParticles1 />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(152,16,250,0.2)] blur-[120px] left-[384px] rounded-[33554400px] size-[500px] top-[248.25px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(0,184,219,0.15)] blur-[100px] left-[752px] rounded-[33554400px] size-[400px] top-[344.75px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[rgba(79,57,246,0.1)] blur-[150px] left-[468px] rounded-[33554400px] size-[600px] top-[196.5px]" data-name="Container" />;
}

function HeroSection1() {
  return (
    <div className="absolute h-[19.5px] left-[32px] top-[8px] w-[170.438px]" data-name="HeroSection">
      <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19.5px] left-[85.5px] text-[13px] text-[rgba(218,178,255,0.8)] text-center top-0 tracking-[0.325px] whitespace-nowrap">Available for new projects</p>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#00d492] left-[-2.93px] opacity-20 rounded-[33554400px] size-[13.862px] top-[-2.93px]" data-name="Text" />;
}

function Text1() {
  return <div className="absolute bg-[#00d492] left-0 rounded-[33554400px] size-[8px] top-0" data-name="Text" />;
}

function HeroSection2() {
  return (
    <div className="absolute left-[16px] size-[8px] top-[13.75px]" data-name="HeroSection">
      <Text />
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[rgba(173,70,255,0.08)] border border-[rgba(173,70,255,0.2)] border-solid h-[37.5px] left-[293.67px] rounded-[33554400px] top-0 w-[220.438px]" data-name="Container">
      <HeroSection1 />
      <HeroSection2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[14px] top-[8.83px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_3_243)" id="Icon">
          <path d={svgPaths.p2f03b200} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1e0c2e80} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p8dd880} id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p7d50f00} id="Vector_4" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_3_243">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[33.5px] left-0 rounded-[33554400px] top-0 w-[227.406px]" data-name="Text">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19.5px] left-[123px] text-[13px] text-[rgba(255,255,255,0.6)] text-center top-[6px] tracking-[0.325px] whitespace-nowrap">AI-Driven Product Founder</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[33.5px] left-[235.41px] rounded-[33554400px] top-0 w-[225.031px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19.5px] left-[112.5px] text-[13px] text-[rgba(255,255,255,0.6)] text-center top-[6px] tracking-[0.325px] whitespace-nowrap">Customer-Focused Innovator</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] border-solid h-[33.5px] left-[468.44px] rounded-[33554400px] top-0 w-[259.344px]" data-name="Text">
      <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19.5px] left-[129px] text-[13px] text-[rgba(255,255,255,0.6)] text-center top-[6px] tracking-[0.325px] whitespace-nowrap">Award-Winning Strategic Designer</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[33.5px] left-[40px] top-[69.5px] w-[727.781px]" data-name="Container">
      <Text2 />
      <Text3 />
      <Text4 />
    </div>
  );
}

function HeroSection3() {
  return (
    <div className="h-[100.797px] relative shrink-0 w-full" data-name="HeroSection">
      <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[100.8px] left-[364.36px] text-[96px] text-center text-white top-[-1px] tracking-[-2.4px] whitespace-nowrap">I build products</p>
    </div>
  );
}

function HeroSection4() {
  return (
    <div className="h-[100.797px] relative shrink-0 w-full" data-name="HeroSection">
      <p className="-translate-x-1/2 absolute bg-clip-text font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[100.8px] left-[363.42px] text-[96px] text-[transparent] text-center top-[-1px] tracking-[-2.4px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(194, 122, 255) 0%, rgb(0, 211, 243) 50%, rgb(194, 122, 255) 100%)" }}>
        humans love
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col h-[201.594px] items-start left-[40px] top-[135px] w-[727.781px]" data-name="Heading 1">
      <HeroSection3 />
      <HeroSection4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[97.5px] left-[67.89px] top-[360.59px] w-[672px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] left-[336.11px] text-[20px] text-[rgba(255,255,255,0.4)] text-center top-0 w-[635px]">
        <span className="leading-[32.5px]">{`With `}</span>
        <span className="leading-[32.5px] text-[rgba(255,255,255,0.7)]">10 years of experience</span>
        <span className="leading-[32.5px]">{` across `}</span>
        <span className="leading-[32.5px] text-[rgba(194,122,255,0.8)]">4 startups</span>
        <span className="leading-[32.5px]">{` and `}</span>
        <span className="leading-[32.5px] text-[rgba(0,211,243,0.8)]">25+ products</span>
        <span className="leading-[32.5px]">, I bring business closer to human reach through remarkable digital products that blend AI, design, and strategy.</span>
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[135.38px] size-[16px] top-[17.25px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-gradient-to-r from-[#9810fa] h-[50.5px] left-[203.88px] rounded-[33554400px] to-[#00b8db] top-px w-[179.375px]" data-name="Link">
      <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.5px] left-[78px] text-[15px] text-center text-white top-[14px] whitespace-nowrap">View My Work</p>
      <Icon1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.04)] content-stretch flex h-[52.5px] items-center left-[399.25px] px-[29px] py-[15px] rounded-[33554400px] top-0 w-[124.641px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] text-center whitespace-nowrap">{`Let's Talk`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[52.5px] left-[40px] top-[498.09px] w-[727.781px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3a2fa580} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(173, 70, 255, 0.2) 0%, rgba(0, 184, 219, 0.2) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[15px] text-white top-0 tracking-[-0.375px] whitespace-nowrap">10+ Years</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(255,255,255,0.3)] top-0 whitespace-nowrap">Experience</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function HeroSection5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[12px] h-[66.5px] items-center left-[91.38px] px-[21px] py-px rounded-[16px] top-0 w-[158.906px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_279)" id="Icon">
          <path d={svgPaths.p17e613c0} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3d61d240} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p20534e00} id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p392fc080} id="Vector_4" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fbca400} id="Vector_5" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1c1c7100} id="Vector_6" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p240a1800} id="Vector_7" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p162c4500} id="Vector_8" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pc0a4800} id="Vector_9" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_279">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(173, 70, 255, 0.2) 0%, rgba(0, 184, 219, 0.2) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[15px] text-white top-0 tracking-[-0.375px] whitespace-nowrap">4 Startups</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(255,255,255,0.3)] top-0 whitespace-nowrap">Founded</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function HeroSection6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[12px] h-[66.5px] items-center left-[266.28px] px-[21px] py-px rounded-[16px] top-0 w-[167.453px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_274)" id="Icon">
          <path d={svgPaths.p81e2440} id="Vector" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pab98830} id="Vector_2" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p23e3d380} id="Vector_3" stroke="var(--stroke-0, #C27AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_274">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgba(173, 70, 255, 0.2) 0%, rgba(0, 184, 219, 0.2) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[15px] text-white top-0 tracking-[-0.375px] whitespace-nowrap">25+ Products</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(255,255,255,0.3)] top-0 whitespace-nowrap">Shipped</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function HeroSection7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.03)] content-stretch flex gap-[12px] h-[66.5px] items-center left-[449.73px] px-[21px] py-px rounded-[16px] top-0 w-[186.672px]" data-name="HeroSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[66.5px] left-[40px] top-[606.59px] w-[727.781px]" data-name="Container">
      <HeroSection5 />
      <HeroSection6 />
      <HeroSection7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[737.094px] left-[364.11px] top-[167.95px] w-[807.781px]" data-name="Container">
      <Container5 />
      <Container6 />
      <Heading />
      <Paragraph />
      <Container7 />
      <Container8 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[993px] overflow-clip relative shrink-0 w-full" data-name="HeroSection">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container21() {
  return <div className="bg-[rgba(152,16,250,0.08)] blur-[150px] h-[500px] rounded-[33554400px] shrink-0 w-full" data-name="Container" />;
}

function WorkShowcase() {
  return (
    <div className="h-[996.5px] relative shrink-0 w-full" data-name="WorkShowcase">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[248.25px] px-[368px] relative size-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return <div className="absolute bg-[rgba(152,16,250,0.1)] blur-[120px] left-[1136px] rounded-[33554400px] size-[400px] top-0" data-name="Container" />;
}

function Container23() {
  return <div className="absolute h-[897.5px] left-[168px] top-[292px] w-[1200px]" data-name="Container" />;
}

function FeaturedWorks() {
  return (
    <div className="h-[1317.5px] overflow-clip relative shrink-0 w-full" data-name="FeaturedWorks">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[rgba(0,146,184,0.1)] blur-[120px] left-0 rounded-[33554400px] size-[500px] top-[749.25px]" data-name="Container" />;
}

function Container26() {
  return <div className="h-[348px] shrink-0 w-full" data-name="Container" />;
}

function Container27() {
  return <div className="h-[331.25px] shrink-0 w-full" data-name="Container" />;
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[993.25px] items-start left-[128px] pt-[234px] px-[40px] top-[128px] w-[1280px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="h-[1249.25px] overflow-clip relative shrink-0 w-full" data-name="AboutSection">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[rgba(152,16,250,0.08)] blur-[100px] left-0 rounded-[33554400px] size-[400px] top-[515.5px]" data-name="Container" />;
}

function Container29() {
  return <div className="absolute bg-[rgba(0,184,219,0.08)] blur-[100px] left-[1236px] rounded-[33554400px] size-[300px] top-[731px]" data-name="Container" />;
}

function Container30() {
  return <div className="absolute h-[550px] left-[168px] top-[353px] w-[1200px]" data-name="Container" />;
}

function ProcessSection() {
  return (
    <div className="h-[1031px] overflow-clip relative shrink-0 w-full" data-name="ProcessSection">
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[rgba(152,16,250,0.1)] blur-[120px] left-[1036px] rounded-[33554400px] size-[500px] top-[449.5px]" data-name="Container" />;
}

function Container32() {
  return <div className="absolute bg-[rgba(0,184,219,0.08)] blur-[100px] left-[384px] rounded-[33554400px] size-[300px] top-[316.48px]" data-name="Container" />;
}

function Container33() {
  return <div className="absolute h-[468.5px] left-[256px] top-[353px] w-[1024px]" data-name="Container" />;
}

function ContactSection() {
  return (
    <div className="h-[949.5px] overflow-clip relative shrink-0 w-full" data-name="ContactSection">
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col h-[6536.75px] items-start relative shrink-0 w-full" data-name="Main Content">
      <HeroSection />
      <WorkShowcase />
      <FeaturedWorks />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_3_249)" id="Icon">
          <path d={svgPaths.p115b3700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 1.75V4.08333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.8333 2.91667H10.5" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.33333 9.91667V11.0833" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 10.5H1.75" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_3_249">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[28px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(0, 211, 243) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] left-0 text-[14px] text-[rgba(255,255,255,0.3)] top-0 whitespace-nowrap">
          <span className="leading-[21px]">sasha</span>
          <span className="leading-[21px] text-[rgba(194,122,255,0.5)]">nguyen</span>
        </p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[28px] relative shrink-0 w-[126.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container36 />
        <Text5 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[18px] relative shrink-0 w-[264.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(255,255,255,0.15)] top-0 whitespace-nowrap">© 2026 Sasha Nguyen. Crafted with precision.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
          <Container35 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[109px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.04)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[41px] px-[128px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-[#07060e] content-stretch flex flex-col h-[6645.75px] items-start overflow-clip relative shrink-0 w-full" data-name="Layout">
      <MainContent />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#07060e] content-stretch flex flex-col h-[993px] items-start left-0 top-0 w-[1536px]" data-name="Body">
      <Layout />
    </div>
  );
}

function GridBackground() {
  return (
    <div className="absolute h-[993px] left-0 opacity-60 top-0 w-[1551px]" data-name="GridBackground">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgGridBackground} />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_267)" id="Icon">
          <path d={svgPaths.p24941500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_3_267">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Navbar1() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[36px]" data-name="Navbar" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(0, 211, 243) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Navbar2() {
  return (
    <div className="flex-[1_0_0] h-[27px] min-h-px min-w-px relative" data-name="Navbar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] left-0 text-[18px] text-[rgba(255,255,255,0.9)] top-0 tracking-[-0.45px] whitespace-nowrap">
          <span className="leading-[27px]">sasha</span>
          <span className="leading-[27px] text-[#c27aff]">nguyen</span>
        </p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[155.969px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Navbar1 />
        <Navbar2 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[37px] left-0 rounded-[33554400px] top-0 w-[101.297px]" data-name="Link">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] left-[20px] text-[14px] text-[rgba(255,255,255,0.5)] top-[8px] tracking-[0.35px] whitespace-nowrap">Portfolio</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[37px] left-[105.3px] rounded-[33554400px] top-0 w-[83.25px]" data-name="Link">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] left-[20px] text-[14px] text-[rgba(255,255,255,0.5)] top-[8px] tracking-[0.35px] whitespace-nowrap">About</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[37px] left-[192.55px] rounded-[33554400px] top-0 w-[97.281px]" data-name="Link">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] left-[20px] text-[14px] text-[rgba(255,255,255,0.5)] top-[8px] tracking-[0.35px] whitespace-nowrap">Contact</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[37px] relative shrink-0 w-[289.828px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_3_256)" id="Icon">
          <path d={svgPaths.p3adb3b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d="M8 1.33333V2.66667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d="M8 13.3333V14.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p11bc9dc0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p191ca260} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d="M1.33333 8H2.66667" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d="M13.3333 8H14.6667" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.pe73b76f} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
          <path d={svgPaths.p1df25380} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_3_256">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] py-px relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-gradient-to-r flex-[1_0_0] from-[#9810fa] h-[41px] min-h-px min-w-px relative rounded-[33554400px] to-[#00b8db]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] left-[20px] text-[14px] text-white top-[10px] whitespace-nowrap">{`Let's Talk`}</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[41px] relative shrink-0 w-[154.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button />
        <Link6 />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center justify-between left-[168px] top-0 w-[1200px]" data-name="Navbar">
      <Link2 />
      <Container38 />
      <Container39 />
    </div>
  );
}

export default function PortfolioAndCvWebsite() {
  return (
    <div className="bg-white relative size-full" data-name="Portfolio and CV Website">
      <Body />
      <GridBackground />
      <Navbar />
    </div>
  );
}