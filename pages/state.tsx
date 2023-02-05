import { Fragment, useState } from 'react';

interface Iperson {
    name: string;
    age: number;
}



const Users = () => {
    const people: Iperson[] = [
        {
            age: 27,
            name: 'Tim'
        },
        {
            age: 28,
            name: 'Bob'
        }
    ]

    const [storePeople, setPeople] = useState<Iperson[]>(people || []);

    const addPerson = () => {
        const tuple: Iperson[] = storePeople;
        setPeople([...tuple, { age: 21, name: 'Tim' }])
    }
    return (
        <>
            {storePeople.map((person, index) => (
                <div key={`person-${index}`}>
                    <p>person: {person.name}</p>
                    <p>age : {person.age}</p>
                </div>
            ))}
            <button onClick={addPerson}>add person</button>
        </>
    )
}

export default Users