import { mutateViewingLimit, mutateViewingMode, mutateViewingSearch } from './ViewingFunctions'
import { ViewingMode } from '../enums/ViewingMode'

export const setupInitialState = () => {
    mutateViewingLimit(25)
    mutateViewingMode(ViewingMode.Light)
    mutateViewingSearch('')
}
