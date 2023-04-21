import Character from './Character'

export default  class Undead extends Character {
    constructor(name) {
        let type = 'Undead'
        super(name, type)
    }
}