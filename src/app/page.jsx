
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <nav className="flex items-center justify-between w-full bg-black py-4 2xl:px-20 px-10">
        <Image src="/itau.png" alt="logo itau" width={44} height={44} />
        <Image src="/conquer.png" alt="logo conquer" width={136} height={42}/>
      </nav>
    <div className="flex flex-col items-center justify-center w-full">
        <div className=" bg-[url('/hero-plus.png')] bg-cover bg-center 2xl:w-[830px] 2xl:h-[394px] xl:w-[830px] xl:h-[394px] w-[328px] h-[413px] relative items-center mt-10 mb-10 bg-black rounded-3xl">  
          <div className="absolute bottom-5 left-5">
            <h1 className="text-3xl text-white font-bold">Conquer Plus</h1>
            <h3 className="text-lg text-white font-bold">Aproveite os descontos!</h3>
            </div>
        </div>
        </div>

      <div className="2xl:px-20 px-10 flex flex-col items-start justify-start w-full gap-6">
        <h2 className="text-2xl text-text-a font-bold">Garanta seu desconto</h2>
        <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12">Ir para a Conquer</Button>
        <p className="text-text-a text-3xl font-bold">São mais de 80 habilidades
        disponíveis! Descubra o poder das
        soft e hard skills na sua carreira.</p>
      </div> 
              
      <div className="2xl:px-20 px-10 w-full  mt-14 flex flex-wrap items-center justify-center 2xl:gap-32">     
        <div className="flex items-center justify-center"><Image src="/cellpho.png" alt="telefone" width={415} height={488}/></div>
        <div className="flex items-center justify-center 2xl:w-[261px] xl:w-[261px] w-auto">
          <p className="text-text-a text-[29px]  leading-7 font-normal text-start">Atualize o seu aprendizado e esteja por dentro do que está em alta.</p>
        </div>     
        
      </div>

      <div className="2xl:px-20 px-10 w-full  2xl:mt-14 mt-10 flex flex-col items-start justify-center ">
        
        <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12 mt-8 ">Comece agora</Button>        
      </div>

      <div className="2xl:px-20 px-10 w-full mb-14 mt-14 flex flex-wrap items-center justify-center gap-14">
        <div className="flex items-center justify-center">
          <Image src="/lanc.png" alt="carreira" width={364} height={387} />
        </div>
        <div className="flex items-center justify-center w-[399px] ">
            <ul className="list-disc list-inside ">
    <li className="text-black 2xl:text-lg font-bold leading-6">
    Você aprende com um conteúdo mão na massa, colocando em prática cada curso imediatamente.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Seus professores vivem o que ensinam, então você vai aprender aquilo que já foi validado no mercado
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Além do conhecimento técnico, você terá acesso a mais de 80 cursos para acelerar ainda mais o seu crescimento.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Sem enrolação! Aqui você desenvolve uma nova habilidade em dias focando no que realmente é importante.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      A rotina está agitada? Não se preocupe. Aqui você acompanha as aulas de onde, quando e quantas vezes quiser.
    </li>
    <li className="text-black 2xl:text-lg font-bold leading-6">
      Conquiste certificados de peso e coloque a sua carreira em destaque
            </li>
            
  </ul>
        </div>
      </div>
      <div className="2xl:px-20 px-10 w-full  mb-14 flex flex-col items-start justify-center ">
      
        <Button className=" bg-yellow-main text-black text-lg font-bold w-80 h-12 mt-8 ">Comece agora</Button>        
      </div>

      <footer className="flex flex-wrap items-center justify-center gap-6 w-full bg-black py-8 2xl:px-20 px-10">
        <p className="text-white text-sm ">Powered by</p>
        <Image src="/indico.png" alt="logo itau" width={81} height={25} />
        <p className="text-white text-[8px] 2xl:text-xs ">CAOS SISTEMAS DINÂMICOS E COMPLEXOS LTDA - Brasil - CNPJ 05.934.733/0001-17</p>
      </footer>
    
    </main>
  );
}
