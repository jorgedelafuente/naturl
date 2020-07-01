import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#fff',
  fontFamily: 'Arial, Helvetica, sans-serif',
  headerBgColor: '#00677D',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#00B2B2',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4c4c4c',
};
function CustomChatbot() {
  const config = {
    width: '300px',
    height: '400px',
    floating: true,
  };
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Naturl!',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please type your name?',
      trigger: 'Waiting user input for name',
    },
    {
      id: 'Waiting user input for name',
      user: true,
      trigger: 'Asking name',
    },
    {
      id: 'Asking name',
      message: 'Hi {previousValue}, Glad to know you !!',
      trigger: 'Done',
    },
    {
      id: 'Done',
      message: 'Have a great day !!',
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default CustomChatbot;
