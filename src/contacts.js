import { promises as fs } from "fs";
import contacts from "./db/contacts.json";

const contactsPath = require("path").basename("./db/contacts.json");

async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const result = await fs.readFile(contactsPath);
  console.log(result);
  return result;
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

export { listContacts, getContactById, removeContact, addContact };
