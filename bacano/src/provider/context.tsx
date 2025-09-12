import { createContext } from 'react';

const Sahiana: any = {
    name: 'Sahiana',
    age: 20
}

const UserContext = createContext(Sahiana);

export default UserContext