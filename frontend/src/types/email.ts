export type Email = string;

export function isValidEmail(email: string): email is Email
{
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
}