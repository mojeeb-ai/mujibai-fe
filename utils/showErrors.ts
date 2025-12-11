export const showErrors = (errorsData: any) => {
  const errors = errorsData.errors;

  if (errors && typeof errors === 'object' && !Array.isArray(errors)) {
    Object.keys(errors).forEach(key => {
      const messages = errors[key];
      if (Array.isArray(messages)) {
        messages.forEach(message => console.log(key, ':', message));
      } else {
        console.log('messages', messages);
      }
    });
  }
};
