import Daemon from '../Daemon'

test('test correct create hero Daemon', () => {
    let hero = new Daemon('Alex')
    let correct = {name: 'Alex', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40}

    expect(hero).toEqual(correct)
    expect(hero instanceof Daemon).toBe(true);
})