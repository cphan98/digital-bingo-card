import svgPaths from "./svg-4pkr1uhnt2";
import imgStars2 from "./b751bd5ca118583b18e63d9c0fa97b0f45dfbfd6.png";
import imgStar1 from "./5f0ff61e91a56895ad0ea4c5dcbf192954ff2a4d.png";
import imgApprovOdyssey1 from "./4646560091fc4aab17de4d40767d992b33fbd928.png";
import imgCheckOffWhite5 from "./fbbaa6988c04316137f45b59292eef79b1052ec1.png";

function Heading() {
  return (
    <div className="h-[86px] relative shrink-0 w-[148px]" data-name="Heading 1">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid relative size-full text-center">
        <p className="absolute font-['Quicksand:Bold',sans-serif] font-bold leading-[26px] left-[55.99px] right-[55.01px] text-[#c0b05b] text-[16px] top-px whitespace-nowrap">2026</p>
        <p className="absolute font-['Caprasimo:Regular',sans-serif] h-[60px] leading-[60px] left-[0.25px] not-italic right-[0.23px] text-[#e36559] text-[45px] top-[13px]">Bingo</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[64px] items-center justify-center pr-[-0.016px] relative shrink-0 w-full" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[22.75px]" data-name="stars 2">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars2} />
          </div>
        </div>
      </div>
      <Heading />
      <div className="relative shrink-0 size-[22.75px]" data-name="stars 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStars2} />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Quicksand:Medium',sans-serif] font-medium leading-[18px] left-[127.98px] text-[#657652] text-[10px] text-center top-0 whitespace-nowrap">Click squares to mark them complete</p>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[88px] items-start relative shrink-0 w-[256px]" data-name="header container">
      <Container />
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

function Container1() {
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
          <Container1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container2() {
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
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container3() {
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
          <Container3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container4() {
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
          <Container4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container5() {
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
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container6() {
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
          <Container6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container7() {
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
          <Container7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container8() {
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
          <Container8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container9() {
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
          <Container9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container10() {
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
          <Container10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container11() {
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
          <Container11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container12() {
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
          <Container12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container13() {
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
          <Container13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container14() {
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
          <Container14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container15() {
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
          <Container15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container16() {
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
          <Container16 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container17() {
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
          <Container17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container18() {
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
          <Container18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container19() {
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
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container20() {
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
          <Container20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container21() {
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
          <Container21 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container22() {
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
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container23() {
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
          <Container23 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Container24() {
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
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[215.81px] mt-[223.82px] place-items-start relative row-1">
      <div className="col-1 h-[15.727px] ml-[220.34px] mt-[238.11px] relative row-1 w-[25.488px]">
        <div className="absolute inset-[-4.77%_-2.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.9883 17.2274">
            <path d={svgPaths.p1b73340} id="Ellipse 1" stroke="var(--stroke-0, #FEFDF7)" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[210.6px] mt-[218.6px] opacity-90 place-items-start relative row-1">
      <div className="col-1 ml-[210.6px] mt-[218.6px] relative row-1 size-[45px]" data-name="approv-odyssey 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgApprovOdyssey1} />
      </div>
      <Group />
      <div className="col-1 ml-[226.07px] mt-[234.07px] relative row-1 size-[14.062px]" data-name="check-off-white 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite5} />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-5 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start leading-[0] place-items-start relative row-5 self-start shrink-0">
      <Square24 />
      <Group1 />
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
      <Group2 />
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
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[100px]" />
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
        <g clipPath="url(#clip0_31_1953)" id="Icon">
          <path d={svgPaths.p1ab95b80} id="Vector" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1f22680} id="Vector_2" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 1.25V6.25" id="Vector_3" stroke="var(--stroke-0, #657652)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_31_1953">
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
      <div aria-hidden="true" className="absolute border border-[#f1e8d7] border-solid inset-0 pointer-events-none rounded-[100px]" />
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

function BingoContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="bingo container">
      <HeaderContainer />
      <Grid />
      <ButtonsContainer />
    </div>
  );
}

function App() {
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

export default function Stamping() {
  return (
    <div className="bg-[#faf6f0] content-stretch flex flex-col items-start relative size-full" data-name="Stamping">
      <App />
    </div>
  );
}