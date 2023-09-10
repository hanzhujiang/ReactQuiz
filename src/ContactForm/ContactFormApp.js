import React from 'react';
import submitForm from './submitForm';

export default function ContactFormApp() {
  return (
    <form
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}
      action='https://www.greatfrontend.com/api/questions/contact-form'
      method='post'
    >
      <div>
        <label htmlFor='name-input'>Name: </label>
        <input id='name-input' type='text' name='name'/>
      </div>
      <div>
        <label htmlFor='name-email'>Email: </label>
        <input id='email-input' type='email' name='email' />
      </div>
      <div>
        <label htmlFor='message-input'>Message: </label>
        <textarea id='message-input' name='message'></textarea>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}
