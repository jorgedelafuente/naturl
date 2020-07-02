import React, { Component, useContext, useState } from 'react';
import {
  auth,
  createUserProfileDocument,
  signOut,
  getUserDocument,
} from '../../firebase';
import { AuthContext } from '../../auth/Auth';
import styled from 'styled-components';
import { FormButton } from '../../components/common/button/Button';
import { FormContainer } from '../../components/common/container/Container';
import { Alert } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Profile = () => {
  const [displayName, setDisplayName] = useState('');
  const [displayAlert, setDisplayAlert] = useState('none');
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  //REDO with USE EFFECT

  if (currentUser) {
    console.log(currentUser.id);
    let userData = Promise.resolve(getUserDocument(currentUser.uid)).then(
      (profile) => {
        setDisplayName(profile.displayName);
      }
    );
  }

  const handleUpdate = () => {
    console.log('test');
  };

  const handleSignOut = () => {
    setDisplayAlert('block');
    signOut();
  };

  function callback(key) {
    console.log(key);
  }

  return (
    <FormContainer>
      <div className="Logo">
        <h3>NATURL</h3>
      </div>
      <div>{currentUser && <div>Welcome Back {displayName}</div>}</div>
      <form onSubmit={handleUpdate}>
        <div className="InputGroup">
          <label>
            <span>First Name</span>
            <input name="firstname" type="text" placeholder="First Name" />
          </label>
        </div>

        <div className="InputGroup">
          <label>
            <span>Last Name</span>
            <input name="lastname" type="text" placeholder="Last Name" />
          </label>
        </div>

        <div className="InputGroup">
          <label>
            <span>Address</span>
            <input name="address" type="text" placeholder="Address" />
          </label>
        </div>

        <FormButton type="submit">Update Profile</FormButton>
      </form>
      <br />
      <FormButton onClick={handleSignOut}>Sign out</FormButton>
      <Alert
        banner
        message="Sign Out Successful"
        type="success"
        showIcon={true}
        closable
        style={{ display: displayAlert }}
      />
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </FormContainer>
  );
};

export default Profile;

// class Profile extends Component {
//   state = { displayName: '', email: '', password: '' };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { email, password, displayName } = this.state;

//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );
//       console.log(user);

//       const consoleUser = await createUserProfileDocument(user, {
//         displayName,
//       });
//       console.log(consoleUser);
//     } catch (error) {
//       console.error(error);
//     }

//     this.setState({ displayName: '', email: '', password: '' });
//   };

//   render() {
//     const { displayName, email, password } = this.state;

//     return (
//       <div>
//         <form className="SignUp" onSubmit={this.handleSubmit}>
//           <h2>Sign Up</h2>
//           <input
//             type="text"
//             name="displayName"
//             placeholder="Display Name"
//             value={displayName}
//             onChange={this.handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={this.handleChange}
//           />
//           <input type="submit" value="Sign Up" />
//         </form>

//         <br />
//         <br />

//         <button style={{ backgroundColor: 'green' }} onClick={() => signOut()}>
//           Sign out
//         </button>
//       </div>
//     );
//   }
// }

// export default Profile;
