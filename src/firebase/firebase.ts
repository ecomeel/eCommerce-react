// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOZy1AFXgUibhFlGEdlbGVef-yaY_7jl4",
    authDomain: "furniture-shop-7a7c1.firebaseapp.com",
    projectId: "furniture-shop-7a7c1",
    storageBucket: "furniture-shop-7a7c1.appspot.com",
    messagingSenderId: "221783001736",
    appId: "1:221783001736:web:c9a45ad72d3c2f74672d3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { IProduct } from "../types/interfaces";

export async function getProductsFromDatabase() {
    const items: IProduct[] = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            title: doc.data().title,
            desc: doc.data().desc,
            img: doc.data().img,
            category: doc.data().category,
            price: doc.data().price
        });
    });
    return items
}
