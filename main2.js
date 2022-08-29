import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {getFirestore,getDocs,collection} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"

const firebaseConfig = process.env.FirebaseConfig;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const AllData=[];

const getAllData =async()=>{
    const dataSnapshot = await getDocs(collection(db, "bookings"));    
    dataSnapshot.forEach((doc)=>{
        AllData.push(doc.data())
    })
    setDataToTable()
}
getAllData();

const setDataToTable=()=>{
    let myTable = document.getElementById("myTable")

    for(let i=0; i<AllData.length;i++){
        let Row = `<tr>
            <td>${i+1}</td>
            <td>${AllData[i].room}</td>
            <td>${AllData[i].traveller}</td>
            <td>${AllData[i].checkIn}</td>
        </tr>`
        myTable.innerHTML += Row;
    }
}