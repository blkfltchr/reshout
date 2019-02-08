const DEFAULT_PROPERTIES = {
    firstName: 'New contact',
    get dateAdded() {
        return new Date()
    }
}

class Contact {
    constructor({ dateAdded, firstName } = {}) {
        this.dateAdded = dateAdded || DEFAULT_PROPERTIES.dateAdded;
        this.firstName = firstName || DEFAULT_PROPERTIES.firstName;
    }
}

module.exports = Contact;