import {Route, Switch} from 'react-router-dom'
import './App.css'
import TechEra from './components/TechEra'
import NotFound from './components/NotFound'
import Header from './components/Header'
import CourseItems from './components/CourseItems'

// Replace your code here
const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={TechEra} />
      <Route exact path="/courses/:id" component={CourseItems} />
      <Route exact component={NotFound} />
    </Switch>
  </>
)

export default App
