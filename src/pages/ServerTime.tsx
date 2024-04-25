import axios from 'axios';
import { useState } from 'react';

export default function ServerTime() {

    const [time, setTime] = useState('');

    const handleClick = async () => {
        try {

            const fetchTime = await axios.get('http://127.0.0.1:2023/server/time');
            setTime(fetchTime.data);

        }
        catch (error) {
            console.error('Une erreur est survenue durant la requête', error);
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                Clique ici ! Le serveur a pour date {time && <p>{JSON.stringify(time)}</p>}
            </button>
        </>
    )
}
