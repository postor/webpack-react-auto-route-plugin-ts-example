import { Link, Outlet, useLocation } from "react-router-dom"

let links = [
  'index', 'about', 'login', 'posts', 'admin', 'admin/test'
  , 'test-test'
  , 'test-test/test-test'
  , 'test-test/Test-Test1/Test_Test1'
  , 'no-match', 'test-test/no-match'
  , '$wont-show', 'wont-show'
]

export default ({ }) => {
  let location = useLocation()
  if (location.pathname.startsWith('/login')) return <Outlet />
  return <div>
    <p>layout for all but login</p>
    <ul style={{ display: 'flex' }}>
      {links.map(x => <li key={x} style={{ padding: '0 10px', listStyle: 'none' }}>
        <Link to={x === 'index' ? '/' : '/' + x}>{x}</Link>
      </li>)}
    </ul>
    <div> <Outlet /> </div>
  </div>
}