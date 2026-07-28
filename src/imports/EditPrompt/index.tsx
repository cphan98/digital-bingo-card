import svgPaths from "./svg-e4p4etj7i8";
import imgStars2 from "./b751bd5ca118583b18e63d9c0fa97b0f45dfbfd6.png";
import imgStar1 from "./5f0ff61e91a56895ad0ea4c5dcbf192954ff2a4d.png";
import imgSaveOffWhite1 from "./8ec498ebc31fdf31a14181919ab1a8990513534e.png";
import imgCheckOffWhite7 from "./fbbaa6988c04316137f45b59292eef79b1052ec1.png";

function Title() {
  return (
    <div className="h-[86px] relative shrink-0 w-[148px]" data-name="title">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid relative size-full text-center">
        <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[26px] left-[55.99px] right-[55.01px] text-[#c0b05b] text-[16px] top-px whitespace-nowrap">2026</p>
        <p className="absolute font-['Caprasimo:Regular',sans-serif] h-[60px] leading-[60px] left-[0.25px] not-italic right-[0.23px] text-[#e36559] text-[45px] top-[13px]">Bingo</p>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex gap-[8px] h-[64px] items-center justify-center pr-[-0.016px] relative shrink-0 w-full" data-name="title container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[22.75px]" data-name="stars 2">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars2} />
          </div>
        </div>
      </div>
      <Title />
      <div className="relative shrink-0 size-[22.75px]" data-name="stars 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars2} />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[18px] left-[127.98px] text-[#23617e] text-[10px] text-center top-0 whitespace-nowrap">Click any square to edit your goals</p>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[88px] items-start relative shrink-0 w-[256px]" data-name="header container">
      <TitleContainer />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Read 10 books</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[36px] size-[6px] top-[4.01px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Icon />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Run a half-marathon</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[35.6px] size-[6px] top-[4.01px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square1() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
        <Icon1 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Learn a new language</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[36.2px] size-[6px] top-[4.01px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square2() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Icon2 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Visit 3 new cities</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[35.8px] size-[6px] top-[4.01px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square3() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container3 />
        <Icon3 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Take a cooking class</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[36.4px] size-[6px] top-[4.01px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square4() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
        <Icon4 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Start a garden</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[36px] size-[6px] top-[3.61px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square5() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container5 />
        <Icon5 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Volunteer monthly</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[35.6px] size-[6px] top-[3.61px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square6() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <Icon6 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Save $5,000</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[36.2px] size-[6px] top-[3.61px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square7() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
        <Icon7 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Learn an instrument</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[35.8px] size-[6px] top-[3.61px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square8() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container8 />
        <Icon8 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Try 20 new recipes</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[36.4px] size-[6px] top-[3.61px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square9() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container9 />
        <Icon9 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Meditate daily</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[36px] size-[6px] top-[4.21px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square10() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
        <Icon10 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Write in a journal</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[35.6px] size-[6px] top-[4.21px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square11() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container11 />
        <Icon11 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Square12() {
  return (
    <div className="col-3 overflow-clip relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="absolute left-[6.95px] size-[32.5px] top-[6.95px]" data-name="star 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Take a solo trip</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[35.8px] size-[6px] top-[4.21px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square13() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
        <Icon12 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Complete a puzzle</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[36.4px] size-[6px] top-[4.21px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square14() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container13 />
        <Icon13 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Learn to knit</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[36px] size-[6px] top-[3.81px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square15() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container14 />
        <Icon14 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Host a dinner party</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[35.6px] size-[6px] top-[3.81px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square16() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container15 />
        <Icon15 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Watch 50 movies</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[36.2px] size-[6px] top-[3.81px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square17() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container16 />
        <Icon16 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Go camping</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[35.8px] size-[6px] top-[3.81px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square18() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container17 />
        <Icon17 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Do a digital detox</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[36.4px] size-[6px] top-[3.81px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square19() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container18 />
        <Icon18 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Join a book club</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[36px] size-[6px] top-[4.41px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square20() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container19 />
        <Icon19 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Make new friends</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[35.6px] size-[6px] top-[4.41px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square21() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container20 />
        <Icon20 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Try yoga</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex h-[9px] items-center justify-center left-[5px] right-[5px] top-[18.7px]" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[36.2px] size-[6px] top-[4.41px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square22() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container21 />
        <Icon21 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Visit a museum</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-[5px] right-[5px] top-[14.2px]" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[35.8px] size-[6px] top-[4.41px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square23() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container22 />
        <Icon22 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2b2b23] text-[7.5px] text-center w-full">
          <p className="leading-[9px]">Learn photography</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex h-[27px] items-center justify-center left-[5px] right-[5px] top-[9.7px]" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[36.4px] size-[6px] top-[4.41px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_54_765)" id="Icon">
          <path d="M3 5H5.25" id="Vector" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
          <path d={svgPaths.p3c129a00} id="Vector_2" stroke="var(--stroke-0, #94BEBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
        <defs>
          <clipPath id="clip0_54_765">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Square24() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[6px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container23 />
        <Icon23 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Grid() {
  return (
    <div className="gap-x-[6px] gap-y-[8px] grid grid-cols-[repeat(5,minmax(0,1fr))] grid-rows-[repeat(5,fit-content(100%))] relative shrink-0 w-full" data-name="grid">
      <Square />
      <Square1 />
      <Square2 />
      <Square3 />
      <Square4 />
      <Square5 />
      <Square6 />
      <Square7 />
      <Square8 />
      <Square9 />
      <Square10 />
      <Square11 />
      <Square12 />
      <Square13 />
      <Square14 />
      <Square15 />
      <Square16 />
      <Square17 />
      <Square18 />
      <Square19 />
      <Square20 />
      <Square21 />
      <Square22 />
      <Square23 />
      <Square24 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#657652] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[14px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[10px]" data-name="save-off-white 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSaveOffWhite1} />
        </div>
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#fefdf7] text-[10px] text-center whitespace-nowrap">Save changes</p>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="relative shrink-0" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[256px]" data-name="buttons container">
      <ButtonContainer />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#e36559] text-[10px] text-center whitespace-nowrap">Reset card</p>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="relative shrink-0" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function ButtonsContainer1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-[256px]" data-name="buttons container">
      <ButtonContainer1 />
    </div>
  );
}

function BingoContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="bingo container">
      <HeaderContainer />
      <Grid />
      <ButtonsContainer />
      <ButtonsContainer1 />
    </div>
  );
}

function App1() {
  return (
    <div className="bg-[#faf6f0] h-[606px] relative shrink-0 w-full" data-name="App">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[71.016px] pt-[59px] px-[12px] relative size-full">
          <BingoContainer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[606px] items-start left-0 top-0 w-[280px]" data-name="app">
      <App1 />
    </div>
  );
}

function PopUpTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[24px]" data-name="pop up title">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#2b2b23] text-[16px] text-center w-full">Edit Resolution</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[120px] relative rounded-[10px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Quicksand:Medium',sans-serif] font-medium leading-[26px] relative shrink-0 text-[#2b2b23] text-[16px] text-center whitespace-nowrap">Read 10 books</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#f1e8d7] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[5px] relative shrink-0">
      <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#94bebb] text-[10px] text-center whitespace-nowrap">13/35 characters</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-end left-[24px] right-[24px] top-[70px]">
      <TextArea />
      <Frame2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[14px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#c0b05b] text-[12px] text-center whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="relative shrink-0" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex h-[10px] items-center p-px relative shrink-0">
      <div className="relative shrink-0 size-[11px]" data-name="check-off-white 7">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite7} />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#657652] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[14px] py-[4px] relative size-full">
        <Frame />
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fefdf7] text-[12px] text-center whitespace-nowrap">Done</p>
      </div>
    </div>
  );
}

function ButtonContainer3() {
  return (
    <div className="relative shrink-0" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function ButtonsContainer2() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start justify-between left-[24px] right-[24px] top-[233px]" data-name="buttons container">
      <ButtonContainer2 />
      <ButtonContainer3 />
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="aspect-[20/20] overflow-clip relative shrink-0 w-full" data-name="CloseIcon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-10.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 9.66667">
            <path d={svgPaths.pc044270} id="Vector" stroke="var(--stroke-0, #C0B05B)" strokeLinecap="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-10.42%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 9.66667">
            <path d={svgPaths.p1e5ce900} id="Vector" stroke="var(--stroke-0, #C0B05B)" strokeLinecap="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ExitButton() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[219px] size-[16px] top-[13px]" data-name="exit button">
      <CloseIcon />
    </div>
  );
}

function PopUpContainer() {
  return (
    <div className="bg-white h-[285px] relative rounded-[14px] shrink-0 w-[248px]" data-name="pop up container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PopUpTitle />
        <Frame1 />
        <ButtonsContainer2 />
        <ExitButton />
      </div>
    </div>
  );
}

function PopUp() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[606px] items-center justify-center left-0 p-[16px] top-0 w-[280px]" data-name="pop up">
      <PopUpContainer />
    </div>
  );
}

export default function EditPrompt() {
  return (
    <div className="relative size-full" data-name="Edit Prompt">
      <App />
      <PopUp />
    </div>
  );
}