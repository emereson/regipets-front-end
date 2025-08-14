interface Props {
  title: string;
}

export default function BannerPages({ title }: Props) {
  return (
    <section className="relative   w-screen max-h-[1000px] pt-[200px] pb-[150px] bg-blue flex flex-col   overflow-hidden font-[SegoeUiBlack]">
      <div
        className="absolute top-0 left-0  w-full h-full opacity-10"
        style={{
          backgroundImage: "url('/identidadVisual/backBlanco-2-01.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "70%",
          backgroundPosition: "top left",
        }}
      ></div>
      <h1 className="m-auto font-[SegoeUiBlack] italic text-white text-title ">
        {title}
      </h1>
    </section>
  );
}
