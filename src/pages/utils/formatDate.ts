/**
   * Formats a date string into 'DD/MM/YYYY' format.
   * 
   * @param {string | undefined} dateString - The date string to format.
   * @returns {string | undefined} The formatted date string or undefined if the input is falsy.
   */
export const formatDate = (dateString: string | undefined): string | undefined => {
  if (!dateString) return;

  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};