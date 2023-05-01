import Swordsman from '../Swordsman'

test('test correct create hero Swordsman', () => {
    let hero = new Swordsman('Bob')
    let correct = {name: 'Bob', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10}

    expect(hero).toEqual(correct)
    expect(hero instanceof Swordsman).toBe(true);
})