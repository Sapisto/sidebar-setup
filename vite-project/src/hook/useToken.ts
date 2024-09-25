const UseToken = () => {
    const token = localStorage.getItem("token") as string || "";
    return {
      token,
      isLoggedIn: token && token.length > 0
    };
  };
  
  export default UseToken;