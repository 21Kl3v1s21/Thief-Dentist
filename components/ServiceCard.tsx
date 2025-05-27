type Props = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="border rounded-xl p-4 shadow">
      <h3 className="text-xl font-medium">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
