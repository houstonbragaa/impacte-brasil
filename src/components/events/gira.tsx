import Glow from "../common/glow";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import PhotosGira from "./photos-gira";

const Gira = () => {
  return (
    <LayoutContent className="flex mt-48 relative">
      <Glow className="bottom-50 -left-50" />
      <LayoutDesktop className="md:space-y-48 space-y-24 text-center flex flex-col items-center">
        <p className="text-xl max-w-[600px]">
          Acreditamos que nenhum supermercadista precisa enfrentar os desafios
          do setor sozinho.
        </p>
        <PhotosGira />
        <div className="space-y-8 max-w-3xl relative">
        <Glow className="-bottom-40 -right-30" />
          <p className="md:text-xl text-sm">
            No GIRA, criamos um ambiente seguro onde estratégias, experiências e
            resultados são compartilhados com quem vive o mesmo jogo.
          </p>
          <p className="md:text-xl text-sm">
            Aqui, construímos soluções juntos com troca real, apoio mútuo e
            aprendizados práticos que aceleram a evolução de todos os
            envolvidos.
          </p>
        </div>
      </LayoutDesktop>
      <Glow className="-bottom-220 -left-30" />
    </LayoutContent>
  );
};

export default Gira;
