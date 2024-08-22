import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const ToastiError = (message: string) => {

  Toastify({
    text: message,
    duration: 8000,
    newWindow: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    style: {
      background: "linear-gradient(to right, #405D72, #c05340)",
      fontWeight: "500",
      color: "#FFF8F3",
    },
  }).showToast();
};
