import React from 'react';
import { setTimeout } from 'timers';
import { Marginer } from '../marginer';

import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';

export function LoginForm(props: any) {

    function handleSubmit() {
        props.playExpandedAnimation()
        setTimeout(() => {
            props.setWhatForm('signup')
        }, 1000)
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="email"/>
                <Input type="password" placeholder="password"/>
            </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#">Forget your password</MutedLink>
            <Marginer direction="vertical" margin="1em"/>
            <SubmitButton>Sign In</SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#">
                Don't have an account? <BoldLink onClick={handleSubmit} href="#">Signup</BoldLink>
            </MutedLink>
        </BoxContainer>
    )
}