// src/views/__tests__/SignIn.spec.ts
import { test, render, expect } from 'vitest'; // Pastikan Anda mengimpor 'it' dari 'vitest'
import SignIn from '@/views/SignIn.vue';

test('renders SignIn form', () => {
  const { getByTestId } = render(SignIn);
  const usernameInput = getByTestId('username');
  const passwordInput = getByTestId('password');
  const submitButton = getByTestId('buttons');

  expect(usernameInput).not.toBeNull('username');
  expect(passwordInput).not.toBeNull('password');
  expect(submitButton).not.toBeNull('buttons');
});

test('handles invalid SignIn', async () => {
  const { getByTestId, getByText } = render(SignIn);

  const usernameInput = getByTestId('username');
  const passwordInput = getByTestId('password');
  const submitButton = getByTestId('buttons');

  // Masukkan informasi SignIn yang salah
  await usernameInput.setValue('username Atau password Anda salah');
  await passwordInput.setValue('iusername Atau password Anda salah');
  await submitButton.click();

  // Periksa apakah pesan kesalahan ditampilkan
  const errorMessage = getByText('username Atau password Anda salah');
  expect(errorMessage).not.toBeNull();
});

// Tambahkan lebih banyak pengujian sesuai kebutuhan
