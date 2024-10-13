import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrossel from '@/components/Carrossel';

export default function Home() {
  return (
      <main className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 flex flex-col justify-between pt-[10%] space-y-12">
        <Header/>
        {/* Coluna da Esquerda com Texto */}
        <div className='flex flex-row items-center justify-center'>
          <div className="text-white w-[55%]">
            <h1 className="text-5xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Tecnologia que simplifica, resultados que transformam.</h1>
            <p className="mt-4 text-lg" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Na nossa empresa, acreditamos que a tecnologia deve ser uma aliada simples e acessível para todos os negócios.
              Desenvolvemos soluções que automatizam processos e facilitam a presença digital das empresas.
            </p>
            <a href="https://www.instagram.com/kero_2000_/" className="mt-8 inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
              Chamar no Instagram
            </a>
          </div>

          {/* Coluna da Direita com Logo */}
          <div className="flex justify-center items-center">
            <img src="/assets/imagens/2.png" alt="logo" className="w-[60%] rounded-full shadow-md"  />
          </div>
        </div>
        <div>
        <h1 className="flex justify-center mx-auto text-white w-[55%] text-5xl font-bold">Veja nossos projetos</h1>
        </div>
        <div className="flex justify-center">
          <Carrossel/>
        </div>
        <Footer/>
      </main>
      
  );
}
