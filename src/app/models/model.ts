export interface TotalControleLancamentoGraficoModel {
    name: string,
    value: number,
}

export interface ControleLancamentoModel {
    listaControleLancamento: ListaControleLancamento[],
    indice: number,
	tamanhoPagina: number,
	totalElements: number,
}

export interface ListaControleLancamento {
    lancamentoContaCorrenteCliente: LancamentoContaCorrenteCliente,
    dataEfetivaLancamento: string,
    dataLancamentoContaCorrenteCliente: string,
    numeroEvento: number,
    descricaoGrupoPagamento: string,
    codigoIdentificadorUnico: string,
    nomeBanco: string,
    quantidadeLancamentoRemessa: number,
    numeroRaizCNPJ: string,
    numeroSufixoCNPJ: string,
    valorLancamentoRemessa: number,
    dateLancamentoContaCorrenteCliente: number,
    dateEfetivaLancamento: number,
}

export interface LancamentoContaCorrenteCliente {
    numeroRemessaBanco: number,
    dadosAnaliticoLancamentoFinanceiroCliente?: [],
    nomeSituacaoRemessa: string,
    dadosDomicilioBancario: {
      codigoBanco: number,
      numeroAgencia: number,
      numeroContaCorrente: string,
    },
    nomeTipoOperacao: string,
}