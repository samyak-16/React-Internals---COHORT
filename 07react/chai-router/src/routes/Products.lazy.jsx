import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/Products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Products"!
   <Link to= "/Product/1" >Go To Product 1</Link>
   <br />
   <Link to= "/Product/2" >Go To Product 2</Link>
   <br />
   <Link to= "/Product/3" >Go To Product 3</Link>
   <br />
   <Link to= "/Product/4" >Go To Product 4</Link>
   <br />

  
  </div>
}
