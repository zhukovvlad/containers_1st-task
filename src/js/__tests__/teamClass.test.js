import Team from '../teamClass';

test.each([
  ['good case for add method', ['Zhukovvlad', 'Ann', 'Eva'], ['Zhukovvlad', 'Ann', 'Eva']],
])(
  ('should calculate %s'),
  (userCase, name, expected) => {
    const team = new Team();
    name.forEach((element) => {
      team.add(element);
    });
    const result = Array.from(team.members);

    expect(result).toEqual(expected);
  },
);

test.each([
  ['good case for addAll method', ['Zhukovvlad', 'Ann', 'Eva', 'Zhukovvlad'], ['Zhukovvlad', 'Ann', 'Eva']],
])(
  ('should calculate %s'),
  (userCase, name, expected) => {
    const team = new Team();
    team.addAll(...name);
    const result = Array.from(team.members);

    expect(result).toEqual(expected);
  },
);

test.each([
  ['good case for toArray method', ['Zhukovvlad', 'Ann', 'Eva', 'Zhukovvlad'], ['Zhukovvlad', 'Ann', 'Eva']],
])(
  ('should calculate %s'),
  (userCase, name, expected) => {
    const team = new Team();
    team.addAll(...name);
    const result = team.toArray();
    expect(result).toEqual(expected);
  },
);

test.each([
  ['bad case', ['Zhukovvlad', 'Ann', 'Eva', 'Zhukovvlad'], 'This character is already in the team.'],
])('trying to test errors', (errorCase, name, expected) => {
  expect(() => {
    const team = new Team();
    name.forEach((element) => {
      team.add(element);
    });
  }).toThrow(expected);
//  expect(Character.bind(this, name, type)).toThrow(expected);
});
