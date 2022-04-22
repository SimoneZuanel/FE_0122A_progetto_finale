export interface InvoiceForm {
  id?: number,
  data: string,
  numero: number,
  anno: number,
  importo: number,
  stato: {
      id: number,
      nome: string
  },
  cliente: {
      id: number
  }
}
