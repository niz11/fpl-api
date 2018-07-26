import IEntryBase from '../interfaces/IEntryBase'
import IBootstrapDynamic from '../interfaces/IBootstrapDynamic'

export default class BootstrapDynamic {
  constructor(data: IBootstrapDynamic) {
    this.entry = data.entry
    this.player = data.player
    this.watched = data.watched
  }

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