import svgPaths from "./svg-7dhhre5duk";
import imgApprovOdyssey1 from "./4646560091fc4aab17de4d40767d992b33fbd928.png";
import imgCheckOffWhite5 from "./fbbaa6988c04316137f45b59292eef79b1052ec1.png";

function Group() {
  return (
    <div className="absolute h-[34.538px] left-[5.21px] top-[5.22px] w-[34.55px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.5498 34.5383">
        <g id="Group 1">
          <path d={svgPaths.p33f5a560} id="Ellipse 1" stroke="var(--stroke-0, #FEFDF7)" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p1157fc80} fill="var(--fill-0, #FEFDF7)" id="DD/MM/YY" />
        </g>
      </svg>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="opacity-90 relative size-full">
      <div className="absolute left-0 size-[45px] top-0" data-name="approv-odyssey 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgApprovOdyssey1} />
      </div>
      <Group />
      <div className="absolute left-[15.47px] size-[14.063px] top-[15.47px]" data-name="check-off-white 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCheckOffWhite5} />
      </div>
    </div>
  );
}