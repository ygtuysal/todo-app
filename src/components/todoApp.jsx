import React,{ Suspense }  from 'react';
import { ItemsList } from './itemsList'
import { Container } from '@material-ui/core'
import Spinner from '../components/spinner';
import {InputComponent} from '../components/inputComponent';

export const TodoApp = ({ state, dispatch }) => {
    return (
        <Container fixed >
            <Suspense fallback={<Spinner/>}>
                <InputComponent dispatch={dispatch} />
            </Suspense> 
            <ItemsList state={state} dispatch={dispatch} />
        </Container>
    );
}
