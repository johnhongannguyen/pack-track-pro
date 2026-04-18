import './App.css'
import { useState } from 'react';

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
    expiry:"2026.04.31",
    status:"In Progress"
  },
  {
    id:"DDPK7180",
    name:"Rolled Oats",
    expiry:"2026.05.25",
    status:"Shipped"
  },
  {
    id:"DDPK7100",
    name:"Cajun Supreme Mix",
    expiry:"2026.06.01",
    status:"Pending"
  },
  {
    id:"DDPK7190",
    name:"Fancy Nut Mix",
    expiry:"2026.04.10",
    status:"Shipped"
  },
  {
    id:"DDPK7899",
    name:"Sierra Mountain Mix",
    expiry:"2026.04.11",
    status:"Pending"
  },
  {
    id:"DDPK7709",
    name:"Fancy Nut Mix",
    expiry:"2026.04.11",
    status:"Shipped"
  },
]



function App() {
// updating data in the batch
const [data, setData] = useState(BATCH_DATA);
// updating the ascending
const [isAsc, setIsAsc] = useState(true);
// updating search keys or words
const [searchTerm, setSearchTerm] = useState('');

// function to sort date expiry
const handleSort = () =>{
  const sortData = [...data].sort((a,b) =>{
    const dateA = new Date(a.expiry);
    const dateB = new Date(b.expiry);

    return isAsc ? dateA - dateB : dateB - dateA;
  })
  setData(sortData);
  setIsAsc(!isAsc);
}
const filteredSearch = data.filter((batch) => 
  batch.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
  batch.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
  batch.expiry.includes(searchTerm) ||
  batch.status.toLowerCase().includes(searchTerm.toLowerCase())
)

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
          <p>Total Package: {filteredSearch.length} {filteredSearch.length === 1 ? 'case' : 'cases'}</p>
          <p>Monitoring packaging status and expiry dates</p>
          <div className="package-list">
            <div className='search-containers'>
              <input 
                type='text'
                placeholder='Enter your search words'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{'marginBottom': '20px', 'padding': '20px', 'width': '300px'}}
              />

            </div>
            {/* start of conditional rendering */}
            {filteredSearch.length === 0 ? (
              <div
              style={{
                padding: '40px',
                textAlign: 'center',
                backgroundColor: '#1a1a1a',
                borderRadius: '8px',
                border: '1px dashed #444'
              }}
              >
                <p>No packing found matching "<strong>{searchTerm}</strong>"</p> 
                <button
                onClick={() => setSearchTerm('')}
                style={{marginTop: '10px', padding: '8px 16px',cursor:'pointer' }}
                >Clear Search</button>

              </div>
            ):(
            <table>
              <thead>
                <tr>
                <th>Package ID</th>
                <th>Name</th>
                <th style={{'padding': '10px'}}>
                  <div style={{
                    'display': 'flex', 
                    'justifyContent': 'center', 
                    'alignItems':'center',
                    'gap':'10px'}}>
                  <span>Expiry Date</span>
                   <button 
                   className='sort-button'
                   onClick={handleSort}
                   style={{'padding':'2px 5px', 'fontSize':'0.8rem'}}
                   >{isAsc ? 'Sort ↑' : 'Sort ↓'}</button>
                   </div>
                </th>
               
                <th>Status</th>
                </tr>
              </thead>
             <tbody>
          {filteredSearch.map(batch => { // Use the filtered list here
            const today = new Date();
            const sevenDaysFromNow = new Date();
            sevenDaysFromNow.setDate(today.getDate() + 7);

            const expiredDate = new Date(batch.expiry);
            const isExpiredSoon = expiredDate >= today && expiredDate <= sevenDaysFromNow;
            const isExpired = expiredDate < today;

            return (
              <tr key={batch.id}>
                <td>{batch.id}</td>
                <td>{batch.name}</td>
                <td style={{
                  color: isExpired ? 'red' : (isExpiredSoon ? 'orange' : 'inherit'),
                  fontWeight: (isExpired || isExpiredSoon) ? 'bold' : 'normal'
                }}>
                  {batch.expiry} {isExpired ? '(EXPIRED)' : (isExpiredSoon ? '(!)' : '')}
                </td>
                <td style={{
                  color: (batch.status === 'Packed' || batch.status === 'Shipped') ? 'green' : (batch.status === 'In Progress' ? 'Red' : 'inherit'),
                  fontWeight: (batch.status === 'Pending') ? 'bolder' : 'normal'
                }}>
                  {batch.status}
                </td>
              </tr>
            );
          })}
            </tbody>
            </table>
            )}
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
