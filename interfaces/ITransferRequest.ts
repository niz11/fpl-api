export default interface ITransferRequest {
  confirmed: boolean,
  entry: number,
  event: number,
  freehit: boolean,
  transfers: {
    element_in: number,
    element_out: number,
    purchase_price: number,
    selling_price: number
  }[],
  wildcard: boolean
}