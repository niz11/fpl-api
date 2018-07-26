import IEntryLeagues from "./IEntryLeagues";
import IEntryBase from "./IEntryBase";

export default interface IEntry {
  entry: IEntryBase,
  leagues: IEntryLeagues
}