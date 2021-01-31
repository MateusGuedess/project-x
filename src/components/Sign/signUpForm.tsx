import React from 'react';
import { Marginer } from '../marginer';

import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common';

export function SignUpForm(props: any) {

    function handleSubmit() {
        props.playExpandedAnimation()
        setTimeout(() => {
            props.setWhatForm('login')
        }, 1000)
    }
    
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name"/>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
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