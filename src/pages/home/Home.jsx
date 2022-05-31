import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'

const Home = () => {
  return (
    <div className='home'>
      
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>

          <div className="widgets">
            <Widgets type="user"/>
            <Widgets type="order"/>
            <Widgets type="earning"/>
            <Widgets type="balance"/>
          </div>

      </div>
    </div>
  )
}

export default Home