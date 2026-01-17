import Image from "next/image";
import {
  LayoutContent,
  LayoutDesktop,
} from "@/components/layout/layout-content";
import FaqItem from "@/components/home/faq-item";
import Title from "../common/title";

const QUESTIONS = [
  {
    id: 1,
    question: "Como funciona o processo de consultoria da Impacte Brasil?",
    response:
      "Realizamos um diagnóstico inicial para entender os desafios do seu supermercado, elaboramos um plano estratégico personalizado e acompanhamos a implementação das soluções, garantindo resultados concretos e sustentáveis.",
  },
  {
    id: 2,
    question: "Quais áreas do supermercado vocês conseguem ajudar a melhorar?",
    response:
      "Atuamos em gestão de pessoas, processos fiscais, logística, estoque, atendimento ao cliente, liderança, e planejamento estratégico, sempre adaptando nossas soluções às necessidades específicas do cliente.",
  },
  {
    id: 3,
    question: "Quanto tempo leva para começar a ver resultados?",
    response:
      "Os primeiros resultados podem ser percebidos logo nas primeiras semanas após a implementação, especialmente em áreas como organização de processos e melhorias operacionais. Resultados estratégicos mais amplos surgem no médio prazo, com acompanhamento contínuo.",
  },
  {
    id: 4,
    question: "O que diferencia a Impacte Brasil de outras consultorias?",
    response:
      "Além de oferecer soluções personalizadas, fazemos parte de um ecossistema focado no varejo. Nossos clientes têm acesso a uma comunidade de líderes supermercadistas, troca de experiências e ferramentas inovadoras que promovem evolução contínua.",
  },
  {
    id: 5,
    question: "Quais são os custos e como funciona o pagamento?",
    response:
      "Os custos variam de acordo com o tamanho do projeto e as soluções necessárias. Oferecemos planos personalizados e opções flexíveis de pagamento para atender às demandas do cliente sem comprometer seu fluxo de caixa.",
  },
];

type QuestionType = {
  id: number;
  question: string;
  response?: string;
};

console.log(QUESTIONS);

const Faq = () => {
  return (
    <LayoutContent>
      <div className="flex flex-col justify-center items-center space-y-8 mt-48 mb-48">
        <Image
          src="/logofooter.png"
          width={300}
          height={39}
          alt="logo"
          className="sm:w-[300px] sm:h-[39px] w-[200px] h-[28px]"
        />
        <Title text="Perguntas frequentes" color=""/>
        <LayoutDesktop className="flex flex-col gap-5 w-full max-w-5xl">
          {QUESTIONS.map(({ id, question, response }: QuestionType) => (
            <FaqItem key={id} question={question} response={response} />
          ))}
        </LayoutDesktop>
      </div>
    </LayoutContent>
  );
};

export default Faq;
