import { Outlet, useNavigate } from "react-router"
import './Layout.css'
// renderuje menu koji ce da se ponavlja na svakoj strani, ali ce biti samo na jednom mestu u Layout-u
//zato sto je prisutan na svakoj strani i konstantan je zato cemo ga ucitati samo ovde.
//Isto smo mogli uraditi i za footer - jer je ovo stabilna komponenta koja nece da se rerenderuje
//Dok u Outlet ubacujemo taj nas dinamicki deo stranice

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <div >
      <div className="wrapper-header">
        <ul>

          <li style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => navigate('/home')}>Home</li>
          <li style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => navigate('/about')}>About</li>
          <li style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => navigate('/contact')}>Contact</li>
          <li style={{ color: 'tomato', cursor: 'pointer' }} onClick={() => navigate('/posts')}>Posts</li>
        </ul>
      </div>

      <div className="main-content">
        {/* ovo ubacuje iz react-router
        --i znaci da pored glavnog menu-ija koji ce se prikazivati na svakoj str, prikazi i ostali sadrzaj u okviru te komponente, zato sto su nase komponente nested u okviru route */}
        <Outlet />
      </div>

    </div>

  )
}