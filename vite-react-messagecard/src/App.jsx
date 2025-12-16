
import MessageCard from './MessageCard'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Reusable Message Cards</h2>

      <MessageCard 
        title="Welcome"
        message="Welcome to our React application."
      />

      <MessageCard 
        title="Success"
        message="Your data has been saved successfully."
      />

      <MessageCard 
        title="Warning"
        message="Please check the entered details."
      />

      <MessageCard 
        title="Goodbye"
        message="Thank you for visiting!"
      />
    </div>
  )
}

export default App
