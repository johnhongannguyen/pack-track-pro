import './App.css'
const BATCH_DATA = [
  {
    id:"DDPK7152",
    name:"Quick Oats",
    expiry:"2028.04.25",
    status:"Packed"
  },
  {
    id:"DDPK7155",
    name:"Instant Oats",
    expiry:"2028.04.25",
    status:"In Progress"
  },
  {
    id:"DDPK7180",
    name:"Rolled Oats",
    expiry:"2028.04.25",
    status:"Shipped"
  },
  {
    id:"DDPK7100",
    name:"Cajun Supreme Mix",
    expiry:"2028.04.25",
    status:"Pending"
  },
]
// TODO: finish 7-day expiry logic day here
const expiryWarning = new Date();

function App() {

  return (
    <>
      <header>
        <h1>Pack Track Pro</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Inventory</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="center">
          <h2>Current Food Packages</h2>
          <p>Monitoring packaging status and expiry dates</p>
          <div className="package-list">
            <table>
              <thead>
                <th>Package ID</th>
                <th>Name</th>
                <th>Expiry Date</th>
                <th>Status</th>
              </thead>
              <tbody>
                {BATCH_DATA.map(batch =>(
                  <tr>
                    <td>{batch.id}</td>
                    <td>{batch.name}</td>
                    <td>{batch.expiry}</td>
                    <td>{batch.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button>Count Packages</button>
        </section>

      </main>
      <footer>
        <p>&copy; 2026 Pack Track Pro</p>
      </footer>
    </>
  )
}

export default App
