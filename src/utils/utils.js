export const formatDate = (dateString) => {
    let date = new Date(dateString);
    const offset = date.getTimezoneOffset() * 60000;
    const ISTOffset = 330 * 60000; // For Asia/Kolkata
    date = new Date(date.getTime() + offset + ISTOffset);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesString = minutes < 10 ? '0' + minutes : minutes;
    return `${day} ${month}, ${year} - ${hours}:${minutesString}${ampm}`;
  };
  