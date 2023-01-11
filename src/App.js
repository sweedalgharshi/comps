import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click Me!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>Seal Deal!</Button>
      </div>
      <div>
        <Button warning rounded>
          Hello There!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Hide Ads!
        </Button>
      </div>
    </div>
  );
}

export default App;
