import Zombie from '../Zombie'

test('test correct create hero Zombie', () => {
    let hero = new Zombie('Alex')
    let correct = {name: 'Alex', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10}

    expect(hero).toEqual(correct)
    expect(hero instanceof Zombie).toBe(true);
})