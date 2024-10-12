import HeaderItem from "./HeaderItem";

export default function Header() {

const todos = [
  {
    id: 'wefw23',
    title: 'Finish the essay colloboration',
    isCompleted: false,
  },
  {
    id: 'wefw2323',
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    id: 'wefw23qweqwe2',
    title: 'Send the finished assignment',
    isCompleted: false,
  },
]

  return (
    <div className="text-white h-screen bg-gray-900">
      {todos.map(todo => (
        <HeaderItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
  
}
