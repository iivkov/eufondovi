import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EUnoteSite from './EUnoteSite';

const HomePage = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get('/projekti.json')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Greška prilikom dohvaćanja podataka:', error);
        });
    }, []);

    const getAddressFromUrl = (url) => {
        try {
          const address = new URL(url).hostname;
          return address;
        } catch (error) {
          console.error('Greška prilikom izdvajanja domene:', error);
          return url;
        }
      };
    
    return (
        <div className="main_content">
        <EUnoteSite />
        <h1>Dobrodošli!</h1>
        <div className="container">
            <p>Ovo su neki od naših projekata...</p>
            <table className="table">
                <thead>
                    <tr>
                        <th className="naziv">naziv</th>
                        <th>web</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.naziv_projekta}</td>
                        <td><a href={item.web} target="_blank" rel="noopener noreferrer">{getAddressFromUrl(item.web)}</a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default HomePage;