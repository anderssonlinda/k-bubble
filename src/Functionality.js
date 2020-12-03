import React, { Component } from 'react'
import HealthStatus from './HealthStatus'
import NewGame from './NewGame'
import Actions from './Actions'
import Shower from './Shower'
import Party from './Party'
import Train from './Train'
import Feed from './Feed'
import Toilet from './Toilet'

import './Functionality.css'
import normKoala from './K-norm-min.png'
import deadKoala from './K-ded-min.gif'

export default class Functionality extends Component{

    state = {
        hunger: 10,
        boredom: 6,
        dirty: 10,
        toilet: 4,
        action: null,
        healthPoints: 10
    }

    isNotFull = (type) => {
        return type < 10
    }

    isDead = () => {
        return this.state.healthPoints <= 0 
    }

    isHappy = () => {
        return this.state.hunger < 5 && this.state.dirty < 5 && this.state.toilet < 5 && this.state.boredom < 5
    }

    resetActivity = (time) => {
        setTimeout(()=> {
            this.setState({
                action: null
            })
            document.body.style.backgroundImage= "";
        }, time)
    }

    restartGame = () => {
        this.setState({
            hunger: 10,
            boredom: 6,
            dirty: 10,
            toilet: 4,
            action: null,
            healthPoints: 10 
        })
    }

    adjustHealthPoints = () => {
        // return this.state.hunger < 5 && this.state.dirty < 5 && this.state.toilet < 5 && this.state.boredom < 5
        if(this.isHappy()){
            this.setState({
                healthPoints: this.state.healthPoints += 1
            })
        } else {
            this.setState({
                healthPoints: this.state.healthPoints -= 1
            })
        }
    }

    adjustDirtyStatus = (amount) => {
        let dirtyStatus = this.state.dirty

        if(this.isNotFull(this.state.dirty)){
            dirtyStatus + amount > 10 ? amount = (10-dirtyStatus) : amount = amount

            this.setState({
                dirty: this.state.dirty += amount
            })
        }
    }

    adjustHungerStatus = (amount) => {
        let hungerStatus = this.state.hunger
        if(this.isNotFull(hungerStatus)){
            hungerStatus + amount > 10 ? amount = (10-hungerStatus) : amount = amount
            this.setState({
                hunger: hungerStatus += amount
            })
        }
    }

    adjustToiletStatus = (amount) => {
        let toiletStatus = this.state.toilet

        if(this.isNotFull(this.state.toilet)){
            toiletStatus + amount > 10 ? amount = (10-toiletStatus) : amount = amount

            this.setState({
                toilet: this.state.toilet += amount
            })
        }
    }

    adjustBoredomStatus = (amount) => {
        if(this.isNotFull(this.state.boredom)){
            this.setState({
                boredom: this.state.boredom += amount
            })
        }
    }

    feed = () => {
        let amount = 4
        this.state.hunger < 4 ? amount = this.state.hunger : amount = 4
        this.setState({
            hunger: this.state.hunger -= amount,
            action: 'feed'
        })

        this.adjustToiletStatus(3)

        this.adjustHealthPoints()

        this.resetActivity(7000)
    }
    
    party = (e) => {
        this.setState({
            boredom: 0,
            action: 'party'
        })

        this.adjustDirtyStatus(2)

        this.adjustHungerStatus(3)

        this.adjustToiletStatus(3)
        
        this.adjustHealthPoints()

        this.resetActivity(7000)
    }

    wash = () => {
        this.setState({
            dirty: 0,
            action: 'wash'
        })
        this.adjustHealthPoints()

        this.adjustBoredomStatus(2)

        this.resetActivity(4000)
    }

    train = () => {
        if(this.state.boredom > 2){
            this.setState({
                boredom: this.state.boredom -= 3,
                action: 'train'
            })
        } else {
            this.setState({
                boredom: 0,
                action: 'train'
            })
        }
      
        this.adjustHungerStatus(3)
        
        this.adjustDirtyStatus(3)
        
        this.adjustHealthPoints()

        this.resetActivity(4000)
    }

    toilet = () => {
        this.setState({
            toilet: 0,
            action: 'toilet'
        })

        this.adjustDirtyStatus(2)

        this.adjustHealthPoints()
    
        this.resetActivity(3000)
    }

    activity = () => {
        let koalaImg = <img className="character" src={normKoala} alt=""/>
        if(this.isDead()){
            return <img className="character" src={deadKoala} alt=""/>
        } else if(this.state.action === 'wash'){
            return <Shower />
        } else if (this.state.action === 'party'){
            return <Party />
        } else if(this.state.action === 'toilet'){
            return <Toilet />
        } else if(this.state.action === 'train'){
            return <Train />
        } else if(this.state.action === 'feed') {
            return <Feed />
        } else {
            return koalaImg
        }
    }

    render(){

        return(
            <div className="functionality">
                <section> 
                    {this.isDead()
                        ?<NewGame restartGame={this.restartGame}/> 
                        :<HealthStatus 
                            hunger={this.state.hunger}
                            boredom={this.state.boredom}
                            dirty={this.state.dirty}
                            toilet={this.state.toilet}
                            healthPoints={this.state.healthPoints}
                        />
                    }
                    <div className="koala">
                        {this.activity()}
                    </div>
                </section>
                <Actions 
                    wash={this.wash}
                    feed={this.feed}
                    party={this.party}
                    train={this.train}
                    toilet={this.toilet}
                />
            </div>
        )
    }
}   
