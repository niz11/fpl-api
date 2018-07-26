import IEntryBase from './IEntryBase'

export default interface IBootstrapDynamic {
  entry: IEntryBase
  player: {
    date_of_birth: string
    dirty: boolean
    first_name: string
    gender: string
    id: number
    last_name: string
    region: number
  }
  watched: number[]
}