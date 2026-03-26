import './App.css'

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
                <tr>
                <th>DDPK7152</th>
                <td>Quick Oats</td>
                <td>2028.04.25</td>
                <td>10 cases</td>
                </tr>
                <tr>
                <th>DDPK7155</th>
                <td>Instant Oats</td>
                <td>2028.04.25</td>
                <td>5 cases</td>
                </tr>
                <tr>
                <th>DDPK7180</th>
                <td>Rolled Oats</td>
                <td>2028.04.25</td>
                <td>500 cases</td>
                </tr>
                <tr>
                <th>DDPK7100</th>
                <td>Cajun Supreme Mix</td>
                <td>2028.04.25</td>
                <td>69 cases</td>
                </tr>
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
