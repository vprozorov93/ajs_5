import Character from './Character'

export default  class Zombie extends Character {
    constructor(name) {
        let type = 'Zombie'
        super(name, type)
    }
}