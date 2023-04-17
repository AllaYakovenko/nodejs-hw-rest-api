const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => { 
    switch (action) { 
        case "read":
            const allContacts = await contacts.listContacts();
            return console.table(allContacts);
        case "getContactById":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);
        case "addContact":
            const newContact = await contacts.addContact({ name, email, phone });
            return console.log(newContact);
        case "updateContact":
            const updateContact = await contacts.updateContact(id, { name, email, phone });
            return console.log(updateContact);
        case "removeContact":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeAction(argv);

// invokeAction({ action: "read" });
// invokeAction({action: "getContactById", id: "rsKkOQUi80UsgVPCcLZZW"})
// invokeAction({action: "addContact", name: "Alla Yakovenko", email: "jaak280488@gmail.com", phone: "(098) 952-7704"})
// invokeAction({action: "updateContact", id: "-I4czesUDRYrCDI4fH9d5", name: "Alla Yakovenko", email: "jaak280488@gmail.com", phone: "(098) 952-7704"})
// invokeAction({ action: "removeContact", id: "9CwqtX_qxW45JFRNUEzDn" })
