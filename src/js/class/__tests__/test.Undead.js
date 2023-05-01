import Undead from '../Undead'

test('test correct create hero Undead', () => {
    let hero = new Undead('Alex')
    let correct = {name: 'Alex', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25}

    expect(hero).toEqual(correct)
    expect(hero instanceof Undead).toBe(true);
})