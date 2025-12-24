import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import PhotosGira from "./photos-gira";

const Gira = () => {
  return (
    <LayoutContent className="flex mt-48">
      <LayoutDesktop className="space-y-48 text-center flex flex-col items-center">
        <p className="text-xl max-w-[600px]">
          Acreditamos que nenhum supermercadista precisa enfrentar os desafios
          do setor sozinho.
        </p>
        <PhotosGira />
        <div className="space-y-8 max-w-3xl">
          <p className="text-xl ">
            No GIRA, criamos um ambiente seguro onde estratégias, experiências e
            resultados são compartilhados com quem vive o mesmo jogo.
          </p>
          <p className="text-xl">
            Aqui, construímos soluções juntos com troca real, apoio mútuo e
            aprendizados práticos que aceleram a evolução de todos os
            envolvidos.
          </p>
        </div>
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default Gira;
