import apiClient from 'utils/apiClient';

export async function fetchCount(amount = 1): Promise<{ data: number }> {
  return apiClient.post('/api/counter', { amount });
}
