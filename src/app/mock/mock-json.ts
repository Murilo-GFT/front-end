import { ControleLancamentoModel, TotalControleLancamentoGraficoModel } from '../models/model';

export const totalControleLancamento: TotalControleLancamentoGraficoModel[] = [
    { name: 'Quantidade de lançamentos', value: 608 },
    { name: 'Quantidade de remessas', value: 39 },
    { name: 'Valor dos lançamentos', value: 473320.37 },
]

export const controleLancamento: ControleLancamentoModel = {
    listaControleLancamento: [
        {
            lancamentoContaCorrenteCliente: {
            numeroRemessaBanco: 64320236054,
            nomeSituacaoRemessa: "Pago",
            dadosDomicilioBancario: {
              codigoBanco: 123,
              numeroAgencia: 1,
              numeroContaCorrente: "00000000065470",
            },
            nomeTipoOperacao: "regular"
          },
          dataEfetivaLancamento: "03/06/2016",
          dataLancamentoContaCorrenteCliente: "03/06/2016",
          numeroEvento: 42236790,
          descricaoGrupoPagamento: "LA-56",
          codigoIdentificadorUnico: "1",
          nomeBanco: "BANCO ABCD S.A.             ",
          quantidadeLancamentoRemessa: 22,
          numeroRaizCNPJ: "12996721",
          numeroSufixoCNPJ: "1597",
          valorLancamentoRemessa: 11499.1,
          dateLancamentoContaCorrenteCliente: 1464922800000,
          dateEfetivaLancamento: 1464922800000
        },
        {
          lancamentoContaCorrenteCliente: {
            numeroRemessaBanco: 64320626054,
            dadosAnaliticoLancamentoFinanceiroCliente: [],
            nomeSituacaoRemessa: "Pago",
            dadosDomicilioBancario: {
              codigoBanco: 123,
              numeroAgencia: 1,
              numeroContaCorrente: "00000000065470",
            },
            nomeTipoOperacao: "regular"
          },
          dataEfetivaLancamento: "02/06/2016",
          dataLancamentoContaCorrenteCliente: "02/06/2016",
          numeroEvento: 42592397,
          descricaoGrupoPagamento: "LA-56",
          codigoIdentificadorUnico: "25",
          nomeBanco: "BANCO ABCD S.A.             ",
          quantidadeLancamentoRemessa: 2,
          numeroRaizCNPJ: "12996721",
          numeroSufixoCNPJ: "1597",
          valorLancamentoRemessa: 1960,
          dateLancamentoContaCorrenteCliente: 1464836400000,
          dateEfetivaLancamento: 1464836400000
        }
      ],
      indice: 1,
      tamanhoPagina: 25,
      totalElements: 39,
}