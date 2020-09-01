import styled from "styled-components";
import tw from "twin.macro";

const StartStyle = styled.div.attrs({
  className:
    "w-screen h-screen flex flex-col justify-center items-center bg-gray-900 px-64 pb-5",
})`
  & {
    @import url("https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap");
    h1 {
      ${tw`text-black text-6xl`}
      font-family: 'Sedgwick Ave Display', cursive;
    }
    @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
    p {
      ${tw`text-white text-xl text-center bg-blue-900 rounded p-2`}
      font-family: 'Roboto Condensed', sans-serif;
    }
    button {
      ${tw`bg-blue-900 hover:bg-blue-700 text-white text-3xl px-2 py-1 m-6 rounded`}
      font-family: 'Bebas Neue', cursive;
    }
  }
`;

const SpeechBubble = styled.div.attrs({
  className: "relative bg-white rounded py-1 px-8 mt-8",
})`
  & {
    ::after {
      ${tw`block absolute w-0`}
      content: "";
      right: -15px;
      bottom: 15px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 15px solid white;
    }
  }
`;

const Banner = styled.div.attrs({
  className: "flex flex-row justify-center items-center pb-6",
})`
  & {
    img {
      ${tw`w-64 h-64`}
    }
  }
`;

const StyledFooter = styled.footer.attrs({
  className:
    "absolute bottom-0 h-8 w-screen bg-blue-900 text-center text-white",
})`
  & {
    a {
      ${tw`text-purple-500 font-semibold`}
    }
  }
`;

const StyledGame = styled.div.attrs({
  className:
    "w-screen h-screen flex flex-col justify-center items-center bg-gray-900 pb-5 text-white text-center",
})`
  & {
    h1 {
      ${tw`text-xl`}
    }
    h2 {
      ${tw`text-4xl`}
    }
    span {
      ${tw`text-3xl`}
      font-family: "Bebas Neue", cursive;
    }
    img {
      ${tw`w-32 h-32`}
    }
  }
`;

const StyledAnswers = styled.div.attrs({
  className: "grid grid-cols-2 gap-2 w-3/4 h-64 m-8",
})`
  & {
    button {
      ${tw`bg-blue-900 hover:bg-blue-700 text-white text-5xl rounded`}
      font-family: 'Bebas Neue', cursive;
    }
  }
`;

const StyledEnd = styled.div.attrs({
  className:
    "w-screen h-screen flex flex-col justify-center items-center bg-gray-900 text-center text-white",
})`
  & {
    a {
      ${tw`text-purple-500 font-semibold`}
    }
  }
`;

export {
  StartStyle,
  SpeechBubble,
  Banner,
  StyledFooter,
  StyledGame,
  StyledAnswers,
  StyledEnd,
};
