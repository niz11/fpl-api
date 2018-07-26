import request from 'request-promise-native'
import IElement from '../interfaces/IElement'
import Element from '../models/Element'
import options from '../options'

export default async function fetchElement(elementId: number): Promise<Element> {
  try {
    const data: IElement = await request(`https://fantasy.premierleague.com/drf/element-summary/${elementId}`, options)

    return new Element(data)
  } catch (error) {
    throw error
  }
}