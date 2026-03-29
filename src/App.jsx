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
    expiry:"2026.04.31",
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
                <tr>
                <th>Package ID</th>
                <th>Name</th>
                <th>Expiry Date</th>
                <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {BATCH_DATA.map(batch =>{
                  // TODO: finish 7-day expiry logic day here
                  // get 'today' and '7 days' from now
                  const today = new Date();
                  const sevenDaysFromNow = new Date();
                  sevenDaysFromNow.setDate(today.getDate() + 7);

                  //convert batch date string to a Date Object
                  const batchExpiry = new Date(batch.expiry);

                  // check if it falls in the warning window
                  const isExpiringSoon = batchExpiry >= today && batchExpiry <= sevenDaysFromNow;
                  const isExpired = batchExpiry < today;
                  return(
                  <tr>
                    <td>{batch.id}</td>
                    <td>{batch.name}</td>
                    <td style={{color: isExpired ? 'red' : (isExpiringSoon ? 'orange' : 'inherit'),
                      fontWeight: (isExpired || isExpiringSoon) ? 'bold' : 'normal'
                    }}>{batch.expiry} {isExpired ? '(EXPIRED)' : (isExpiringSoon ? '(!)' : '')}</td>
                    <td>{batch.status}</td>
                  </tr>
                  );
                })} 
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
