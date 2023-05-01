import Magician from '../Magician'

test('test correct create hero Magician', () => {
    let hero = new Magician('Alex')
    let correct = {name: 'Alex', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40}

    expect(hero).toEqual(correct)
    expect(hero instanceof Magician).toBe(true);
})