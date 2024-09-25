import screenLoader from "../../public/assets/Animation - 1721225847066.json";

export const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: screenLoader,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const logOut = () => {
  localStorage.removeItem("token");
};
