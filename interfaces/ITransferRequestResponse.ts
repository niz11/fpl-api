export default interface ITransferRequestResponse {
  freehit: boolean,
  spent_points: number,
  transfers: {
    cost: number,
    element_in: number,
    element_out: number,
    purchase_price: number,
    selling_price: number
  }[],
  wildcard: boolean
}