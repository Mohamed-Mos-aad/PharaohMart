// ** Style
import './App.css'
// ** Layouts
import { Routers } from './routers'
// ** Components
import MessagePop from './components/ui/MessagePop'
// ** Hooks && Tools
import { useAppSelector } from './app/hooks';



function App() {
  // ** States
  const messages = useAppSelector(state => state.messagePop);



  // ** Render
  const messagesRender = messages.map(msg => <MessagePop id={msg.id} message={msg.message} show={msg.show} success={msg.success} key={msg.id}/>)



  return (
    <>
      <main className='main'>
        <Routers />
        <div className="messages_pop">
          {messagesRender}
        </div>
      </main>
    </>
  )
}

export default App