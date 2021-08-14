import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { StartProvider } from '../components/Contexts/StartContext'
import { NavBar } from '../components/NavBar'
import { AboutScreen } from '../components/screens/AboutScreen'
import { MainScreen } from '../components/screens/MainScreen'
import { PracticeScreen } from '../components/screens/PracticeScreen'
import { VoteScreen } from '../components/screens/VoteScreen'
import { VotesSavesScreen } from '../components/screens/VotesSavedScreen'
import { VoteVentana } from '../components/screens/VoteVentana'
import { PracticeScreen } from '../components/screens/PracticeScreen'

export const AppRouter = () => {
    return (
            <StartProvider>
                <Router>
                    <Switch>
                        <Route exact path="/vote-window" component={VoteVentana} />
                        <>
                            <NavBar />
                            <Switch>
                                <Route path="/about" component={AboutScreen} />
                                <Route path="/practice" component={PracticeScreen} />
                                <Route path="/saved-votes" component={VotesSavesScreen} />
                                <Route path="/vote=:id" component={VoteScreen} />
                                <Route exact path="/" component={MainScreen} />
                                <Redirect to="/" />
                            </Switch>
                        </>
                    </Switch>
                </Router>
            </StartProvider>
    )
}