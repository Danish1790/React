import React from 'react';
import {Provider} from 'react-redux'
import store from './reduxwork/redux/cake/Store'

// import Website from './website1/Website';
// import Carousel from './carousel/Carousel' 
// import Clock from './clock/clock'
// import Tweets from './props/tweets'
// import Fetchapi from './fetchapi/fetch';
// import Tours from './tours/tours'
// import Game from './tictactoe/Game'
// import Store from './eCommereceStore/Store';
// import Todoapp from './todowithbackend/front/Todoapp';
// import ComA from './contextapi/ComA';
// import Logsign from './loginsignup/front/Logsign'

// -----redux work
import Cakecontainer from './reduxwork/components/Cakecontainer';
import IcecreamContainer from './reduxwork/components/IcecreamContainer';
import HooksCakeContainer from './reduxwork/components/HooksCakeContainer';
import NewCakeContainer from './reduxwork/components/newCakeContainer';
import ItemContainer from './reduxwork/components/ItemContainer';

const App = () =>{



  return(
    <>
    <Provider store={store}>
      <Cakecontainer/>
      <HooksCakeContainer/>
      <IcecreamContainer/>
      <NewCakeContainer/>
      <ItemContainer cake/>
      <ItemContainer/>
    </Provider>
    </>
  )
}

export default App;
