import type { LayoutServerLoad } from './$types';
 
export const load = (async ({ locals }) => {
  return {
    email: locals.email
  };
}) satisfies LayoutServerLoad;