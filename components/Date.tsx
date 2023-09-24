import { format, parseISO } from 'date-fns'
import { fi } from 'date-fns/locale'

interface DateProps {
  dateString: string
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'do MMMM, yyyy', { locale: fi })}
    </time>
  )
}
