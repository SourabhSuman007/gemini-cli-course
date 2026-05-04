import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Index from '../../pages/index.vue';

describe('Homepage', () => {
  it('should render the h1 title', async () => {
    const wrapper = await mountSuspended(Index);
    expect(wrapper.find('h1').text()).toBe('The perfect pair for your plate.');
  });

  it('should render 3 feature cards', async () => {
    const wrapper = await mountSuspended(Index);
    expect(wrapper.findAll('.feature-card')).toHaveLength(3);
  });

  it('should render 3 combo cards', async () => {
    const wrapper = await mountSuspended(Index);
    expect(wrapper.findAll('.combo-card')).toHaveLength(3);
  });
});
