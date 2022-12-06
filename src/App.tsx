import Form from './components/Form';
import Header from './components/Header';

function App() {
  const handleCloseForm = () => {
    const popup = chrome?.extension?.getViews({ type: 'popup' })?.[0];
    popup.close();
  };
  return (
    <div className='App'>
      <Header />
      <Form onClose={handleCloseForm} />
    </div>
  );
}

export default App;
