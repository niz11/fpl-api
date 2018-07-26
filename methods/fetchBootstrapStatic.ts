import request from 'request-promise-native'
import IBootstrapStatic from '../interfaces/IBootstrapStatic'
import BootstrapStatic from '../models/BootstrapStatic'
import options from '../options'

/**
 * Fetch static content for FPL
 */
export default async function fetchBootstrapStatic() : Promise<BootstrapStatic> {
  try {
    const data: IBootstrapStatic = await request('https://fantasy.premierleague.com/drf/bootstrap-static', options)
  
    return new BootstrapStatic(data)
  } catch (error) {
    throw error
  }
}