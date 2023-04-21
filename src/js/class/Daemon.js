import Character from './Character'

export default  class Daemon extends Character {
    constructor(name) {
        let type = 'Daemon'
        super(name, type)
    }
}