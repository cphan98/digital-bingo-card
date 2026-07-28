import svgPaths from "./svg-7texoe7gqv";
import imgStars2 from "./b751bd5ca118583b18e63d9c0fa97b0f45dfbfd6.png";
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Square() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Square1() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container1 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Square2() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-3 justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container2 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Square3() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container3 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Square4() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[4px] row-1 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container4 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Square5() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container5 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Square6() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container6 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Square7() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-3 justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container7 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
    </div>
  );
}

function Square8() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container8 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
    </div>
  );
}

function Square9() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[4px] row-2 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container9 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph11 />
    </div>
  );
}

function Square10() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container10 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
    </div>
  );
}

function Square11() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container11 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph13 />
    </div>
  );
}

function Square13() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container12 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph14 />
    </div>
  );
}

function Square14() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[4px] row-3 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container13 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph15 />
    </div>
  );
}

function Square15() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container14 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph16 />
    </div>
  );
}

function Square16() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container15 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph17 />
    </div>
  );
}

function Square17() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-3 justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container16 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph18 />
    </div>
  );
}

function Square18() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container17 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph19 />
    </div>
  );
}

function Square19() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[4px] row-4 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container18 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
    </div>
  );
}

function Square20() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container19 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph21 />
    </div>
  );
}

function Square21() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container20 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph22 />
    </div>
  );
}

function Square22() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-3 justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container21 />
        </div>
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
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph23 />
    </div>
  );
}

function Square23() {
  return (
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[4px] row-5 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container22 />
        </div>
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
    <div className="aspect-[46.400001525878906/46.400001525878906] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[6px] row-5 shrink-0" data-name="square">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[5px] relative size-full">
          <Container23 />
        </div>
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d="M5 8.33333H8.75" id="Vector" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p750e400} id="Vector_2" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[14px] py-[4px] relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#657652] text-[10px] text-center whitespace-nowrap">Edit</p>
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

function Icon1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_60_2126)" id="Icon">
          <path d={svgPaths.p1ab95b80} id="Vector" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1f22680} id="Vector_2" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 1.25V6.25" id="Vector_3" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_60_2126">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[4px] relative size-full">
        <Icon1 />
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#657652] text-[10px] text-center whitespace-nowrap">Export</p>
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

function ButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-[256px]" data-name="buttons container">
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
    <div className="bg-[#faf6f0] h-[606px] relative shrink-0 w-full" data-name="app container">
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
      <AppContainer />
    </div>
  );
}

function PopUpTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[24px]" data-name="pop up title">
      <p className="[word-break:break-word] font-['Quicksand:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#2b2b23] text-[16px] text-center w-full">Export Bingo Card</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[18px] left-[45.11px] top-0 w-[27.672px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[18px] left-0 text-[#c0b05b] text-[12px] top-[-1px] whitespace-nowrap">2026</p>
    </div>
  );
}

function ImageSparkle() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Image (sparkle)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars2} />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-[81.906px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Caprasimo:Regular',sans-serif] leading-[40px] left-0 not-italic text-[#e36559] text-[28px] top-0 whitespace-nowrap">Bingo</p>
      </div>
    </div>
  );
}

function ImageSparkle1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Image (sparkle)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars2} />
    </div>
  );
}

function TitleContainer1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[40px] items-center justify-center left-0 top-[14px] w-[117.906px]" data-name="title container">
      <ImageSparkle />
      <Heading />
      <ImageSparkle1 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[54px] relative shrink-0 w-[117.906px]" data-name="header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph25 />
        <TitleContainer1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Read 10 books</p>
      </div>
    </div>
  );
}

function Square25() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[3px] row-1 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Run a half-marathon</p>
      </div>
    </div>
  );
}

function Square26() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[3px] row-1 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Learn a new language</p>
      </div>
    </div>
  );
}

function Square27() {
  return (
    <div className="bg-[#fefdf7] col-3 content-stretch flex items-center justify-center p-[4px] relative rounded-[3px] row-1 shrink-0 size-[32px]" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Visit 3 new cities</p>
      </div>
    </div>
  );
}

function Square28() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[3px] row-1 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Take a cooking class</p>
      </div>
    </div>
  );
}

function Square29() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[3px] row-1 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Start a garden</p>
      </div>
    </div>
  );
}

function Square30() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[3px] row-2 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Volunteer monthly</p>
      </div>
    </div>
  );
}

function Square31() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[3px] row-2 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Save $5,000</p>
      </div>
    </div>
  );
}

function Square32() {
  return (
    <div className="bg-[#fefdf7] col-3 content-stretch flex items-center justify-center p-[4px] relative rounded-[3px] row-2 shrink-0 size-[32px]" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Learn an instrument</p>
      </div>
    </div>
  );
}

function Square33() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[3px] row-2 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text8 />
        </div>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Try 20 new recipes</p>
      </div>
    </div>
  );
}

function Square34() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[3px] row-2 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Meditate daily</p>
      </div>
    </div>
  );
}

function Square35() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[3px] row-3 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Write in a journal</p>
      </div>
    </div>
  );
}

function Square36() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[3px] row-3 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text11 />
        </div>
      </div>
    </div>
  );
}

function ImageStar() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Image (star)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStar1} />
    </div>
  );
}

function Square37() {
  return (
    <div className="col-3 content-stretch flex items-center justify-center p-[3px] relative rounded-[3px] row-3 shrink-0 size-[32px]" data-name="square">
      <ImageStar />
    </div>
  );
}

function Text12() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Take a solo trip</p>
      </div>
    </div>
  );
}

function Square38() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[3px] row-3 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text12 />
        </div>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Complete a puzzle</p>
      </div>
    </div>
  );
}

function Square39() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[3px] row-3 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Learn to knit</p>
      </div>
    </div>
  );
}

function Square40() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[3px] row-4 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text14 />
        </div>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Host a dinner party</p>
      </div>
    </div>
  );
}

function Square41() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[3px] row-4 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Watch 50 movies</p>
      </div>
    </div>
  );
}

function Square42() {
  return (
    <div className="bg-[#fefdf7] col-3 content-stretch flex items-center justify-center p-[4px] relative rounded-[3px] row-4 shrink-0 size-[32px]" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Text16 />
    </div>
  );
}

function Text17() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Go camping</p>
      </div>
    </div>
  );
}

function Square43() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[3px] row-4 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Do a digital detox</p>
      </div>
    </div>
  );
}

function Square44() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[3px] row-4 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text18 />
        </div>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Join a book club</p>
      </div>
    </div>
  );
}

function Square45() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-1 justify-self-stretch relative rounded-[3px] row-5 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Make new friends</p>
      </div>
    </div>
  );
}

function Square46() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-2 justify-self-stretch relative rounded-[3px] row-5 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text20 />
        </div>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Try yoga</p>
      </div>
    </div>
  );
}

function Square47() {
  return (
    <div className="bg-[#fefdf7] col-3 content-stretch flex items-center justify-center p-[4px] relative rounded-[3px] row-5 shrink-0 size-[32px]" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Visit a museum</p>
      </div>
    </div>
  );
}

function Square48() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-4 justify-self-stretch relative rounded-[3px] row-5 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text22 />
        </div>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[5.5px] relative shrink-0 text-[#2b2b23] text-[4.5px] text-center w-full">Learn photography</p>
      </div>
    </div>
  );
}

function Square49() {
  return (
    <div className="aspect-[32/32] bg-[#fefdf7] col-5 justify-self-stretch relative rounded-[3px] row-5 shrink-0" data-name="square">
      <div aria-hidden className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Grid1() {
  return (
    <div className="relative shrink-0" data-name="grid">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[5px] gap-y-[5px] grid-cols-[repeat(5,fit-content(100%))] grid-rows-[repeat(5,fit-content(100%))] inline-grid relative size-full">
        <Square25 />
        <Square26 />
        <Square27 />
        <Square28 />
        <Square29 />
        <Square30 />
        <Square31 />
        <Square32 />
        <Square33 />
        <Square34 />
        <Square35 />
        <Square36 />
        <Square37 />
        <Square38 />
        <Square39 />
        <Square40 />
        <Square41 />
        <Square42 />
        <Square43 />
        <Square44 />
        <Square45 />
        <Square46 />
        <Square47 />
        <Square48 />
        <Square49 />
      </div>
    </div>
  );
}

function Preview() {
  return (
    <div className="absolute bg-[#faf6f0] content-stretch flex flex-col gap-[16px] h-[298px] items-center justify-center left-[24px] p-[24px] right-[24px] top-[70px]" data-name="preview">
      <Header />
      <Grid1 />
    </div>
  );
}

function ImageIcon() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="ImageIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="ImageIcon">
          <path d={svgPaths.p2836a300} id="Vector" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.986979" />
          <path d={svgPaths.p28099400} id="Vector_2" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.986979" />
          <path d={svgPaths.p17de5ec0} id="Vector_3" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.986979" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#657652] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[14px] py-[4px] relative size-full">
        <ImageIcon />
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fefdf7] text-[12px] text-center whitespace-nowrap">As image</p>
      </div>
    </div>
  );
}

function ButtonContainer2() {
  return (
    <div className="relative shrink-0" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function PdfIcon() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="PdfIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 18">
        <g id="PdfIcon">
          <path d={svgPaths.p1be04d00} id="Vector" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.898438" />
          <path d="M7 3.94629V6.97852H10" id="Vector_2" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.898438" />
          <path d="M8 9.50537H4" id="Vector_3" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.898438" />
          <path d="M8 11.5269H4" id="Vector_4" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.898438" />
          <path d="M5 7.48389H4.5H4" id="Vector_5" stroke="var(--stroke-0, #FEFDF7)" strokeWidth="0.898438" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#657652] relative rounded-[100px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[14px] py-[4px] relative size-full">
        <PdfIcon />
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#fefdf7] text-[12px] text-center whitespace-nowrap">As PDF</p>
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
    <div className="absolute content-stretch flex h-[28px] items-start justify-between left-[24px] right-[24px] top-[388px]" data-name="buttons container">
      <ButtonContainer2 />
      <ButtonContainer3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[14px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#c0b05b] text-[12px] text-center whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function ButtonContainer4() {
  return (
    <div className="relative shrink-0" data-name="button container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function ButtonsContainer3() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start justify-center left-[24px] right-[24px] top-[436px]" data-name="buttons container">
      <ButtonContainer4 />
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
    <div className="bg-white flex-[1_0_0] h-[488px] min-w-px relative rounded-[14px]" data-name="pop up container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <PopUpTitle />
        <Preview />
        <ButtonsContainer2 />
        <ButtonsContainer3 />
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

export default function Export() {
  return (
    <div className="relative size-full" data-name="Export">
      <App />
      <PopUp />
    </div>
  );
}