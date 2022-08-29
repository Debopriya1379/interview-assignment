import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"

const firebaseConfig = process.env.FirebaseConfig;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const newTraveller = document.getElementById("newTraveller")
const newRoom = document.getElementById("newRoom")
const newChechoutDate = document.getElementById("newChechoutDate")
const newCheckoutTime = document.getElementById("newCheckoutTime")
const submitButton = document.getElementById("roomBookButton")

// const today = new Date();
// const currDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// const currTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

const bookRoom =async(e)=>{
    e.preventDefault()
    const ref = collection(db,"bookings");

    if(newTraveller==='' || newRoom==='' || newChechoutDate==='' || newCheckoutTime===''){
        alert("Fill the form properly")
        return
    }
    else{
        const docRef = await addDoc(ref,{
            traveller : newTraveller.value,
            room : newRoom.value,
            checkIn : newChechoutDate.value+"/"+newCheckoutTime.value,
        }).then(()=>{
            alert("Data added successfully")
            newTraveller.value='';
            newRoom.value='';
            newChechoutDate.value='';
            newCheckoutTime.value='';
        }).catch(()=>{
            alert("Data couldn't be added")
        })
    }
}

submitButton.addEventListener("click",(e)=>bookRoom(e))