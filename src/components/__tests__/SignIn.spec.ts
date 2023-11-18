// src/components/__tests__/SignIn.spec.ts
import { mount } from '@vue/test-utils';
import SignIn from '@/components/SignIn.vue';
import { ref } from 'vue';

describe('SignIn.vue', () => {
  it('renders login form and triggers SignIn method', async () => {
    const wrapper = mount(SignIn);
    
    // Mock data
    const mockUser = 'testUser';
    const mockPassword = 'testPassword';
    
    // Mock the ref values
    wrapper.vm['user'] = ref(mockUser);
    wrapper.vm['password'] = ref(mockPassword);

    // Mock the SignIn method
    wrapper.vm['authStore'].SignIn = jest.fn();

    // Simulate form submission
    await wrapper.find('[data-test="login-form"]').trigger('submit.prevent');

    // Ensure that SignIn method is triggered
    expect(wrapper.vm['authStore'].SignIn).toHaveBeenCalledWith(mockUser, mockPassword);
  });

  it('redirects to home on successful login', async () => {
    const wrapper = mount(SignIn);
    const mockUser = 'testUser';
    const mockPassword = 'testPassword';

    wrapper.vm['user'] = ref(mockUser);
    wrapper.vm['password'] = ref(mockPassword);
    
    // Mock successful SignIn
    wrapper.vm['authStore'].SignIn = jest.fn().mockResolvedValue(true);

    await wrapper.find('[data-test="login-form"]').trigger('submit.prevent');

    // Ensure that router.push is called with the correct route
    expect(wrapper.vm['$router'].push).toHaveBeenCalledWith({ name: 'home' });
  });

  it('displays error message on failed login', async () => {
    const wrapper = mount(SignIn);
    const mockUser = 'testUser';
    const mockPassword = 'testPassword';

    wrapper.vm['user'] = ref(mockUser);
    wrapper.vm['password'] = ref(mockPassword);

    // Mock failed SignIn
    wrapper.vm['authStore'].SignIn = jest.fn().mockResolvedValue(false);

    await wrapper.find('[data-test="login-form"]').trigger('submit.prevent');

    // Ensure that error message is displayed
    expect(wrapper.find('[data-test="error-message"]').exists()).toBe(true);
  });
});
