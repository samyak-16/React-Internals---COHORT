import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useNotification } from '../context/notificationContext'
import { useCartStore } from '../store/cartStore'
import { Link } from '@tanstack/react-router'; // or 'react-router-dom' in other routers
export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {

  //Use Case of StateManagement :)  
  const {count , addNotification , resetNotification} = useNotification()
  const AddToCart = useCartStore((state)=> state.addToCart)
  return (
    <React.Fragment>
      <nav>

<Link to="/about">Go to About</Link>

      </nav>
      <div>
      🔔 Notifications: {count}
      <button onClick={addNotification}>Add</button>
      <button onClick={resetNotification}>Reset</button>
    </div>
      <Outlet />
      <TanStackRouterDevtools/>
    </React.Fragment>
  )
}
