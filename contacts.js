const fs = require("node:fs/promises");

const contactsPath = require("path").basename("./contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, { encoding: "utf-8" });
  return contacts;
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const parsedContacts = JSON.parse(contacts);
  const contact = parsedContacts.find((contact) => contact.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const parsedContacts = JSON.parse(contacts);
  const filteredContacts = JSON.stringify(
    parsedContacts.filter((contact) => contact.id !== contactId)
  );
  const contact = parsedContacts.find((contact) => contact.id === contactId);
  await fs.writeFile(contactsPath, filteredContacts);
  return contact || null;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const parsedContacts = JSON.parse(contacts);
  const newContact = {
    id: `${Date.now()}`,
    name,
    email,
    phone,
  };
  parsedContacts.push(newContact);
  const formattedContacts = JSON.stringify(parsedContacts);
  await fs.writeFile(contactsPath, formattedContacts);
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
