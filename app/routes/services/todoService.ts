const todos = []

export const addTodo = (todo) => {
    todos.push(todo)
}

export const getTodos = () => {
    return todos
}