import Link from 'next/link'
import Image from 'next/image'

import Tag from './Tag'

export default function ProjectCard({
  href,
  year,
  name,
  title,
  labels,
  tags,
  src,
  children,
}) {
  return (
    <Link href={href}>
      <a>
        <div className={`project-card ${name}`}>
          <div className="project-card__content-wrapper">
            <div className="project-card__content">
              <small>{year}</small>
              <h3>
                {name} — {title}
              </h3>
              <p>{children}</p>

              <div className="tag__container">
                {labels.map((label, i) => (
                  <Tag key={i} type="role" text={label} />
                ))}
              </div>

              <div className="tag__container">
                {tags.map((tag, i) => (
                  <Tag key={i} text={tag} />
                ))}
              </div>
            </div>

            <div className="project-card__image-container">
              <div className="project-card__image">
                <Image
                  alt={`${name}: kansikuva`}
                  src={`/assets/${src}`}
                  width={1024}
                  height={576}
                  quality={100}
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
