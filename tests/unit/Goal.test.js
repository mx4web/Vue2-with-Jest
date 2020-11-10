import 'regenerator-runtime/runtime'; // transform generators
import { mount } from '@vue/test-utils';
import Goal from '@/components/Goal';

describe('Goal.vue', () => {
  it('renders the goal when submitted', async () => {
    const wrapper = mount(Goal);
    await wrapper.find('[name="newGoal"]').setValue('Learning Vue');
    await wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.find('.goal-list').text()).toBe('Learning Vue');
  });
});
