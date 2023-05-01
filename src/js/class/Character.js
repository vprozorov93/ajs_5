export default class Character {
    constructor(name, type){
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
        
        if (!types.includes(type)) {
            throw new Error(`The type "${type}" is wrong`)
        }
        if (name.length < 2 || name.length > 10) {
            throw new Error(`The name "${name}" is ${name.length < 2 ? 'short':'long'}`)
        }

        this.name = name

        this.type = type
        this.health = 100
        this.level = 1
        this.attack = 10
        this.defence = 10
    }
    
    levelUp() {
        if (this.health > 0) {
            this.level ++
            this.attack *= 1.2
            this.defence *= 1.2
            this.health = 100
        } else {
            throw new Error('It is impossible to raise the level of the deceased')
        }
    }

    dealDamage(points, character) {
        if (character instanceof Character)  {
            character.health -= points * (1 - character.defence / 100)
        } else {
            throw new Error(`The ${character} is have wrong class`)
        }
    }
}

// 3. решение с конструкцией heroClassWithParam продиктовано ТЗ к Задаче, если это не правильный подход
// для решения задачи из ТЗ, то просто условие сформировао не однозначно. В целом я согласен с вами, что предложенное
// решение правильно для выполнения если использовать логику наследования и расширения базового класса

// 4. непонятно зачем нам вообще проверять типы в базовом классе, если у нас есть дочерние, создающие персонажей нужных классов, то есть
// если разработчику потребуется ввести новый тип персонажа в игре, он создаст новый класс на основе базового, но ок, сделаю как вы просите,
// а если будет лень или то будет считаться збыточным, например данного класса предусмотрен всего один NPC в игре, то он просто создаст
// такого персонажа через Character. Но ок сделаю так как просите, мыж за зачеты боремся а не за логику.

// 5. про функцию dealDamage вы видимо не поняли как реализован метод, он вызвается у того экземпляра класса кто наносит урон, а
// в контекст передаются очки урони и экземпляр класса которому наносится урон, считаю тут все реализовано верно