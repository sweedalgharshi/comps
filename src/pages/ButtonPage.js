import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
  return (
    <div>
      {/*<div>
        <Button plain>Plain</Button>
  </div>*/}
      <div>
        <Button primary rounded outline className="mb-5">
          <GoBell />
          Click Me!!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
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
        <Button danger rounded outline>
          <GoDatabase />
          Hide Ads!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
