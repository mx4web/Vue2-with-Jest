import 'regenerator-runtime/runtime'; // transform generators
import { mount } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

//describe vs it?
//mount vs shallowMount?
describe('Greeting.vue', () => {
  const msg = 'Welcome to testing';

  //use a factory functin to return an object
  const factory = (props) => {
    return mount(Greeting, {
      propsData: {
        msg,
        ...props,
      },
    });
  };

  test('renders a greeting for new user', () => {
    //wrapper is an object containing the Vue component, plus some useful methods for testing
    const wrapper = factory({ show: true });
    expect(wrapper.find('span').text()).toContain('Welcome to testing');
  });

  test('renders a greeting for return user', () => {
    //wrapper is an object containing the Vue component, plus some useful methods for testing
    const wrapper = factory({ show: false });
    expect(wrapper.find('span').text()).toContain('Welcome to testing again!');
  });

  test('renders the button click', async () => {
    const wrapper = factory();
    await wrapper.setData({ counter: 2 });
    await wrapper.find('button').trigger('click');

    expect(wrapper.find('.counter').text()).toContain(3);
  });
});
