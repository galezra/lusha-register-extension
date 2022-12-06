export const addRandomString = (email: string) => {
  const [local, domain] = email.split('@');
  const randomLetters = Array.from({ length: 3 }, () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
  }).join('');

  return `${local}+${randomLetters}@${domain}`;
};
