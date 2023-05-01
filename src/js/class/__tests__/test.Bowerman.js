import Bowerman from '../Bowerman'


test('test correct create hero Bowerman', () => {
    let hero = new Bowerman('Alex')
    let correct = {name: 'Alex', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25}

    expect(hero).toEqual(correct)
    expect(hero instanceof Bowerman).toBe(true);
})