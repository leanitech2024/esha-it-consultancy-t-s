type SectionHeadingsProps = {
  title: string
  subtitle?: string
  description: string
}
export default function SectionHeadings(props: SectionHeadingsProps) {
  const { title, subtitle, description } = props
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
          {subtitle && <span className="subtitle-one">{subtitle}</span>}
          <h2>{title}</h2>
          <p className={'mb-3 lh-base'}>{description}</p>
        </div>
      </div>
    </div>
  )
}
