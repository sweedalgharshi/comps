import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: '12jh',
      label: 'Can I use React on a Project?',
      content:
        'You can use react on any project you want You can use react on any project you want',
    },
    {
      id: '1h2k',
      label: 'Can I use JavaScript on a Project?',
      content:
        'You can use JavaScript on any project you want You can use react on any project you want',
    },
    {
      id: 'sda7',
      label: 'Can I use CSS on a Project?',
      content:
        'You can use CSS on any project you want You can use react on any project you want',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
