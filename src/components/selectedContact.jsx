export default function SelectedContact({ chosenContact, setChosenContact }) {
    return (
        <ul>
            <li>{chosenContact.name}</li>
            <li>{chosenContact.phone}</li>
            <li>{chosenContact.email}</li>
            <button onClick={() => setChosenContact(null)}>Go Back</button>
        </ul>
    );

}