import { useEffect, useState } from "react";
import "./App.css";
import ContactTable from "./components/contactTable";
import SelectedContact from "./components/selectedContact";


function App() {
  const [contactList, setContactList] = useState();
  const [chosenContact, setChosenContact] = useState();


  useEffect(() => {  
    const fetchContacts = async () => {
      const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";
      const response = await fetch(API_URL);
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setContactList(parsedResponse);
  };

  fetchContacts();

}, []);

  return (
    <>
      {chosenContact ? <SelectedContact chosenContact={chosenContact} setChosenContact={setChosenContact}/> 
      : <ContactTable contactList={contactList} setChosenContact={setChosenContact}/>}
    </>
  );
}

export default App;
