import { expect } from "vitest"
import { setTodosRepo, todosSlice, changeTodoStatus, clearTodos} from "./todosSlice"

describe('test todos redusers', () => {
    test('setTodosReduser', () => {
        const initialState = {
            value: [],
        };
        expect(todosSlice.reducer(initialState, setTodosRepo({
            todos: 'make todo list',
            id: 'e95afa86-7e39-433e-86a9-836c13ba1be5',
            done: false,
        }))).toEqual({value: [{
            todos: 'make todo list',
            id: 'e95afa86-7e39-433e-86a9-836c13ba1be5',
            done: false,
        }]})
    })
    test('change todo status', () => {
        const initialState = {
            value: [{
                todos: 'make todo list',
                id: 'e95afa86-7e39-433e-86a9-836c13ba1be5',
                done: false,
            },
            {
                todos: 'be happy',
                id: 'e95afa86-7e39-433e-86a9-836c13ba1be6',
                done: false,
            }],
        };
        expect(todosSlice.reducer(initialState, changeTodoStatus({
            todos: 'make todo list',
            id: 'e95afa86-7e39-433e-86a9-836c13ba1be5',
            done: true,
        }))).toEqual({value: [{
            todos: 'make todo list',
            id: 'e95afa86-7e39-433e-86a9-836c13ba1be5',
            done: true,
        },
        {
            todos: 'be happy',
            id: 'e95afa86-7e39-433e-86a9-836c13ba1be6',
            done: false,
        }]})
    })
    test('clear all completed todos', () => {
        const initialState = {
            value: [{
                todos: 'make todo list',
                id: 'e95afa86-7e39-433e-86a9-836c13ba1be5',
                done: false,
            },
            {
                todos: 'go home',
                id: 'e95afa86-7e39-433e-86a9-836c13ba1be4',
                done: true,
            },
            {
                todos: 'sleep',
                id: 'e95afa86-7e39-433e-86a9-836c13ba1be6',
                done: true,
            }],
        };
        expect(todosSlice.reducer(initialState, clearTodos())).toEqual({value: [{
            todos: 'make todo list',
            id: 'e95afa86-7e39-433e-86a9-836c13ba1be5',
            done: false,
        }]})
    })
})