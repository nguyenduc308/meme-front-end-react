import React from 'react'
import { LoadingStyled } from './loading.styled'

const Loading = ({ isLoading = false }) => {
    return (
        <LoadingStyled isLoading={isLoading}>
            Loading....
        </LoadingStyled>
    )
}

export default Loading