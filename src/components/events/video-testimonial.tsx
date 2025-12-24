import Button from "../common/button";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";

const VideoTestemonial = () => {
  return (
    <LayoutContent>
      <LayoutDesktop className="flex flex-col gap-12 items-center mt-48">
        <div className="w-3xl h-100 bg-zinc-300 rounded-4xl"></div>
        <p className="text-xl max-w-3xl text-center">
          Mais do que comunidade: um ecossistema vivo, com gente que fala a
          mesma língua, sonha grande e age junto.
        </p>
        <Button text='Conhecer melhor nossa comunidade'/>
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default VideoTestemonial;
