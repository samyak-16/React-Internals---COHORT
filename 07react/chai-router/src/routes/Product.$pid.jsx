import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Product/$pid')({
  component: RouteComponent,
})

function RouteComponent() {

  const {pid}= Route.useParams()
  return <div>Hello "/Product/$pid"!


    <h2>This is my Product Id {pid}</h2>
  </div>
}
