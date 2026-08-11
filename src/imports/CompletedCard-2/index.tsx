import svgPaths from "./svg-8d7momizm9";
import imgStars2 from "./b751bd5ca118583b18e63d9c0fa97b0f45dfbfd6.png";
import imgCircle1 from "./a5d8baab0831cfa2757657bd88f21c281c592e58.png";
import imgCheckOffWhite6 from "./fbbaa6988c04316137f45b59292eef79b1052ec1.png";
import imgStar1 from "./5f0ff61e91a56895ad0ea4c5dcbf192954ff2a4d.png";

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
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[18px] left-[128.48px] text-[#657652] text-[10px] text-center top-0 whitespace-nowrap">Click squares to mark them complete</p>
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

function Group() {
  return (
    <div className="absolute h-[38.907px] left-[3.06px] opacity-90 top-[3.06px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[1.6px] top-[1.6px]">
      <div className="absolute left-[1.6px] opacity-90 size-[42px] top-[1.6px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group />
      <div className="absolute left-[14.67px] opacity-90 size-[15.867px] top-[14.67px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Group13 />
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

function Group1() {
  return (
    <div className="absolute h-[38.907px] left-[3.66px] opacity-90 top-[3.06px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[2.2px] top-[1.6px]">
      <div className="absolute left-[2.2px] opacity-90 size-[42px] top-[1.6px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group1 />
      <div className="absolute left-[15.27px] opacity-90 size-[15.867px] top-[14.67px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square1() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
        <Group14 />
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

function Group2() {
  return (
    <div className="absolute h-[38.907px] left-[3.26px] opacity-90 top-[3.06px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[1.8px] top-[1.6px]">
      <div className="absolute left-[1.8px] opacity-90 size-[42px] top-[1.6px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group2 />
      <div className="absolute left-[14.87px] opacity-90 size-[15.867px] top-[14.67px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square2() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
        <Group15 />
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

function Group3() {
  return (
    <div className="absolute h-[38.907px] left-[3.86px] opacity-90 top-[3.06px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[2.4px] top-[1.6px]">
      <div className="absolute left-[2.4px] opacity-90 size-[42px] top-[1.6px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group3 />
      <div className="absolute left-[15.47px] opacity-90 size-[15.867px] top-[14.67px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square3() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container3 />
        <Group16 />
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

function Group4() {
  return (
    <div className="absolute h-[38.907px] left-[3.46px] opacity-90 top-[3.06px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[2px] top-[1.6px]">
      <div className="absolute left-[2px] opacity-90 size-[42px] top-[1.6px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group4 />
      <div className="absolute left-[15.07px] opacity-90 size-[15.867px] top-[14.67px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square4() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-1 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
        <Group17 />
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

function Group5() {
  return (
    <div className="absolute h-[38.907px] left-[3.06px] opacity-90 top-[3.66px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[1.6px] top-[2.2px]">
      <div className="absolute left-[1.6px] opacity-90 size-[42px] top-[2.2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group5 />
      <div className="absolute left-[14.67px] opacity-90 size-[15.867px] top-[15.27px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square5() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container5 />
        <Group18 />
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

function Group6() {
  return (
    <div className="absolute h-[38.907px] left-[3.66px] opacity-90 top-[3.66px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[2.2px] top-[2.2px]">
      <div className="absolute left-[2.2px] opacity-90 size-[42px] top-[2.2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group6 />
      <div className="absolute left-[15.27px] opacity-90 size-[15.867px] top-[15.27px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square6() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container6 />
        <Group19 />
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

function Group7() {
  return (
    <div className="absolute h-[38.907px] left-[3.26px] opacity-90 top-[3.66px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[1.8px] top-[2.2px]">
      <div className="absolute left-[1.8px] opacity-90 size-[42px] top-[2.2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group7 />
      <div className="absolute left-[14.87px] opacity-90 size-[15.867px] top-[15.27px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square7() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
        <Group20 />
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

function Group8() {
  return (
    <div className="absolute h-[38.907px] left-[3.86px] opacity-90 top-[3.66px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[2.4px] top-[2.2px]">
      <div className="absolute left-[2.4px] opacity-90 size-[42px] top-[2.2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group8 />
      <div className="absolute left-[15.47px] opacity-90 size-[15.867px] top-[15.27px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square8() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container8 />
        <Group21 />
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

function Group9() {
  return (
    <div className="absolute h-[38.907px] left-[3.46px] opacity-90 top-[3.66px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[2px] top-[2.2px]">
      <div className="absolute left-[2px] opacity-90 size-[42px] top-[2.2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group9 />
      <div className="absolute left-[15.07px] opacity-90 size-[15.867px] top-[15.27px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square9() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-2 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container9 />
        <Group22 />
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

function Group10() {
  return (
    <div className="absolute h-[38.907px] left-[3.06px] opacity-90 top-[3.26px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[1.6px] top-[1.8px]">
      <div className="absolute left-[1.6px] opacity-90 size-[42px] top-[1.8px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group10 />
      <div className="absolute left-[14.67px] opacity-90 size-[15.867px] top-[14.87px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square10() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container10 />
        <Group23 />
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

function Group11() {
  return (
    <div className="absolute h-[38.907px] left-[3.66px] opacity-90 top-[3.26px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-[2.2px] top-[1.8px]">
      <div className="absolute left-[2.2px] opacity-90 size-[42px] top-[1.8px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group11 />
      <div className="absolute left-[15.27px] opacity-90 size-[15.867px] top-[14.87px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square11() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container11 />
        <Group24 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Square12() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] col-3 justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[5px] relative size-full">
          <div className="relative shrink-0 size-[32.5px]" data-name="star 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
          </div>
        </div>
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

function Group12() {
  return (
    <div className="absolute h-[38.907px] left-[3.86px] opacity-90 top-[3.26px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[2.4px] top-[1.8px]">
      <div className="absolute left-[2.4px] opacity-90 size-[42px] top-[1.8px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group12 />
      <div className="absolute left-[15.47px] opacity-90 size-[15.867px] top-[14.87px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square13() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container12 />
        <Group25 />
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

function Group27() {
  return (
    <div className="absolute h-[38.907px] left-[3.46px] opacity-90 top-[3.26px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[2px] top-[1.8px]">
      <div className="absolute left-[2px] opacity-90 size-[42px] top-[1.8px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group27 />
      <div className="absolute left-[15.07px] opacity-90 size-[15.867px] top-[14.87px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square14() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-3 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container13 />
        <Group26 />
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

function Group29() {
  return (
    <div className="absolute h-[38.907px] left-[3.06px] opacity-90 top-[3.86px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[1.6px] top-[2.4px]">
      <div className="absolute left-[1.6px] opacity-90 size-[42px] top-[2.4px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group29 />
      <div className="absolute left-[14.67px] opacity-90 size-[15.867px] top-[15.47px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square15() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container14 />
        <Group28 />
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

function Group31() {
  return (
    <div className="absolute h-[38.907px] left-[3.66px] opacity-90 top-[3.86px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[2.2px] top-[2.4px]">
      <div className="absolute left-[2.2px] opacity-90 size-[42px] top-[2.4px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group31 />
      <div className="absolute left-[15.27px] opacity-90 size-[15.867px] top-[15.47px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square16() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container15 />
        <Group30 />
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

function Group33() {
  return (
    <div className="absolute h-[38.907px] left-[3.26px] opacity-90 top-[3.86px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[1.8px] top-[2.4px]">
      <div className="absolute left-[1.8px] opacity-90 size-[42px] top-[2.4px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group33 />
      <div className="absolute left-[14.87px] opacity-90 size-[15.867px] top-[15.47px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square17() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container16 />
        <Group32 />
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

function Group35() {
  return (
    <div className="absolute h-[38.907px] left-[3.86px] opacity-90 top-[3.86px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[2.4px] top-[2.4px]">
      <div className="absolute left-[2.4px] opacity-90 size-[42px] top-[2.4px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group35 />
      <div className="absolute left-[15.47px] opacity-90 size-[15.867px] top-[15.47px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square18() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container17 />
        <Group34 />
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

function Group37() {
  return (
    <div className="absolute h-[38.907px] left-[3.46px] opacity-90 top-[3.86px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[2px] top-[2.4px]">
      <div className="absolute left-[2px] opacity-90 size-[42px] top-[2.4px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group37 />
      <div className="absolute left-[15.07px] opacity-90 size-[15.867px] top-[15.47px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square19() {
  return (
    <div className="bg-[#fefdf7] col-5 relative rounded-[4px] row-4 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container18 />
        <Group36 />
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

function Group39() {
  return (
    <div className="absolute h-[38.907px] left-[3.06px] opacity-90 top-[3.46px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[1.6px] top-[2px]">
      <div className="absolute left-[1.6px] opacity-90 size-[42px] top-[2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group39 />
      <div className="absolute left-[14.67px] opacity-90 size-[15.867px] top-[15.07px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square20() {
  return (
    <div className="bg-[#fefdf7] col-1 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container19 />
        <Group38 />
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

function Group41() {
  return (
    <div className="absolute h-[38.907px] left-[3.66px] opacity-90 top-[3.46px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[2.2px] top-[2px]">
      <div className="absolute left-[2.2px] opacity-90 size-[42px] top-[2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group41 />
      <div className="absolute left-[15.27px] opacity-90 size-[15.867px] top-[15.07px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square21() {
  return (
    <div className="bg-[#fefdf7] col-2 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container20 />
        <Group40 />
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

function Group43() {
  return (
    <div className="absolute h-[38.907px] left-[3.26px] opacity-90 top-[3.46px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents left-[1.8px] top-[2px]">
      <div className="absolute left-[1.8px] opacity-90 size-[42px] top-[2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group43 />
      <div className="absolute left-[14.87px] opacity-90 size-[15.867px] top-[15.07px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square22() {
  return (
    <div className="bg-[#fefdf7] col-3 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container21 />
        <Group42 />
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

function Group45() {
  return (
    <div className="absolute h-[38.907px] left-[3.86px] opacity-90 top-[3.46px] w-[38.914px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="38.9073" preserveAspectRatio="none" viewBox="0 0 38.9136 38.9073" width="38.9136">
        <g id="Group 2">
          <path d={svgPaths.p31e2fa00} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p1e3d17f0} fill="#FEFDF7" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[2.4px] top-[2px]">
      <div className="absolute left-[2.4px] opacity-90 size-[42px] top-[2px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group45 />
      <div className="absolute left-[15.47px] opacity-90 size-[15.867px] top-[15.07px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Square23() {
  return (
    <div className="bg-[#fefdf7] col-4 relative rounded-[4px] row-5 shrink-0 size-[46.4px]" data-name="square">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container22 />
        <Group44 />
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph24 />
    </div>
  );
}

function Square24() {
  return (
    <div className="bg-[#fefdf7] col-1 ml-[209.6px] mt-[217.6px] relative rounded-[6px] row-1 size-[46.4px]" data-name="square">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip p-[5px] relative rounded-[inherit] size-full">
        <Container23 />
      </div>
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Group48() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[213.06px] mt-[221.06px] place-items-start relative row-1">
      <div className="col-1 h-[17.571px] ml-[218.28px] mt-[237.18px] relative row-1 w-[28.475px]">
        <div className="absolute inset-[-5.69%_-3.51%]">
          <svg className="block size-full" fill="none" height="19.5708" preserveAspectRatio="none" viewBox="0 0 30.4753 19.5708" width="30.4753">
            <path d={svgPaths.p1ea67400} id="Ellipse 1" stroke="#FEFDF7" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group47() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[211.6px] mt-[219.6px] opacity-90 place-items-start relative row-1">
      <div className="col-1 ml-[211.6px] mt-[219.6px] relative row-1 size-[42px]" data-name="circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCircle1} />
      </div>
      <Group48 />
      <div className="col-1 ml-[224.67px] mt-[232.67px] relative row-1 size-[15.867px]" data-name="check-off-white 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite6} />
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="col-5 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start leading-[0] place-items-start relative row-5 self-start shrink-0">
      <Square24 />
      <Group47 />
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
      <Group46 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g id="Icon">
          <path d="M5 8.33333H8.75" id="Vector" stroke="#657652" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p750e400} id="Vector_2" stroke="#657652" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[6px] relative size-full">
          <Icon />
          <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#657652] text-[10px] text-center whitespace-nowrap">Edit</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d={svgPaths.p1ab95b80} id="Vector" stroke="#FAF6F0" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1f22680} id="Vector_2" stroke="#FAF6F0" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 1.25V6.25" id="Vector_3" stroke="#FAF6F0" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#657652] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[6px] relative size-full">
          <Icon1 />
          <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#faf6f0] text-[10px] text-center whitespace-nowrap">Share</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[256px]" data-name="buttons container">
      <ButtonContainer />
      <ButtonContainer1 />
    </div>
  );
}

function ButtonsContainer1() {
  return <div className="content-stretch flex gap-[12px] h-[26px] items-start justify-center relative shrink-0 w-[256px]" data-name="buttons container" />;
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

function AppContainer() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col h-[606px] items-center justify-center left-0 pb-[71.016px] pt-[59px] px-[12px] right-0 top-0" data-name="app container">
      <BingoContainer />
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="aspect-[20/20] overflow-clip relative shrink-0 w-full" data-name="CloseIcon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-10.42%]">
          <svg className="block size-full" fill="none" height="9.66667" preserveAspectRatio="none" viewBox="0 0 9.66667 9.66667" width="9.66667">
            <path d={svgPaths.pc044270} id="Vector" stroke="#C0B05B" strokeLinecap="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-10.42%]">
          <svg className="block size-full" fill="none" height="9.66667" preserveAspectRatio="none" viewBox="0 0 9.66667 9.66667" width="9.66667">
            <path d={svgPaths.p1e5ce900} id="Vector" stroke="#C0B05B" strokeLinecap="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ExitButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="exit button">
      <CloseIcon />
    </div>
  );
}

function PopUpTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[200px]" data-name="pop up title">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#2b2b23] text-[16px] text-center w-full">Full House! 🎉</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-[200px]">
      <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[20px] min-w-full relative shrink-0 text-[#2b2b23] text-[12px] text-center w-[min-content]">You did it! You crushed every single resolution on your board.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d={svgPaths.p1ab95b80} id="Vector" stroke="#FAF6F0" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1f22680} id="Vector_2" stroke="#FAF6F0" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 1.25V6.25" id="Vector_3" stroke="#FAF6F0" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#657652] flex-[1_0_0] min-w-px relative rounded-[100px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[6px] relative size-full">
          <Icon2 />
          <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#faf6f0] text-[10px] text-center whitespace-nowrap">Share Victory</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function ButtonsContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[20px] relative shrink-0 w-[200px]" data-name="buttons container">
      <ButtonContainer2 />
    </div>
  );
}

function PopUpContainer() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-[248px]" data-name="pop up container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-end pb-[20px] pt-[15px] px-[25px] relative size-full">
        <ExitButton />
        <PopUpTitle />
        <Frame />
        <ButtonsContainer2 />
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

export default function CompletedCard() {
  return (
    <div className="bg-[#faf6f0] relative size-full" data-name="Completed Card">
      <AppContainer />
      <PopUp />
    </div>
  );
}