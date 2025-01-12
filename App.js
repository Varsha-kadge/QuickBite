const heading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'h1tag' }, 'I am h1 tag'),
    React.createElement('h2', { id: 'h2tag' }, 'I am h2 tag'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', { id: 'h1tag' }, 'I am h1 tag'),
    React.createElement('h2', { id: 'h2tag' }, 'I am h2 tag'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
