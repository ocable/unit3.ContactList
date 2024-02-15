import Contacts from "./contacts";

export default function ContactTable({ contactList, setChosenContact }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3"> ContactList </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        <Contacts contactList={contactList} setChosenContact={setChosenContact} />
      </tbody>
    </table>
  );
}
