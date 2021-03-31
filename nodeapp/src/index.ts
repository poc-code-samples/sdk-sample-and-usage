import { Communicator } from './communicator';

const comm = new Communicator();

const run  = async () => {
    const data = await comm.getData('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
}

run();
