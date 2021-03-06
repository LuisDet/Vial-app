import { v4 as uuidv4 } from 'uuid'

export default ({ app }, inject) => {
  inject('uuid', (_) => uuidv4())
}
