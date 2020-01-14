// TODO: write your code here
import Team from './teamClass';

const dreamTeam = new Team();

dreamTeam.add('Zhukovvlad');
dreamTeam.add('Ann');
dreamTeam.add('Eva');


const newCommand = new Team();
newCommand.addAll('Zhukovvlad', 'Ann', 'Eva', 'zhukovvlad');
console.log(newCommand);

console.log(newCommand.toArray());
console.log(dreamTeam.toArray());
