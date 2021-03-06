import React, { createContext } from "react";
export const AuthContext = createContext();
class AuthContextProvider extends React.Component {
  state = {
    isAuthenticated: false,
  };
  toggleAuthentication = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          toggleAuthentication: this.toggleAuthentication,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContextProvider;
