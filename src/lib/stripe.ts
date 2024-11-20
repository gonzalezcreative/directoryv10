import { loadStripe } from '@stripe/stripe-js';
import { fetchApi } from './api';

const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
if (!stripeKey) {
  throw new Error('Missing Stripe publishable key');
}

export const stripePromise = loadStripe(stripeKey);
export const LEAD_PRICE = 500; // $5.00 in cents

export async function createPaymentIntent(leadId: string, userId: string) {
  return fetchApi('/create-payment-intent', {
    method: 'POST',
    body: JSON.stringify({ leadId, userId }),
  });
}