import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FAQList } from "./temp/FAQAccordion";
import { Chevron } from "@components/icons/chevron";
import { Triangle } from "@components/icons/triangle";
import { Plus } from "@components/icons/plus";
import { Devide } from "@components/icons/devide";

const AccordionItem = ({
  header,
  ...rest
}: {
  header: React.ReactNode;
  [key: string]: any;
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <Chevron
          className={`old-lg:ml-auto transition-transform duration-200 ease-out stroke-secondary-400 h-8 w-8 flex-shrink-0 ${
            isEnter && "rotate-180"
          }`}
        />
      </>
    )}
    className="border-b border-neutral-300/25 py-3"
    buttonProps={{
      className: "flex justify-between w-full text-left",
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out pt-[10px]",
    }}
    panelProps={{
      className: "text-base font-normal leading-normal max-w-[800px]",
    }}
  />
);

export function FAQ() {
  return (
    <section className="flex flex-col gap-10 px-[14px] py-8 pb-6 old-lg:px-[103px] old-lg:py-12 items-center">
      <div className="relative flex flex-col text-neutral-900 text-[28px] old-lg:text-5xl font-bold leading-9 old-lg:leading-[48px] gap-2 old-lg:gap-[14px] text-center pt-5 pb-[10px]">
        <h1 className="relative flex flex-row gap-2 old-lg:gap-3">
          Pertanyaan{" "}
          <span className="relative -top-[6px] text-2xl old-lg:text-[32px] leading-10">
            yang
          </span>{" "}
          <span className="text-[#3c6ff2]">Sering</span>
        </h1>
        <h1>Diajukan</h1>
        <Triangle className="absolute top-0 left-[125px] w-6 h-6 old-lg:-top-2 old-lg:left-56 fill-transparent old-lg:w-8 old-lg:h-8" />
        <Plus className="absolute left-8 bottom-0 w-9 h-9 old-lg:bottom-2 old-lg:left-20 old-lg:w-12 old-lg:h-12" />
        <Devide className="absolute w-6 h-6 right-9 bottom-2 old-lg:bottom-2 old-lg:right-24 old-lg:w-10 old-lg:h-10" />
      </div>

      <div className="old-lg:mt-8 w-full text-neutral-900">
        <Accordion className="w-full">
          <div className="gap-3">
            {FAQList.map(({ header, content }, i) => (
              <AccordionItem
                header={
                  <p className="text-lg old-lg:text-xl font-bold leading-7">
                    {header}
                  </p>
                }
                key={i}
              >
                {content}
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </div>
    </section>
  );
}
