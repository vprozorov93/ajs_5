export default class Character {
    constructor(name, type){
        let heroClassWithParam = {
            Bowerman: {attack: 25, defence: 25},
            Swordsman: {attack: 40, defence: 10},
            Magician: {attack: 10, defence: 40},
            Daemon: {attack: 10, defence: 40},
            Undead: {attack: 25, defence: 25},
            Zombie: {attack: 40, defence: 10}
        }

        if (name.length < 2 || name.length > 10) {
            // let param = 
            throw new Error(`The name "${name}" is ${name.length < 2 ? 'short':'long'}`)
        }

        this.name = name
        let heroParams = heroClassWithParam[type]

        if (heroParams){
            this.type = type
            this.health = 100
            this.level = 1
            this.attack = heroParams.attack
            this.defence = heroParams.defence
        } else {
            throw new Error(`The type "${type}" is wrong`)
        }
        
    }
    
    levelUp =  function () {
        if (this.health > 0) {
            this.level ++
            this.attack *= 1.2
            this.defence *= 1.2
            this.health = 100
        } else {
            throw new Error('It is impossible to raise the level of the deceased')
        }
    }

    dealDamage = function (points, character) {
        if (character instanceof Character)  {
            character.health -= points * (1 - character.defence / 100)
        } else {
            throw new Error(`The ${character} is have wrong class`)
        }
    }
}