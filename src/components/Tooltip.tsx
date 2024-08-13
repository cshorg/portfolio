import { IconArrowTriangleUpFill } from "@irsyadadl/paranoid"

interface TooltipProps {
  children: React.ReactNode
  label: string
  position: "top" | "bottom" | "left" | "right"
}

const Tooltip: React.FC<TooltipProps> = ({ children, label, position }) => {
  return (
    <div className="relative inline-block cursor-pointer group overflow">
      {children}
      <span
        className={`${
          position === "top"
            ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)]"
            : position === "bottom"
            ? "left-1/2 -translate-x-1/2 top-[calc(100%+10px)]"
            : position === "left"
            ? "top-1/2 -translate-y-1/2 right-[calc(100%+10px)]"
            : position === "right"
            ? "top-1/2 -translate-y-1/2 left-[calc(100%+10px)]"
            : ""
        } absolute hidden z-20 px-4 py-2 font-semibold text-xs rounded-lg group-hover:inline-block dark:text-zinc-950 text-zinc-50 bg-zinc-900 dark:bg-zinc-50 whitespace-nowrap shadow-[0px_0px_20px_0px_rgb(0,0,0,0.20)]`}
      >
        <span
          className={`absolute ${
            position === "top"
              ? "left-1/2 -translate-x-1/2 top-[20px]"
              : position === "bottom"
              ? "left-1/2 -translate-x-1/2 bottom-[20px]"
              : position === "left"
              ? "top-1/2 -translate-y-1/2 left-[86%]"
              : position === "right"
              ? "top-1/2 -translate-y-1/2 right-[86%]"
              : ""
          }`}
        >
          <IconArrowTriangleUpFill
            className={`${
              position === "top"
                ? "rotate-180"
                : position === "bottom"
                ? ""
                : position === "left"
                ? "rotate-90"
                : position === "right"
                ? "rotate-[270deg]"
                : ""
            } text-zinc-900 dark:text-zinc-50`}
          />
        </span>
        {label}
      </span>
    </div>
  )
}

export default Tooltip
