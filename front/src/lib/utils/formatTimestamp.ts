export const formatCreatedDate = (createdDateArray:any) => {
    // Destructure the createdDate array
    const [year, month, day, hour, minute, second, nanoseconds] = createdDateArray;
    
    // Create a new Date object
    const date = new Date(year, month - 1, day, hour, minute, second, nanoseconds / 1e6);
    
    // Format the date
    const formattedDate = date.toLocaleString('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).replace(',', ''); // Remove comma between date and time
  
    return formattedDate;
  };

  export const formatSimpleDate = (dateArray: any) => {
    // Destructure the date array
    const [year, month, day, hour, minute, second] = dateArray;
  
    // Create a new Date object
    const date = new Date(year, month - 1, day, hour || 0, minute || 0, second || 0);
  
    // Determine the format options based on whether time is provided
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
  
    // Add time options only if hour and minute are provided
    if (hour !== undefined && minute !== undefined) {
      options.hour = '2-digit';
      options.minute = '2-digit';
    }
  
    // Format the date
    const formattedDate = date.toLocaleString('tr-TR', options).replace(',', ''); // Remove comma between date and time
  
    return formattedDate;
  };
  

