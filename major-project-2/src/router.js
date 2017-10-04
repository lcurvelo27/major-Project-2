import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShelfA from './components/shelf/shelfA';
import ShelfB from './components/shelf/shelfB';
import ShelfC from './components/shelf/shelfC';
import ShelfD from './components/shelf/shelfD';
import Homepage from './components/homepage/homepage';
import AddToBinA from './components/addToBin/addToBin/addToBin_A';
import AddToBinB from './components/addToBin/addToBin/addToBin_B';
import AddToBinC from './components/addToBin/addToBin/AddToBin_C';
import AddToBinD from './components/addToBin/addToBin/AddToBin_D';


export default (
    <Switch>
        <Route component={ Homepage } path ='/' exact />
        <Route path ='/bins/A' component={ShelfA} />
        <Route path ='/bins/A1' component={AddToBinA} />
        <Route path ='/bins/A2' component={AddToBinA} />
        <Route path ='/bins/A3' component={AddToBinA} />
        <Route path ='/bins/A4' component={AddToBinA} />
        <Route path ='/bins/A5' component={AddToBinA} />
        <Route path ='/bins/B1' component={AddToBinB} />
        <Route path ='/bins/B2' component={AddToBinB} />
        <Route path ='/bins/B3' component={AddToBinB} />
        <Route path ='/bins/B4' component={AddToBinB} />
        <Route path ='/bins/B5' component={AddToBinB} />
        <Route path ='/bins/C1' component={AddToBinC} />        
        <Route path ='/bins/C2' component={AddToBinC} />        
        <Route path ='/bins/C3' component={AddToBinC} />        
        <Route path ='/bins/C4' component={AddToBinC} />        
        <Route path ='/bins/C5' component={AddToBinC} />
        <Route path ='/bins/D1' component={AddToBinD} />    
        <Route path ='/bins/D2' component={AddToBinD} />    
        <Route path ='/bins/D3' component={AddToBinD} />    
        <Route path ='/bins/D4' component={AddToBinD} />    
        <Route path ='/bins/D5' component={AddToBinD} />                    
        <Route component={ShelfB} path ='/bins/B' />
        <Route component={ShelfC} path ='/bins/C' />
        <Route component={ShelfD} path ='/bins/D' />    
    </Switch>
)