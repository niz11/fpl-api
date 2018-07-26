export default interface IEntryEvent {
  bank: number,
  entry: number,
  event: number,
  event_transfers: number,
  event_transfers_cost: number,
  id: number,
  movement: string,
  overall_rank: number,
  points: number,
  points_on_bench: number,
  rank: number,
  rank_sort: number,
  targets: number[] | null,
  total_points: number,
  value: number
}