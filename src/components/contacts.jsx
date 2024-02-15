

export default function Contacts({ contactList, setChosenContact}) {
  return contactList?.map((contact) => (
    <tr key={contact.id} onClick={() => setChosenContact(contact)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  ));
}
