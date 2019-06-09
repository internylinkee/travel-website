import Enzyme, {
  configure,
  shallow,
  mount,
  render
} from 'enzyme';
import 'jest-enzyme';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export {
  shallow,
  mount,
  render
};

export default Enzyme;
