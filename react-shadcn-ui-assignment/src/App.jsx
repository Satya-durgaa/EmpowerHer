import FeedbackForm from "./components/FeedbackForm";
import ImageSlideshow from "./components/ImageSlideshow";
import TodoApp from "./components/TodoApp";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <FeedbackForm />
      <ImageSlideshow />
      <TodoApp />
    </div>
  );
}