// CarList.js
import React, { useEffect, useState } from 'react';
import { firebasedb } from './firebaseConfig';
// import { getFirestore, collection, getDocs, addDoc} from "firebase/firestore";
import {  collection, getDocs} from "firebase/firestore";

const CarList = () => {
   const [cars, setCars] = useState([]);

    useEffect( () => {  
        const fetchCars = async () => {   
    const querySnapshot = await getDocs(collection(firebasedb, "car"));
    const carData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    setCars(carData);
}

    fetchCars();

    }, []);
    return (
        <div>
            <h1>Car List</h1>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.name}: {car.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
