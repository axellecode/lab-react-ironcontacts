import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandom = () => {
    const unlistedContacts = contacts.filter(
      (contact) => !this.state.contacts.includes(contact)
    );
    const newContact =
      unlistedContacts[Math.floor(Math.random() * unlistedContacts.length)];
    if (newContact) {
      this.setState({
        contacts: [...this.state.contacts, newContact]
      });
    }
  };

  deleteContact = (id) => {
    const remainingContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: remainingContacts
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandom}>Add random contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.deleteContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
