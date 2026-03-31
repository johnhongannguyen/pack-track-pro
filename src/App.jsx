import './App.css'
const BATCH_DATA = [
  {
    id:"DDPK7152",
    name:"Quick Oats",
    expiry:"2026.04.01",
    status:"Packed"
  },
  {
    id:"DDPK7155",
    name:"Instant Oats",
    expiry:"2026.03.31",
    status:"In Progress"
  },
  {
    id:"DDPK7180",
    name:"Rolled Oats",
    expiry:"2026.03.25",
    status:"Shipped"
  },
  {
    id:"DDPK7100",
    name:"Cajun Supreme Mix",
    expiry:"2026.03.01",
    status:"Pending"
  },
]

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
          <p>Total Package : {BATCH_DATA.length} cases </p>
          <button>Count Packages</button>
          <p>Monitoring packaging status and expiry dates</p>
          <div className="package-list">
            <table>
              <thead>
                <tr>
                <th>Package ID</th>
                <th>Name</th>
                <th>Expiry Date</th>
                <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {BATCH_DATA.map(batch => {
                // today and 7 days from now
                const today = new Date();
                console.log(today.getDate())
                console.log(today.getMonth())
                const sevenDaysFromNow = new Date();
                sevenDaysFromNow.setDate(today.getDate() + 7);

                // convert expired date from string to Date objects
                const expiredDate = new Date(batch.expiry);
                console.log(expiredDate);

                // expire soon and expired
                const isExpiredSoon = expiredDate >= today && expiredDate <= sevenDaysFromNow;
                const isExpired = expiredDate < today;
                return(
                  <tr>
                    <td>{batch.id}</td>
                    <td>{batch.name}</td>
                    <td style={{
                      color: isExpired ? 'red' : (isExpiredSoon ? 'orange' : 'inherit'),
                      fontWeight: (isExpired || isExpiredSoon) ? 'bold' : 'normal'
                    }}
                    >{batch.expiry} {isExpired ? '(EXPIRED)' : (isExpiredSoon ? '(!)' : '')}</td>
                    <td style={{
                      color: (batch.status == 'Packed' || batch.status == 'Shipped') ? 'green' : (batch.status == 'In Progress' ? 'Red': 'inherit'), 
                      fontWeight: (batch.status == 'Pending') ? 'bolder' : 'normal'
                    }}
                    >{batch.status}</td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        
        </section>

      </main>
      <footer>
        <p>&copy; 2026 Pack Track Pro</p>
      </footer>
    </>
  )
}

export default App
