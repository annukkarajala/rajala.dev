import { format, parseISO } from 'date-fns';
import { fi } from 'date-fns/locale';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'do MMMM, yyyy', { locale: fi })}</time>;
}
