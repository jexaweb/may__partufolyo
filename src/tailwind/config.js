module.exports = {
  theme: {
    extend: {
      keyframes: {
        showcontent: {
          from: {
            opacity: "0",
            transform: "translate(0,100px)",
            filter: "blur(33px)",
          },
          to: {
            opacity: "1",
            transform: "translate(0,0)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        showcontent: "showcontent 1s ease-in-out forwards",
      },
    },
  },
};
