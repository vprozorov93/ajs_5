import { experiments } from 'webpack';
import Character, {Bowerman, Swordsman, Magician, Daemon, Undead, Zombie} from '../index'

test.each([
    [new Character('Alex', 'Bowerman'), {name: 'Alex', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25}],
    [new Character('Bob', 'Swordsman'), {name: 'Bob', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}],
    [new Character('Alex', 'Magician'), {name: 'Alex', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
    [new Character('Alex', 'Daemon'), {name: 'Alex', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40}],
    [new Character('Alex', 'Undead'), {name: 'Alex', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}],
    [new Character('Alex', 'Zombie'), {name: 'Alex', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}]
]
)(
    'test %o on correct create hero',
    (data, expected) => {
      expect(data instanceof Character).toBe(true);
      expect(data.name).toBe(expected.name);
      expect(data.type).toBe(expected.type);
      expect(data.health).toBe(expected.health);
      expect(data.level).toBe(expected.level);
      expect(data.attack).toBe(expected.attack);
      expect(data.defence).toBe(expected.defence);
    },
)

test.each([
    [new Bowerman('Alex', 'Bowerman'), {class: Bowerman, name: 'Alex', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25}],
    [new Swordsman('Bob', 'Swordsman'), {class: Swordsman, name: 'Bob', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}],
    [new Magician('Alex', 'Magician'), {class: Magician, name: 'Alex', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}],
    [new Daemon('Alex', 'Daemon'), {class: Daemon, name: 'Alex', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40}],
    [new Undead('Alex', 'Undead'), {class: Undead, name: 'Alex', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}],
    [new Zombie('Alex', 'Zombie'), {class: Zombie, name: 'Alex', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}]
]
)(
    'test %o on correct create hero',
    (data, expected) => {
      expect(data instanceof expected.class).toBe(true);
      expect(data.name).toBe(expected.name);
      expect(data.type).toBe(expected.type);
      expect(data.health).toBe(expected.health);
      expect(data.level).toBe(expected.level);
      expect(data.attack).toBe(expected.attack);
      expect(data.defence).toBe(expected.defence);
    },
)
test('test name lenght < 2', () => {
    try {
        new Character('A', 'Bowerman')
    } catch (e) {
        expect(e.message).toBe(`The name "A" is short`)
    }
})

test('test name lenght > 10', () => {
    try {
        new Character('AlexAlexAlex', 'Bowerman')
    } catch (e) {
        expect(e.message).toBe(`The name "AlexAlexAlex" is long`)
    }
})

test('test wrong character type', () => {
    try {
        new Character('Alex', 'Bowerma')
    } catch (e) {
        expect(e.message).toBe(`The type "Bowerma" is wrong`)
    }
})

test('test levelUp method of class Character', () => {
    let hero = new Character('Alex', 'Bowerman')
    hero.levelUp()

    expect(hero.level).toBe(2)
    expect(hero.health).toBe(100)
    expect(hero.attack).toBe(30)
    expect(hero.defence).toBe(30)

})

test('test levelUp method of class Character for dead character', () => {
    let hero = new Character('Alex', 'Bowerman')
    hero.health = 0
    try {
        hero.levelUp()
    } catch (e) {
        expect(e.message).toBe('It is impossible to raise the level of the deceased')
    }
})

test('test dealDemage method of class Character', () => {
    let hero1 = new Character('Alex', 'Bowerman')
    let hero2 = new Character('Bob', 'Swordsman')

    hero1.dealDamage(100, hero2)

    expect(hero2.health).toBe(10)
})

test('test dealDemage method of wrong class', () => {
    let hero1 = new Character('Alex', 'Bowerman')
    let hero2 = {name: 1}

    try {
        hero1.dealDamage(100, hero2)
    } catch (e) {
        expect(e.message).toBe(`The ${hero2} is have wrong class`)
    }
})

