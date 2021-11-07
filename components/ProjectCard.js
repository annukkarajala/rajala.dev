import Link from 'next/link'
import Image from 'next/image'
import Tag from '@/components/Tag'

export default function ProjectCard({
  name,
  slug,
  year,
  title,
  tags,
  children,
}) {
  const href = `/${slug}`
  const heading = `${name} — ${title}`

  return (
    <Link href={href}>
      <a className="project-card__wrapper">
        <div className={`project-card ${slug}`}>
          <div className="project-card__content-wrapper">
            <div className="project-card__content">
              <small>{year}</small>
              <h3 className="project-card__title">{heading}</h3>
              <p>{children}</p>

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
