import { I18nContext, useTranslation } from 'react-i18next'
import './App.css'
import './i18n'
function App() {
  const {t, i18n } = useTranslation();
  function myFunction() {
    document.body.classList.add("darkMode")
  }
  function myFunction2() {
    document.body.classList.remove("darkMode")
  }
  return (
    <div>
      <header className='container'>
        <nav>
          <img src="./l.png" alt="" />
          <ul>
            <li>
              <select name="" id="" onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
                <option value="uz">Uzbek</option>
                <option value="ru">Russia</option>
                <option value="en">English</option>
              </select>
            </li>
            <li><button className='btn'> <i className="fa-solid fa-magnifying-glass"></i> {t("menu1")}</button></li>
            <li><button className='btn'> <i className="fa-solid fa-user"></i> Login</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='hero'>
          <div className="container box">
            <div className="dic">
               <div className="text3">
              <h1>{t("title")}</h1>
              <p>{t("text")}</p>
            </div>
            
          <div className="text">
            <button className='btn3'> <i class="fa-solid fa-motorcycle"></i> Delivery</button>
            <button className='btn3'> <i class="fa-solid fa-bag-shopping"></i> Pickup</button>
            <div className="text2">
            <input type="text" placeholder=' Enter Your Address' />
            <button className='btn2'>Find Food <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
            </div>
           
            <img src="./i.png" alt="" />
          </div>
        </section>
        <div className="hero2">
          <div className="ota container" >
            <div className="card">
              <img src="./f.png" alt="" />
              <h2>Greys Vage</h2>
              <button className='btn3'>6 Days Remaining</button>
            </div>
            <div className="card">
              <img src="./f.png" alt="" />
              <h2>Greys Vage</h2>
              <button className='btn3'>6 Days Remaining</button>
            </div>
            <div className="card">
              <img src="./f.png" alt="" />
              <h2>Greys Vage</h2>
              <button className='btn3'>6 Days Remaining</button>
            </div>
            <div className="card">
              <img src="./f.png" alt="" />
              <h2>Greys Vage</h2>
              <button className='btn3'>6 Days Remaining</button>
            </div>
          </div>
        </div>
        <section className='hero3'>
          <h3>How does it work</h3>
          <div className="ota2">
            <div className="card2">
              <img src="./m.png" alt="" />
              <h4>Select location</h4>
              <p>Choose the location where your food will be delivered.</p>
            </div>
            <div className="card2">
              <img src="./m.png" alt="" />
              <h4>Select location</h4>
              <p>Choose the location where your food will be delivered.</p>
            </div>
            <div className="card2">
              <img src="./m.png" alt="" />
              <h4>Select location</h4>
              <p>Choose the location where your food will be delivered.</p>
            </div>
            <div className="card2">
              <img src="./m.png" alt="" />
              <h4>Select location</h4>
              <p>Choose the location where your food will be delivered.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
