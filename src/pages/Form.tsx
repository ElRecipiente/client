import { useState } from "react";
import axios from "axios";


export default function Form() {
  const [name, setName] = useState('');
  const [hello, setHello] = useState('');

  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const fetchHello = await axios.get(`http://127.0.0.1:2023/hello/${name}`);
      setHello(fetchHello.data);

    }
    catch (error) {
      console.error('Une erreur est survenue durant la requête', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Tapez votre nom ici
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {hello && <p>{JSON.stringify(hello)}</p>}
    </>
  )
}