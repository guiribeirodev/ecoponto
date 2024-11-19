import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <header className="bg-green-500 h-20 w-full">
        <h1 className="text-4xl p-4 text-slate-200 font-bold text-center">
          Ecoponto em Suzano
        </h1>
      </header>
      <main className="flex flex-col gap-6 row-start-2 items-center justify-center p-4 pt-8">
        <h1 className="font-extrabold text-3xl mb-4 text-green-950 text-center">
          Encontre aqui o Ecoponto mais próximo a você em Suzano:
        </h1>

        <Card className="w-3/4 bg-bg-green bg-opacity-50">
          <CardHeader className="text-green-900">
            <CardTitle>Ecoponto Dona Benta</CardTitle>
            <CardDescription className="text-green-900 underline italic">
              <a
                href="https://maps.app.goo.gl/6KwNrvRTAAFUSoJN7"
                target="_blank"
              >
                Endereço: Estrada Takashi Kobata, 183- Jardim Dona Benta
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-green-900">
            <p>
              Materiais recebidos: Resíduos da Construção Civil (até 1 m³/dia),
              Móveis, Eletroeletrônicos, Resíduos de Poda e Jardinagem,
              Recicláveis, Óleo de cozinha, Pilhas e Baterias.
            </p>
          </CardContent>
        </Card>

        <Card className="w-3/4 bg-bg-green bg-opacity-50">
          <CardHeader>
            <CardTitle className="text-green-900">Ecoponto Boa Vista</CardTitle>
            <CardDescription className="text-green-900 underline italic">
              <a
                href="https://maps.app.goo.gl/pZCBfxPXZpemm3nX9"
                target="_blank"
              >
                Endereço: Rua Vitor Miguelino, 553 – Boa Vista
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-green-900">
            <p>
              Materiais recebidos: Resíduos da Construção Civil (até 1 m³/dia),
              Móveis, Eletroeletrônicos, Resíduos de Poda e Jardinagem e Pneus.
            </p>
          </CardContent>
        </Card>

        <Card className="w-3/4 bg-bg-green bg-opacity-50">
          <CardHeader>
            <CardTitle className="text-green-900">
              Ecoponto Parque Maria Helena
            </CardTitle>
            <CardDescription className="text-green-900 underline italic">
              <a
                href="https://maps.app.goo.gl/VdD7BDQW4KF3v2Jn8"
                target="_blank"
              >
                Endereço: Rua Antônio Francisco dos Santos, 186 – Parque Maria
                Helena
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="text-green-900">
            <p>
              Materiais recebidos: Resíduos da Construção Civil (até 1 m³/dia),
              Móveis, Eletroeletrônicos, Resíduos de Poda e Jardinagem,
              Recicláveis, Óleo de cozinha, Pilhas e Baterias.
            </p>
          </CardContent>
        </Card>

        <Card className="w-3/4 bg-bg-green bg-opacity-20">
          <CardHeader>
            <CardTitle className="text-green-700 font-bold text-2xl">
              Legenda
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <ul>
              <li>
                Resíduos da construção civil: tábuas, tijolos, telhas,
                tubulações, piso, lata de tinta vazia
              </li>
              <li>Poda e jardinagem: folhas e galhos</li>
              <li>Recicláveis: papel, plástico, vidro, metal e isopor</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <footer className=" flex row-start-3 flex-wrap justify-center mt-5 h-10 items-center  bg-green-500 opacity-80 w-full">
        <p className="text-white font-semibold">Ecoponto©2024</p>
      </footer>
    </div>
  );
}
