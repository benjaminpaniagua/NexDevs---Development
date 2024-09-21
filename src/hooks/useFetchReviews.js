import { useEffect, useState } from "react";

export const useFetchReviews = () => {
    /*const [data, setData] = useState([]);
  
    const getData = async () => {
      try {
        const response = await fetch(``);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    return {
      data,
    };*/

    const reviews = [
        {
            userName: "John Doe",
            profilePicture: "/images/default_profile_picture.jpg",
            comment: 'Muy buen precio.',
            rate: 5,
        },
        {
            userName: "Jane Smith",
            profilePicture: "/images/default_profile_picture.jpg",
            comment: 'Excelente servicio, muy satisfecho.',
            rate: 4,
        },
        {
            userName: "Carlos López",
            profilePicture: "/images/default_profile_picture.jpg",
            comment: 'Rápido y eficiente, lo recomiendo.',
            rate: 5,
        },
        {
            userName: "Laura García",
            profilePicture: "/images/default_profile_picture.jpg",
            comment: 'La atención al cliente podría mejorar.',
            rate: 3,
        },
        {
            userName: "Carlos García",
            profilePicture: "/images/default_profile_picture.jpg",
            comment: 'Muy buenprecio.',
            rate: 5,
        },
        {
            userName: "Carmen Puentes",
            profilePicture: "/images/default_profile_picture.jpg",
            comment: 'Excelente servicio, muy satisfecho.',
            rate: 4,
        },
    ];
    return reviews;
};
