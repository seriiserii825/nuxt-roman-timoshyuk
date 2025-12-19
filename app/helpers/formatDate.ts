  export default function formatDate(timestamp?: string | number | Date, short: boolean = false, lang: string = 'en-US'): string {
    if (timestamp) {
      if (short) {
        return new Date(timestamp).toLocaleDateString(lang, {
          day: "2-digit",
          month: "long",
          year: "numeric",
        });
      }
      return new Date(timestamp).toLocaleString(lang, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }
    if (short) {
      return new Date().toLocaleDateString(lang, {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }
 
    return new Date().toLocaleString(lang, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
