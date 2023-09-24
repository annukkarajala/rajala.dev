import Image from 'next/image'
import Link from 'next/link'
import Tag from '@/components/Tag'

interface ProjectCardProps {
  name: string
  slug: string
  year: string | number
  title: string
  tags: {
    roles: string[]
    tech: string[]
  }
  description: string
}

export default function ProjectCard({
  name,
  slug,
  year,
  title,
  tags,
  description,
}: ProjectCardProps) {
  const href = `/${slug}`
  const heading = `${name} — ${title}`
  const style: React.CSSProperties & Record<string, string> = {
    '--card': `var(--${slug}-card)`,
    '--card-var': `var(--${slug}-card-var)`,
    '--card-text': `var(--${slug}-card-text)`,
    '--card-tag': `var(--${slug}-card-tag)`,
    '--card-tag-text': `var(--${slug}-card-tag-text)`,
    '--card-role': `var(--${slug}-card-role)`,
    '--card-role-text': `var(--${slug}-card-role-text)`,
  }

  return (
    <Link href={href}>
      <a className="project-card__wrapper">
        <div className="project-card" style={style}>
          <div className="project-card__content-wrapper">
            <div className="project-card__content">
              <small>{year}</small>
              <h3 className="project-card__title">{heading}</h3>
              <p>{description}</p>

              <div className="tag__container">
                {tags.roles.map((tag, i) => (
                  <Tag key={i} type="role" text={tag} />
                ))}
              </div>

              <div className="tag__container">
                {tags.tech.map((tag, i) => (
                  <Tag key={i} text={tag} />
                ))}
              </div>
            </div>

            <div className="project-card__image-container">
              <div className="project-card__image">
                <Image
                  alt={`${name}: kansikuva`}
                  src={`/assets/${slug}/cover.png`}
                  width={1024}
                  height={576}
                  quality={90}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}
