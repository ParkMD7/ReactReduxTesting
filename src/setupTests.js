// NOTE: The name of this file is crucial - JEST will load this file first before running any other tests
// NOTE: We add Enzyme here to make it available to all of our tests
// NOTE: Enzyme gives us 3 ways to interact with our React Components:
// Static Render -> render the given component and return plain HTML in an obj -> allows us to make assertion about generated HTML
// Shallow Render -> render *just* the given component and NONE of it's children -> used when we want to test 1 component in isolation
// Full DOM Render -> Render the component AND all of its children AND returns an obj that lets us modify it afterwards -> we can render full copies of our application

// dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() })
