import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Card from '../Browse/Card';
import getToken from '../../token/getToken';

const SearchForm = () => {
    const [showCard, setShowCard] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [animal, setAnimal] = useState('dog');
    const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [pet, setPet] = useState({});
    const [msg, setMsg] = useState('');

    const flipCard = (name) => {
        switch(name) {
            case 'form':
                setShowCard(true);
                setShowForm(false);
                break;
            case 'card':
                setShowCard(false);
                setShowForm(true);
                clearInput();
                break;
            default:
                break;
        }
    }
    
    const clearInput = () => {
        setAnimal('dog');
        setLocation('');
        setSize('');
        setGender('');
        setAge('');
        setPet({});
        setMsg('');
    }

    const fetchPet = async () => {
        const token = await getToken();
        let query = `type=${animal}`;
        if (location) query += `&location=${location}`;
        if (size) query += `&size=${size}`;
        if (gender) query += `&gender=${gender}`;
        if (age) query += `&age=${age}`;
        
        try {
            const res = await fetch(`https://api.petfinder.com/v2/animals?${query}&limit=1`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // const res1 = await fetch(`https://api.petfinder.com/v2/types`, {
            //     method: 'GET',
            //     mode: 'cors',
            //     headers: {
            //         'Authorization': `Bearer ${token}`
            //     }
            // });
            // const body1 = await res1.json();
            // console.log(body1);

            const body = await res.json();
            setPet(body.animals[0]);
            return true;
        } catch (e) {
            setMsg('Unable to retrieve animal')
            return false;
        }
    }

    const isValidInput = () => {
       if (location < 0) {
           setMsg('Please enter a valid zipcode');
           return false;
       }
       return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!isValidInput()) return;
        
        if (!fetchPet()) return;
        
        clearInput();
        flipCard(e.target.lastElementChild.name);
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="animal-form"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={500}
            className="animal-card-form"
        >
            {msg&& <p>{msg}</p>}
            {showForm && (
                <form onSubmit={e => onSubmit(e)} className="animal-form">
                    <label htmlFor="animal">Animal:</label>
                    <select name="animal" onChange={(e) => setAnimal(e.target.value)} className="animal-form__input">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="small-furry">Small & Furry</option>
                        <option value="scales-fins-other">Scales, Fins & Other</option>
                        <option value="bird">Bird</option>
                        <option value="rabbit">Rabbit</option> 
                        <option value="horse">Horse</option>
                        <option value="barnyard">Barnyard</option> 
                    </select>
                    {/* <input type="text" placeholder="dog, cat" value={animal} 
                        onChange={(e) => setAnimal(e.target.value)} className="animal-form__input"   
                    /> */}

                    {/* <label htmlFor="breed">Breed:</label>
                    <input type="text" placeholder="pug, samoyed" value={breed} 
                        onChange={(e) => setBreed(e.target.value)} className="animal-form__input"   
                    /> */}

                    <label htmlFor="location">Location</label>
                    <input type="number" placeholder="postal code" value={location} 
                        onChange={(e) => setLocation(e.target.value)} className="animal-form__input"   
                    />

                    <label htmlFor="size">Size:</label>
                    <select name="size" onChange={(e) => setSize(e.target.value)} className="animal-form__input">
                        <option value=""></option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">X-Large</option>
                    </select>
                    {/* <input type="text" placeholder="small, medium, large, xlarge" value={size} 
                        onChange={(e) => setSize(e.target.value)} className="animal-form__input"   
                    /> */}

                    <label htmlFor="gender">Gender</label>
                    <select name="gender" onChange={(e) => setGender(e.target.value)} className="animal-form__input">
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {/* <input type="text" placeholder="female, male" value={gender} 
                        onChange={(e) => setGender(e.target.value)} className="animal-form__input"   
                    /> */}

                    <label htmlFor="age">Age</label>
                    <select name="age" onChange={(e) => setAge(e.target.value)} className="animal-form__input">
                        <option value=""></option>
                        <option value="baby">Baby</option>
                        <option value="young">Young</option>
                        <option value="adult">Adult</option>
                        <option value="senior">Senior</option>
                    </select>
                    {/* <input type="number" placeholder="5" value={age} 
                        onChange={(e) => setAge(e.target.value)} className="animal-form__input"   
                    /> */}
                    <button name="form">Find my pet</button>
                </form>
            )}

            {showCard && (
                <div className="animal-form-card">
                    <button name="card" className="animal-form-card__btn" onClick={e => flipCard(e.target.name)}>
                        Find another pet
                    </button>
                    <Card {...pet} />
                </div>
            )}
        </ReactCSSTransitionGroup>
    )
}

export default SearchForm;