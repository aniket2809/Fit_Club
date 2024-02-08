import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
  console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  // initialize using your User ID saved in the .env file
  emailjs.init({publicKey: import.meta.env.VITE_EMAILJS_USER_ID});
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // The service ID saved in the .env file
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // The template ID also saved in the .env file
      // Start of the variables defined in the template earlier
      {
        from_name: details.from_name,
        to_name: details.to_name,
        message: details.message,
      }
      // End of the variables defined in the template earlier
    )
    .then((response) => {
      // Debug statement on the console to show the function has been executed successfully
      console.log(response);
    })
    .catch((error) => {
      // Debug statement on the console to show the error that occured
      console.log(error);
    });
};

export { sendCustomEmail };